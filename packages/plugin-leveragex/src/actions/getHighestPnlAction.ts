import {
  Action,
  HandlerCallback,
  IAgentRuntime,
  Memory,
  State
} from '@elizaos/core'

import { getHighestPnLTradeExamples } from '../examples'
import { fetchStatsService } from '../services'
import { getHighestPnlAndFormat } from '../utils/getHighestPnlAndFormat'

export const getHighestPnlAction: Action = {
  name: "GET_BIGGEST_PNL",
  similes: [

  ],
  description: "Get the trade of which pnl is the biggest",
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

    console.log('🎯 Processing message:', message.content)

    // const pnlContext = composeContext({
    //   state,
    //   template: getHighestPnLTradeTemplate,
    // })

    // console.log('📝 Generated context:', pnlContext)

    // const content = await generateMessageResponse({
    //   runtime,
    //   context: pnlContext,
    //   modelClass: ModelClass.LARGE
    // })

    const { fetchTrades } = fetchStatsService()

    try {
      const tradesData = await fetchTrades()

      const highestPnlTradeData = getHighestPnlAndFormat(tradesData.trades)

      callback({
        text: highestPnlTradeData
      })
    } catch (error) {
      console.error('❌ Error in handler:', error)

      const errorMessage = error instanceof Error ? error.message : 'Unknown error'
      callback({
        text: `I encountered an error while fetching trades statistics:\n${errorMessage}\n\nPlease try again.`,
      })
    }
  },
  examples: getHighestPnLTradeExamples
}
