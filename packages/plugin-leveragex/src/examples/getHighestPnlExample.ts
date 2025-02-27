import { ActionExample } from "@elizaos/core"

export const getHighestPnLTradeExamples: ActionExample[][] = [
  [
    {
      user: "{{user1}}",
      content: {
        text: "Find the most profitable trade in the data.",
      },
    },
    {
      user: "{{agent}}",
      content: {
        text: "I'll look through the data and get the trade with the highest profit!",
        action: "GET_HIGHEST_PNL_TRADE",
      },
    },
  ],
  [
    {
      user: "{{user1}}",
      content: {
        text: "Which trade has the best PnL in the dataset?",
      },
    },
    {
      user: "{{agent}}",
      content: {
        text: "Let me check the dataset and find the trade with the highest PnL!",
        action: "GET_HIGHEST_PNL_TRADE",
      },
    },
  ],
  [
    {
      user: "{{user1}}",
      content: {
        text: "Show me the trade with the biggest profit.",
      },
    },
    {
      user: "{{agent}}",
      content: {
        text: "I'll find and return the most profitable trade from the data!",
        action: "GET_HIGHEST_PNL_TRADE",
      },
    },
  ],
  [
    {
      user: "{{user1}}",
      content: {
        text: "Which trade has made the most money?",
      },
    },
    {
      user: "{{agent}}",
      content: {
        text: "I'll scan the dataset and show you the highest-earning trade!",
        action: "GET_HIGHEST_PNL_TRADE",
      },
    },
  ],
  [
    {
      user: "{{user1}}",
      content: {
        text: "What's the most profitable position in the data?",
      },
    },
    {
      user: "{{agent}}",
      content: {
        text: "Let me analyze the data and find the best-performing trade!",
        action: "GET_HIGHEST_PNL_TRADE",
      },
    },
  ]
]
