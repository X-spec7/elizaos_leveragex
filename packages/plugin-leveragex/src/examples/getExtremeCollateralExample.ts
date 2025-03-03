import { ActionExample } from "@elizaos/core"

export const getExtremeCollateralExamples: ActionExample[][] = [
  // Largest Collateral Examples
  [
    {
      user: "{{user1}}",
      content: {
        text: "show me the biggest collateral",
      },
    },
    {
      user: "{{agent}}",
      content: {
        text: "I'll fetch the collateral with the highest amount in the smart contract!",
        action: "GET_EXTREME_COLLATERAL",
      },
    },
  ],
  [
    {
      user: "{{user1}}",
      content: {
        text: "which collateral has the largest amount in use?",
      },
    },
    {
      user: "{{agent}}",
      content: {
        text: "I'll find the collateral with the largest amount in use and provide you the details!",
        action: "GET_EXTREME_COLLATERAL",
      },
    },
  ],
  [
    {
      user: "{{user1}}",
      content: {
        text: "what is the largest collateral in terms of TVL?",
      },
    },
    {
      user: "{{agent}}",
      content: {
        text: "I'll check the collateral with the highest TVL earned and give you the details!",
        action: "GET_EXTREME_COLLATERAL",
      },
    },
  ],
  [
    {
      user: "{{user1}}",
      content: {
        text: "give me the details for the biggest collateral by smart contract",
      },
    },
    {
      user: "{{agent}}",
      content: {
        text: "I'll find the collateral with the largest amount in the smart contract and give you a detailed report!",
        action: "GET_EXTREME_COLLATERAL",
      },
    },
  ],
  // Smallest Collateral Examples
  [
    {
      user: "{{user1}}",
      content: {
        text: "show me the smallest collateral",
      },
    },
    {
      user: "{{agent}}",
      content: {
        text: "I'll fetch the collateral with the lowest amount in the smart contract!",
        action: "GET_EXTREME_COLLATERAL",
      },
    },
  ],
  [
    {
      user: "{{user1}}",
      content: {
        text: "which collateral has the least amount in use?",
      },
    },
    {
      user: "{{agent}}",
      content: {
        text: "I'll find the collateral with the smallest amount in use and provide you the details!",
        action: "GET_EXTREME_COLLATERAL",
      },
    },
  ],
  [
    {
      user: "{{user1}}",
      content: {
        text: "what is the smallest collateral in terms of TVL?",
      },
    },
    {
      user: "{{agent}}",
      content: {
        text: "I'll check the collateral with the lowest TVL earned and give you the details!",
        action: "GET_EXTREME_COLLATERAL",
      },
    },
  ],
  [
    {
      user: "{{user1}}",
      content: {
        text: "give me the details for the smallest collateral by smart contract",
      },
    },
    {
      user: "{{agent}}",
      content: {
        text: "I'll find the collateral with the smallest amount in the smart contract and give you a detailed report!",
        action: "GET_EXTREME_COLLATERAL",
      },
    },
  ],
]
