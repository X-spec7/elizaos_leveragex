import { ActionExample } from "@elizaos/core";

export const getPoLOpenTradesCountExample: ActionExample[][] = [
  [
    {
      user: "{{user1}}",
      content: {
        text: "How many open trades are currently in profit?",
      },
    },
    {
      user: "{{agent}}",
      content: {
        text: "I'll fetch the number of open trades that are currently profitable!",
        action: "GET_POL_OPEN_TRADES_COUNT",
      },
    },
  ],
  [
    {
      user: "{{user1}}",
      content: {
        text: "How many trades are in loss right now?",
      },
    },
    {
      user: "{{agent}}",
      content: {
        text: "I'll check the number of open trades that are currently at a loss!",
        action: "GET_POL_OPEN_TRADES_COUNT",
      },
    },
  ],
  [
    {
      user: "{{user1}}",
      content: {
        text: "Can you tell me the number of losing positions?",
      },
    },
    {
      user: "{{agent}}",
      content: {
        text: "I'll retrieve the count of trades that are currently in loss!",
        action: "GET_POL_OPEN_TRADES_COUNT",
      },
    },
  ],
  [
    {
      user: "{{user1}}",
      content: {
        text: "Show me how many trades are winning right now?",
      },
    },
    {
      user: "{{agent}}",
      content: {
        text: "I'll find the number of open trades that are currently in profit!",
        action: "GET_POL_OPEN_TRADES_COUNT",
      },
    },
  ],
];
