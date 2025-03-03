import {
  Action,
  generateMessageResponse,
  HandlerCallback,
  IAgentRuntime,
  Memory,
  State,
} from "@elizaos/core";

import { fetchStatsService } from "../services";
import { getMostOpenTradesPairAndFormat } from "../utils";
import { getMostOpenTradesPairExamples } from "../examples";

export const getMostOpenTradesPairAction: Action = {
  name: "GET_MOST_OPEN_TRADES_PAIR",
  similes: [
    "PAIR_WITH_MOST_OPEN_TRADES",
    "MOST_ACTIVE_TRADING_PAIR",
    "HIGHEST_OPEN_TRADE_PAIR",
  ],
  description:
    "Find the trading pair that currently has the highest number of open trades.",
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

    console.log("🎯 Processing message:", message.content);

    const { fetchTrades } = fetchStatsService();

    try {
      const tradesData = await fetchTrades();
      const formattedResponse = getMostOpenTradesPairAndFormat({
        trades: tradesData.trades,
      });

      callback({ text: formattedResponse });
    } catch (error) {
      console.error("❌ Error in handler:", error);
      const errorMessage =
        error instanceof Error ? error.message : "Unknown error";
      callback({
        text: `I encountered an error while fetching trading pairs:\n${errorMessage}\n\nPlease try again.`,
      });
    }
  },
  examples: getMostOpenTradesPairExamples,
};
