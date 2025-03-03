import { ActionExample } from "@elizaos/core";

export const getTradeCountForPairExamples: ActionExample[][] = [
  [
    {
      user: "{{user1}}",
      content: {
        text: "How many open trades are currently open for ETH/USD?",
      },
    },
    {
      user: "{{agent}}",
      content: {
        text: "Fetching the number of open trades for ETH/USD...",
        action: "GET_TRADE_COUNT_FOR_PAIR",
      },
    },
  ],
  [
    {
      user: "{{user1}}",
      content: {
        text: "How many open trades are currently open between ETH and USD?",
      },
    },
    {
      user: "{{agent}}",
      content: {
        text: "Fetching the number of open trades for ETH/USD...",
        action: "GET_TRADE_COUNT_FOR_PAIR",
      },
    },
  ],
  [
    {
      user: "{{user1}}",
      content: {
        text: "Show me the number of active trades for BTC to USDT.",
      },
    },
    {
      user: "{{agent}}",
      content: {
        text: "I'll check how many open trades exist for BTC/USDT.",
        action: "GET_TRADE_COUNT_FOR_PAIR",
      },
    },
  ],
  [
    {
      user: "{{user1}}",
      content: {
        text: "I need the trade count for ADA to USD.",
      },
    },
    {
      user: "{{agent}}",
      content: {
        text: "Fetching trade count for ADA/USD...",
        action: "GET_TRADE_COUNT_FOR_PAIR",
      },
    },
  ],
];
