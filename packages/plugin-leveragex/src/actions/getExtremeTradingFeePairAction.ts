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
import { getExtremeTradingFeePairTemplate } from '../template'
import { getExtremeTradingFeePairAndFormat } from '../utils'
import { getExtremeTradingFeePairExamples } from '../examples'

export const getExtremeTradingFeePairAction: Action = {
  name: "GET_EXTREME_TRADING_FEE_PAIR",
  similes: [
    "HIGHEST_AND_LOWEST_FEE_PAIR",
    "MAX_MIN_TRADING_FEE_PAIR",
    "TOP_BOTTOM_FEE_PAIR",
    "MOST_AND_LEAST_EXPENSIVE_PAIR",
    "EXTREME_FEE_ASSET_PAIR",
  ],
  description: "Get the pair of which trading fee is the highest or lowest in the market.",
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
    state = await runtime.updateRecentMessageState(state);

    console.log('🎯 Processing message:', message.content);

    const stateContext = composeContext({
      state,
      template: getExtremeTradingFeePairTemplate
    });

    console.log('📝 Generated context:', stateContext);

    const content = await generateMessageResponse({
      runtime,
      context: stateContext,
      modelClass: ModelClass.SMALL,
    })

    console.log('✨ Template response:', {
      rawContent: content,
      feeType: content?.feeType,
    });

    if (content?.feeType !== 'highest' && content?.feeType !== 'lowest') {
      console.warn('⚠️ Fee type not found in template response');
      callback({
        text: "Please specify whether you want the highest or lowest trading fee pair. For example:\n• 'Show me the highest trading fee pair'\n• 'Find the lowest fee trading pair'",
      });
      return;
    }

    const { fetchPairs } = fetchStatsService()

    try {
      const pairsData = await fetchPairs()

      const formattedExtremeTradingFeePair = await getExtremeTradingFeePairAndFormat({
        pairs: pairsData.pairs,
        feeType: content.feeType
      });

      callback({
        text: formattedExtremeTradingFeePair
      })
    } catch (error) {
      console.error('❌ Error in handler:', error)

      const errorMessage = error instanceof Error ? error.message : 'Unknown error'
      callback({
        text: `I encountered an error while fetching trading pairs statistics:\n${errorMessage}\n\nPlease try again.`,
      })
    }
  },
  examples: getExtremeTradingFeePairExamples
}
