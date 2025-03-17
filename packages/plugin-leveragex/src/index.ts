import type { Plugin } from "@elizaos/core";
import { evmWalletProvider } from "./providers";
import {
  getExtremeCollateralAction,
  getExtremePnlAction,
  getExtremeTradingFeePairAction,
  getMostOpenTradesPairAction,
  getOpenTradeTrendAction,
  getPoLOpenTradesCountAction,
  getTradeCountForPairAction,
  getTradingPairFeeAction,
  getAllOpenTradePairsAction,
  transferAction
} from './actions'

export const leveragexPlugin: Plugin = {
  name: "leveragex",
  description: "LeverageX integration plugin",
  providers: [evmWalletProvider],
  evaluators: [],
  services: [],
  actions: [
    getExtremeCollateralAction,
    getExtremePnlAction,
    getExtremeTradingFeePairAction,
    getMostOpenTradesPairAction,
    getOpenTradeTrendAction,
    getPoLOpenTradesCountAction,
    getTradeCountForPairAction,
    getTradingPairFeeAction,
    getAllOpenTradePairsAction,
    transferAction
  ],
}
