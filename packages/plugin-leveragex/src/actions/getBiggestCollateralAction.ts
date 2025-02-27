import {
  Action,
  HandlerCallback,
  IAgentRuntime,
  Memory,
  State
} from '@elizaos/core'

import { fetchStatsService } from '../services'
import { getBiggestCollateralAndFormat } from '../utils'
import { getBiggestCollateralExamples } from '../examples'

export const getBiggestCollateralAction: Action = {
  name: "GET_BIGGEST_COLLATERAL",
  similes: [
    "LARGEST_COLLATERAL",
    "MAXIMUM_COLLATERAL",
    "TOP_COLLATERAL_ASSET",
    "BIGGEST_ASSET_LOCKED",
  ],
  description: "Get the biggest collateral in the market",
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
    if (!state) {
      state = (await runtime.composeState(message)) as State
    }
    state = await runtime.updateRecentMessageState(state)

    const { fetchColsStats } = fetchStatsService()

    try {
      const colsStatsData = await fetchColsStats()

      const biggestCollateralData = getBiggestCollateralAndFormat(colsStatsData.collaterals)

      callback({
        text: biggestCollateralData
      })
    } catch (error) {
      console.error('❌ Error in handler:', error)

      const errorMessage = error instanceof Error ? error.message : 'Unknown error'
      callback({
        text: `I encountered an error while fetching trades statistics:\n${errorMessage}\n\nPlease try again.`,
      })
    }
  },
  examples: getBiggestCollateralExamples
}
