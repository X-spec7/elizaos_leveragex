import {
  Action,
  composeContext,
  generateMessageResponse,
  HandlerCallback,
  IAgentRuntime,
  Memory,
  ModelClass,
  State
} from '@elizaos/core'

import { fetchStatsService } from '../services'
import { analyzeOpenTradeTrend } from '../utils/analyzeOpenTradeTrend'
import { getOpenTradeTrendExamples } from '../examples'

export const getOpenTradeTrendAction: Action = {
  name: "GET_OPEN_TRADE_TREND",
  similes: [
    "MARKET_ACTIVITY_TREND",
    "OPEN_TRADES_TREND",
    "INCREASING_TRADING_ACTIVITY",
    "MARKET_TRADE_FLOW",
  ],
  description: "Analyze open trades to determine if market activity is increasing",
  validate: async () => {
    return true
  },
  handler: async (
    runtime: IAgentRuntime,
    message: Memory,
    state: State,
    _options: { [key: string]: unknown },
    callback: HandlerCallback
  ) => {
    const { fetchTrades } = fetchStatsService()

    try {
      const tradesData = await fetchTrades()

      const tradeTrendAnalysis = analyzeOpenTradeTrend(tradesData.trades)

      callback({
        text: tradeTrendAnalysis
      })
    } catch (error) {
      console.error('❌ Error in handler:', error)

      const errorMessage = error instanceof Error ? error.message : 'Unknown error'
      callback({
        text: `I encountered an error while fetching trade statistics:\n${errorMessage}\n\nPlease try again.`,
      })
    }
  },
  examples: getOpenTradeTrendExamples
}
