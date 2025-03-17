import { ActionExample } from "@elizaos/core";

export const transferTokenExamples: ActionExample[][] = [
  [
    {
      user: "{{user1}}",
      content: {
        text: "I want to send 0.5 ETH to 0x742d35Cc6634C0532925a3b844Bc454e4438f44e on Ethereum",
      },
    },
    {
      user: "{{agent}}",
      content: {
        text: "I'll help you transfer 0.5 ETH to that address on Ethereum. Let me prepare that for you.",
        action: "TRANSFER_TOKEN",
      },
    },
  ],
  [
    {
      user: "{{user1}}",
      content: {
        text: "Transfer 100 USDT to 0x8F36d4bE5f7922CaBF3371FbE0Ff9B72834aeB21 on Polygon",
      },
    },
    {
      user: "{{agent}}",
      content: {
        text: "I'll set up a transfer of 100 USDT to the specified address on Polygon.",
        action: "TRANSFER_TOKEN",
      },
    },
  ],
  [
    {
      user: "{{user1}}",
      content: {
        text: "Can you help me send 0.1 BNB to my friend at 0x3ab46836AdDF6eba77BF231d9AAB1440A5664D0C on BSC?",
      },
    },
    {
      user: "{{agent}}",
      content: {
        text: "I'll prepare a transaction to send 0.1 BNB to your friend's address on BSC.",
        action: "TRANSFER_TOKEN",
      },
    },
  ],
  [
    {
      user: "{{user1}}",
      content: {
        text: "I need to move 25 LINK tokens from my wallet to 0x742d35Cc6634C0532925a3b844Bc454e4438f44e on Arbitrum",
      },
    },
    {
      user: "{{agent}}",
      content: {
        text: "I'll set up the transfer of 25 LINK tokens to that address on Arbitrum for you.",
        action: "TRANSFER_TOKEN",
      },
    },
  ],
  [
    {
      user: "{{user1}}",
      content: {
        text: "Send 50 AVAX to 0x8F36d4bE5f7922CaBF3371FbE0Ff9B72834aeB21",
      },
    },
    {
      user: "{{agent}}",
      content: {
        text: "I'll prepare a transaction to send 50 AVAX to the specified address. Let me set that up for you.",
        action: "TRANSFER_TOKEN",
      },
    },
  ],
  [
    {
      user: "{{user1}}",
      content: {
        text: "I'd like to transfer some tokens with address 0x2791Bca1f2de4661ED88A30C99A7a9449Aa84174. Send 10 of them to 0x3ab46836AdDF6eba77BF231d9AAB1440A5664D0C on Polygon.",
      },
    },
    {
      user: "{{agent}}",
      content: {
        text: "I'll help you transfer 10 tokens with the contract address 0x2791Bca1f2de4661ED88A30C99A7a9449Aa84174 to the recipient on Polygon.",
        action: "TRANSFER_TOKEN",
      },
    },
  ],
];