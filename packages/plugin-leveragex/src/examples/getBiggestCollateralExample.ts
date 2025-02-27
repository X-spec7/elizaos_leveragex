import { ActionExample } from "@elizaos/core"

export const getBiggestCollateralExamples: ActionExample[][] = [
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
        action: "GET_BIGGEST_COLLATERAL",
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
        action: "GET_BIGGEST_COLLATERAL",
      },
    },
  ],
  [
    {
      user: "{{user1}}",
      content: {
        text: "tell me which collateral is performing the best",
      },
    },
    {
      user: "{{agent}}",
      content: {
        text: "Let me analyze the collateral and provide you with the one that is performing the best!",
        action: "GET_BIGGEST_COLLATERAL",
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
        action: "GET_BIGGEST_COLLATERAL",
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
        action: "GET_BIGGEST_COLLATERAL",
      },
    },
  ],
  [
    {
      user: "{{user1}}",
      content: {
        text: "show me the collateral with the biggest earning in the last 7 days",
      },
    },
    {
      user: "{{agent}}",
      content: {
        text: "Let me check the collateral that earned the most in the last 7 days and provide you with the information!",
        action: "GET_BIGGEST_COLLATERAL",
      },
    },
  ],
]
