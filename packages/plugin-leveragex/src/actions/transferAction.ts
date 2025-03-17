import {
  ByteArray,
  formatEther,
  parseEther,
  type Hex
} from "viem";

import {
  Action,
  composeContext,
  generateObjectDeprecated,
  HandlerCallback,
  ModelClass,
  type IAgentRuntime,
  type Memory,
  type State,
} from "@elizaos/core";

import { initWalletProvider, WalletProvider } from "../providers/wallet";
import type { Transaction, TransferParams } from "../types";
import { transferTokenExamples } from "../examples";
import { transferTemplate } from "../template";

// Exported for tests
export class TransferAction {
  constructor(private walletProvider: WalletProvider) {}

  async transfer(params: TransferParams): Promise<Transaction> {
      console.log(
          `Transferring: ${params.amount} tokens to (${params.toAddress} on ${params.fromChain})`
      );

      if (!params.data) {
          params.data = "0x";
      }

      this.walletProvider.switchChain(params.fromChain);

      const walletClient = this.walletProvider.getWalletClient(
          params.fromChain
      );

      try {
          const hash = await walletClient.sendTransaction({
              account: walletClient.account,
              to: params.toAddress,
              value: parseEther(params.amount),
              data: params.data as Hex,
              kzg: {
                  blobToKzgCommitment: function (_: ByteArray): ByteArray {
                      throw new Error("Function not implemented.");
                  },
                  computeBlobKzgProof: function (
                      _blob: ByteArray,
                      _commitment: ByteArray
                  ): ByteArray {
                      throw new Error("Function not implemented.");
                  },
              },
              chain: undefined,
          });

          return {
              hash,
              from: walletClient.account.address,
              to: params.toAddress,
              value: parseEther(params.amount),
              data: params.data as Hex,
          };
      } catch (error) {
          throw new Error(`Transfer failed: ${error.message}`);
      }
  }
}

const buildTransferDetails = async (
  state: State,
  runtime: IAgentRuntime,
  wp: WalletProvider
): Promise<TransferParams> => {
  const chains = Object.keys(wp.chains);
  state.supportedChains = chains.map((item) => `"${item}"`).join("|");

  const context = composeContext({
      state,
      template: transferTemplate,
  });

  const transferDetails = (await generateObjectDeprecated({
      runtime,
      context,
      modelClass: ModelClass.SMALL,
  })) as TransferParams;

  const existingChain = wp.chains[transferDetails.fromChain];

  if (!existingChain) {
      throw new Error(
          "The chain " +
              transferDetails.fromChain +
              " not configured yet. Add the chain or choose one from configured: " +
              chains.toString()
      );
  }

  return transferDetails;
};

export const transferAction: Action = {
  name: "TRANSFER_TOKEN",
  similes: ["SEND_TOKENS", "TOKEN_TRANSFER", "MOVE_TOKENS"],
  description: "Transfer tokens between addresses on the same chain",
  validate: async (runtime: IAgentRuntime) => {
      const privateKey = runtime.getSetting("EVM_PRIVATE_KEY");
      return typeof privateKey === "string" && privateKey.startsWith("0x");
  },
  handler: async (
      runtime: IAgentRuntime,
      message: Memory,
      state: State,
      _options: any,
      callback?: HandlerCallback
  ) => {
      if (!state) {
          state = (await runtime.composeState(message)) as State;
      } else {
          state = await runtime.updateRecentMessageState(state);
      }

      console.log("Transfer action handler called");
      const walletProvider = await initWalletProvider(runtime);
      const action = new TransferAction(walletProvider);

      // Compose transfer context
      const paramOptions = await buildTransferDetails(
          state,
          runtime,
          walletProvider
      );

      try {
          const transferResp = await action.transfer(paramOptions);
          if (callback) {
              callback({
                  text: `Successfully transferred ${paramOptions.amount} Ether to ${paramOptions.toAddress}\nTransaction Hash: ${transferResp.hash}`,
                  content: {
                      success: true,
                      hash: transferResp.hash,
                      amount: formatEther(transferResp.value),
                      recipient: transferResp.to,
                      chain: paramOptions.fromChain,
                  },
              });
          }
          return true;
      } catch (error) {
          console.error("Error during token transfer:", error);
          if (callback) {
              callback({
                  text: `Error transferring tokens: ${error.message}`,
                  content: { error: error.message },
              });
          }
          return false;
      }
  },
  examples: transferTokenExamples,
};
