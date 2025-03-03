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
import { getPoLOpenTradesCountExample } from '../examples';
import { getPoLOpenTradesCountTemplate } from '../template';
import { getPoLTradeCountAndFormat } from '../utils';

export const getPoLOpenTradesCountAction: Action = {
  name: "GET_OPEN_TRADES_STATUS",
  similes: [
    "OPEN_PROFITABLE_TRADES",
    "OPEN_LOSING_TRADES",
    "PROFITABLE_OPEN_TRADES_COUNT",
    "LOSING_OPEN_TRADES_COUNT",
  ],
  description: "Get the count of open trades currently in profit or at a loss.",
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
      template: getPoLOpenTradesCountTemplate
    });

    console.log('📝 Generated context:', stateContext);

    const content = await generateMessageResponse({
      runtime,
      context: stateContext,
      modelClass: ModelClass.SMALL,
    });

    console.log('✨ Template response:', content);

    if (content.tradeStatus !== 'profit' && content.tradeStatus !== 'loss') {
      console.warn('⚠️ Trade status not found in template response');
      callback({
        text: "Please specify whether you want the count of profitable or losing open trades. For example:\n• 'How many open trades are in profit?'\n• 'How many open trades are at a loss?'",
      });
      return;
    }

    const { fetchTrades } = fetchStatsService();

    try {
      const tradesData = await fetchTrades();
      const formattedResponse = getPoLTradeCountAndFormat({
        trades: tradesData.trades,
        status: content.tradeStatus,
      });

      callback({ text: formattedResponse });
    } catch (error) {
      console.error('❌ Error in handler:', error);
      const errorMessage = error instanceof Error ? error.message : 'Unknown error';
      callback({
        text: `I encountered an error while fetching open trades data:\n${errorMessage}\n\nPlease try again.`,
      });
    }
  },
  examples: getPoLOpenTradesCountExample
};
