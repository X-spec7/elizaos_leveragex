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
import { getTradingFeePairTemplate } from '../template'
import { getTradingPairFeeAndFormat } from '../utils'
import { getTradingFeePairExamples } from '../examples'

export const getTradingPairFeeAction: Action = {
  name: "GET_TRADING_FEE_PAIR",
  similes: [
    "CURRENT_TRADING_FEE_PAIR",
    "PAIR_FEE_DETAILS",
    "TRADING_PAIR_FEE_INFO",
    "PAIR_TRANSACTION_FEE",
  ],
  description: "Get the trading fee details for a specified trading pair.",
  validate: async () => {
    return true;
  },
  handler: async (
    runtime: IAgentRuntime,
    message: Memory,
    state: State,
    _options: { [key: string]: unknown },
    callback: HandlerCallback
  ) => {
    if (!state) {
      state = (await runtime.composeState(message)) as State;
    }
    state = await runtime.updateRecentMessageState(state);

    console.log('🎯 Processing message:', message.content);

    const stateContext = composeContext({
      state,
      template: getTradingFeePairTemplate
    });

    console.log('📝 Generated context:', stateContext);

    const content = await generateMessageResponse({
      runtime,
      context: stateContext,
      modelClass: ModelClass.SMALL,
    });

    console.log('✨ Template response:', {
      rawContent: content,
      from: content?.from,
      to: content?.to,
    });

    if (!content?.from || !content?.to || typeof content.from !== 'string' || typeof content.to !== 'string') {
      console.warn('⚠️ Fee type not found in template response');
      callback({
        text: "Please specify whether you want the highest or lowest trading fee pair. For example:\n• 'Show me the highest trading fee pair'\n• 'Find the lowest fee trading pair'",
      });
      return;
    }

    const { fetchPairs } = fetchStatsService();

    try {
      const pairsData = await fetchPairs();
      const formattedResponse = getTradingPairFeeAndFormat({
        pairs: pairsData.pairs,
        from: content.from,
        to: content.to,
      })

      callback({ text: formattedResponse });
    } catch (error) {
      console.error('❌ Error in handler:', error);
      const errorMessage = error instanceof Error ? error.message : 'Unknown error';
      callback({
        text: `I encountered an error while fetching trading fees:\n${errorMessage}\n\nPlease try again.`,
      });
    }
  },
  examples: getTradingFeePairExamples
};