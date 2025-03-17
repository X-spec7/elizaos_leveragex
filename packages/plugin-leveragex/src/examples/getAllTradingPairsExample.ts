import { ActionExample } from "@elizaos/core";

export const getAllOpenTradePairsExamples: ActionExample[][] = [
  [
    {
      user: "{{user1}}",
      content: {
        text: "List all pairs which are now open, and how many are open?",
      },
    },
    {
      user: "{{agent}}",
      content: {
        text: "Fetching all trading pairs with open positions...",
        action: "GET_ALL_OPEN_TRADE_PAIRS",
      },
    },
  ],
  [
    {
      user: "{{user1}}",
      content: {
        text: "Show me all active trading pairs and their position counts.",
      },
    },
    {
      user: "{{agent}}",
      content: {
        text: "I'll get a list of all trading pairs with open positions for you.",
        action: "GET_ALL_OPEN_TRADE_PAIRS",
      },
    },
  ],
  [
    {
      user: "{{user1}}",
      content: {
        text: "Which pairs have open trades right now?",
      },
    },
    {
      user: "{{agent}}",
      content: {
        text: "Let me check which trading pairs currently have open positions.",
        action: "GET_ALL_OPEN_TRADE_PAIRS",
      },
    },
  ],
  [
    {
      user: "{{user1}}",
      content: {
        text: "Give me a breakdown of all open trades by pair.",
      },
    },
    {
      user: "{{agent}}",
      content: {
        text: "I'll provide a breakdown of all trading pairs with open positions.",
        action: "GET_ALL_OPEN_TRADE_PAIRS",
      },
    },
  ],
];
