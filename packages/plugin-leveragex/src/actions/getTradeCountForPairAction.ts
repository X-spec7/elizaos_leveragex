import {
  Action,
  composeContext,
  generateMessageResponse,
  HandlerCallback,
  IAgentRuntime,
  Memory,
  ModelClass,
  State
} from '@elizaos/core';

import { fetchStatsService } from '../services';
import { getTradeCountForPairTemplate } from '../template';
import { getTradeCountForPairAndFormat } from '../utils';
import { getTradeCountForPairExamples } from '../examples';

export const getTradeCountForPairAction: Action = {
  name: "GET_TRADE_COUNT_FOR_PAIR",
  similes: [
    "TRADE_COUNT_FOR_PAIR",
    "NUMBER_OF_OPEN_TRADES",
    "PAIR_TRADE_COUNT",
    "OPEN_TRADES_FOR_PAIR"
  ],
  description: "Get the number of open trades for a specified trading pair.",
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
      template: getTradeCountForPairTemplate
    });

    console.log('📝 Generated context:', stateContext);

    const content = await generateMessageResponse({
      runtime,
      context: stateContext,
      modelClass: ModelClass.SMALL,
    });

    console.log('✨ Template response:', {
      rawContent: content,
      pair: content?.pair,
    });

    if (!content?.pair || typeof content.pair !== 'string') {
      console.warn('⚠️ Trading pair not found in template response');
      callback({
        text: "Please specify the trading pair you want the trade count for. Example:\n• 'How many open trades for BTC/USD?'\n• 'Show me the number of trades for ETH/USD'",
      });
      return;
    }

    const { fetchTrades } = fetchStatsService();

    try {
      const pairsData = await fetchTrades();
      const formattedResponse = getTradeCountForPairAndFormat({
        trades: pairsData.trades,
        pair: content.pair,
      });

      callback({ text: formattedResponse });
    } catch (error) {
      console.error('❌ Error in handler:', error);
      const errorMessage = error instanceof Error ? error.message : 'Unknown error';
      callback({
        text: `I encountered an error while fetching trade counts:\n${errorMessage}\n\nPlease try again.`,
      });
    }
  },
  examples: getTradeCountForPairExamples
};
