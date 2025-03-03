import { ActionExample } from "@elizaos/core";

export const getMostOpenTradesPairExamples: ActionExample[][] = [
  [
    {
      user: "{{user1}}",
      content: {
        text: "Which trading pair has the most open trades right now?",
      },
    },
    {
      user: "{{agent}}",
      content: {
        text: "I'll check and find the trading pair with the most open trades for you!",
        action: "GET_MOST_OPEN_TRADES_PAIR",
      },
    },
  ],
  [
    {
      user: "{{user1}}",
      content: {
        text: "Show me the most traded pair currently.",
      },
    },
    {
      user: "{{agent}}",
      content: {
        text: "I'll fetch the trading pair with the highest number of open trades!",
        action: "GET_MOST_OPEN_TRADES_PAIR",
      },
    },
  ],
  [
    {
      user: "{{user1}}",
      content: {
        text: "Which pair has the most active trades open?",
      },
    },
    {
      user: "{{agent}}",
      content: {
        text: "Let me find the trading pair with the most open positions.",
        action: "GET_MOST_OPEN_TRADES_PAIR",
      },
    },
  ],
];
