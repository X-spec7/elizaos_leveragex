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
import { getAllOpenTradePairsAndFormat } from '../utils';
import { getAllOpenTradePairsExamples } from '../examples';

export const getAllOpenTradePairsAction: Action = {
  name: "GET_ALL_OPEN_TRADE_PAIRS",
  similes: [
    "LIST_OPEN_TRADE_PAIRS",
    "SHOW_ALL_OPEN_PAIRS",
    "OPEN_TRADES_BY_PAIR",
    "ACTIVE_TRADING_PAIRS"
  ],
  description: "List all trading pairs that currently have open trades, with counts of long and short positions.",
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

    const { fetchTrades } = fetchStatsService();

    try {
      const pairsData = await fetchTrades();
      const formattedResponse = getAllOpenTradePairsAndFormat({
        trades: pairsData.trades
      });

      callback({ text: formattedResponse });
    } catch (error) {
      console.error('❌ Error in handler:', error);
      const errorMessage = error instanceof Error ? error.message : 'Unknown error';
      callback({
        text: `I encountered an error while fetching open trade pairs:\n${errorMessage}\n\nPlease try again.`,
      });
    }
  },
  examples: getAllOpenTradePairsExamples
};
