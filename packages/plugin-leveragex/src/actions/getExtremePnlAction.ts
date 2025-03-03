import {
  Action,
  composeContext,
  generateMessageResponse,
  HandlerCallback,
  IAgentRuntime,
  Memory,
  ModelClass,
  State
} from '@elizaos/core'

import { fetchStatsService } from '../services'
import { getExtremePnlAndFormat } from '../utils/getExtremePnlAndFormat'
import { getExtremePnLTradeExamples } from '../examples'
import { getExtremePnLTradeTemplate } from '../template'

export const getExtremePnlAction: Action = {
  name: "GET_EXTREME_PNL_TRADE",
  similes: [
    "HIGHEST_PNL",
    "LOWEST_PNL",
    "TOP_PROFIT_TRADE",
    "WORST_LOSS_TRADE",
    "BEST_TRADING_PNL",
    "MAX_PROFIT_TRADE",
    "BIGGEST_WINNING_TRADE",
    "BIGGEST_LOSS_TRADE",
    "WORST_PERFORMANCE_TRADE",
  ],
  description: "Get the trade with the highest or lowest PnL based on user input",
  validate: async () => {
    return true
  },
  handler: async (
    runtime: IAgentRuntime,
    message: Memory,
    state: State,
    _options: { [key: string]: unknown },
    callback: HandlerCallback
  ) => {
    if (!state) {
      state = (await runtime.composeState(message)) as State
    }
    state = await runtime.updateRecentMessageState(state)

    console.log('🎯 Processing message:', message.content);

    const stateContext = composeContext({
      state,
      template: getExtremePnLTradeTemplate
    });

    console.log('📝 Generated context:', stateContext);

    const content = await generateMessageResponse({
      runtime,
      context: stateContext,
      modelClass: ModelClass.SMALL,
    })

    console.log('✨ Template response:', {
      rawContent: content,
      pnlType: content?.pnlType,
    });

    if (content?.pnlType !== 'highest' && content?.pnlType !== 'lowest') {
      console.warn('⚠️ PnL type not found in template response');
      callback({
        text: "Please specify whether you want the highest or lowest PnL trade. For example:\n• 'Show me the highest PnL trade'\n• 'Find the lowest PnL trade'",
      });
      return;
    }

    const { fetchTrades } = fetchStatsService()

    try {
      const tradesData = await fetchTrades()

      const extremePnlTradeData = getExtremePnlAndFormat({
        trades: tradesData.trades,
        status: content.pnlType
      })

      callback({
        text: extremePnlTradeData
      })
    } catch (error) {
      console.error('❌ Error in handler:', error)

      const errorMessage = error instanceof Error ? error.message : 'Unknown error'
      callback({
        text: `I encountered an error while fetching trade statistics:\n${errorMessage}\n\nPlease try again.`,
      })
    }
  },
  examples: getExtremePnLTradeExamples
}
