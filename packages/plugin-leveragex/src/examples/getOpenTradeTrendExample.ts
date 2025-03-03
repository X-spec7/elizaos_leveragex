import { ActionExample } from "@elizaos/core";

export const getOpenTradeTrendExamples: ActionExample[][] = [
  [
    {
      user: "{{user1}}",
      content: {
        text: "Is market activity increasing?",
      },
    },
    {
      user: "{{agent}}",
      content: {
        text: "I'll analyze the trend and let you know if market activity is increasing.",
        action: "GET_OPEN_TRADE_TREND",
      },
    },
  ],
  [
    {
      user: "{{user1}}",
      content: {
        text: "What's the trend in open trades?",
      },
    },
    {
      user: "{{agent}}",
      content: {
        text: "I'll check recent open trade activity and provide a trend analysis.",
        action: "GET_OPEN_TRADE_TREND",
      },
    },
  ],
  [
    {
      user: "{{user1}}",
      content: {
        text: "Are traders opening more positions?",
      },
    },
    {
      user: "{{agent}}",
      content: {
        text: "I'll analyze the latest trade data to see if more positions are being opened.",
        action: "GET_OPEN_TRADE_TREND",
      },
    },
  ],
];
