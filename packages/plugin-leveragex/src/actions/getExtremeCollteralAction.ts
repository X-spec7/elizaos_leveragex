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
import { getExtremeCollateralAndFormat } from '../utils'
import { getExtremeCollateralExamples } from '../examples'
import { getExtremeCollateralTemplate } from '../template'

export const getExtremeCollateralAction: Action = {
  name: "GET_EXTREME_COLLATERAL",
  similes: [
    "LARGEST_COLLATERAL",
    "MAXIMUM_COLLATERAL",
    "TOP_COLLATERAL_ASSET",
    "BIGGEST_ASSET_LOCKED",
  ],
  description: "Get the biggest or smallest collateral in the market",
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

    console.log('🎯 Processing message:', message.content);

    const stateContext = composeContext({
      state,
      template: getExtremeCollateralTemplate
    });

    console.log('📝 Generated context:', stateContext);

    const content = await generateMessageResponse({
      runtime,
      context: stateContext,
      modelClass: ModelClass.SMALL,
    })

    console.log('✨ Template response:', {
      rawContent: content,
      feeType: content?.collateralStatus,
    });

    if (content?.collateralStatus !== 'highest' && content?.collateralStatus !== 'lowest') {
      console.warn('⚠️ collateral status not found in template response');
      callback({
        text: "Please specify whether you want the biggest or smallest collateral. For example:\n• 'Show me the biggest collateral'\n• 'Find the smallest collateral'",
      });
      return;
    }

    const { fetchColsStats } = fetchStatsService()

    try {
      const colsStatsData = await fetchColsStats()

      const biggestCollateralData = getExtremeCollateralAndFormat({
        collaterals: colsStatsData.collaterals,
        status: content.collateralStatus
      })

      callback({
        text: biggestCollateralData
      })
    } catch (error) {
      console.error('❌ Error in handler:', error)

      const errorMessage = error instanceof Error ? error.message : 'Unknown error'
      callback({
        text: `I encountered an error while fetching collaterals statistics:\n${errorMessage}\n\nPlease try again.`,
      })
    }
  },
  examples: getExtremeCollateralExamples
}
