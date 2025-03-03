import { ActionExample } from "@elizaos/core";

export const getExtremeTradingFeePairExamples: ActionExample[][] = [
  [
    {
      user: "{{user1}}",
      content: {
        text: "show me the pair with the highest trading fees",
      },
    },
    {
      user: "{{agent}}",
      content: {
        text: "I'll fetch the trading pair with the highest combined open and close fees!",
        action: "GET_EXTREME_TRADING_FEE_PAIR",
      },
    },
  ],
  [
    {
      user: "{{user1}}",
      content: {
        text: "which trading pair has the most expensive fees?",
      },
    },
    {
      user: "{{agent}}",
      content: {
        text: "I'll find the trading pair with the highest open and close fees and provide the details!",
        action: "GET_EXTREME_TRADING_FEE_PAIR",
      },
    },
  ],
  [
    {
      user: "{{user1}}",
      content: {
        text: "tell me the cheapest trading pair by fees",
      },
    },
    {
      user: "{{agent}}",
      content: {
        text: "Let me find the trading pair with the lowest combined open and close fees!",
        action: "GET_EXTREME_TRADING_FEE_PAIR",
      },
    },
  ],
  [
    {
      user: "{{user1}}",
      content: {
        text: "which pair has the lowest trading fees?",
      },
    },
    {
      user: "{{agent}}",
      content: {
        text: "I'll check the pair with the lowest trading fees and give you the details!",
        action: "GET_EXTREME_TRADING_FEE_PAIR",
      },
    },
  ],
  [
    {
      user: "{{user1}}",
      content: {
        text: "show me the trading pair with the highest opening fee",
      },
    },
    {
      user: "{{agent}}",
      content: {
        text: "I'll find the trading pair with the highest open fee percentage!",
        action: "GET_EXTREME_TRADING_FEE_PAIR",
      },
    },
  ],
  [
    {
      user: "{{user1}}",
      content: {
        text: "give me the trading pair with the lowest closing fee",
      },
    },
    {
      user: "{{agent}}",
      content: {
        text: "I'll check for the trading pair with the lowest close fee and provide the details!",
        action: "GET_EXTREME_TRADING_FEE_PAIR",
      },
    },
  ],
];
