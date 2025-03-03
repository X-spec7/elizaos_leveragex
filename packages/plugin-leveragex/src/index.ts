import type { Plugin } from "@elizaos/core";
import {
  getExtremeCollateralAction,
  getExtremePnlAction,
  getExtremeTradingFeePairAction,
  getMostOpenTradesPairAction,
  getOpenTradeTrendAction,
  getPoLOpenTradesCountAction,
  getTradeCountForPairAction,
  getTradingPairFeeAction
} from './actions'

export const leveragexPlugin: Plugin = {
  name: "leveragex",
  description: "LeverageX integration plugin",
  providers: [],
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
    getTradingPairFeeAction
  ],
}
