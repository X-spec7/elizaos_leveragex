import { ActionExample } from "@elizaos/core";

export const getTradingFeePairExamples: ActionExample[][] = [
  [
    {
      user: "{{user1}}",
      content: {
        text: "What are the current fees for the ETH/USD trading pair?",
      },
    },
    {
      user: "{{agent}}",
      content: {
        text: "I'll fetch the trading fees for the ETH/USD pair!",
        action: "GET_TRADING_FEE_PAIR",
      },
    },
  ],
  [
    {
      user: "{{user1}}",
      content: {
        text: "Can you tell me the trading fees for BTC and USDT?",
      },
    },
    {
      user: "{{agent}}",
      content: {
        text: "I'll retrieve the trading fees for the BTC/USDT pair!",
        action: "GET_TRADING_FEE_PAIR",
      },
    },
  ],
  [
    {
      user: "{{user1}}",
      content: {
        text: "Show me the fees for SOL/ETH pair",
      },
    },
    {
      user: "{{agent}}",
      content: {
        text: "Fetching the trading fees for the SOL/ETH pair!",
        action: "GET_TRADING_FEE_PAIR",
      },
    },
  ],
  [
    {
      user: "{{user1}}",
      content: {
        text: "Tell me the trading fee for ADA and USD",
      },
    },
    {
      user: "{{agent}}",
      content: {
        text: "I'll look up the trading fees for the ADA/USD pair!",
        action: "GET_TRADING_FEE_PAIR",
      },
    },
  ],
];
