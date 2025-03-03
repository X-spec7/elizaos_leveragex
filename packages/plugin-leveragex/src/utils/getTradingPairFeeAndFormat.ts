import { IPair } from "../types"

interface IGetTradingPairFeeAndFormat {
  from: string
  to: string
  pairs: IPair[]
}

export const getTradingPairFeeAndFormat = ({ from, to, pairs }: IGetTradingPairFeeAndFormat) => {
  // Find the matching trading pair
  const pair = pairs.find(p => p.from === from && p.to === to);

  if (!pair) {
    return `No trading pair found for ${from}/${to}.`;
  }

  // Extract relevant fee details
  const { backend } = pair;
  const totalTradingFee = backend.openFeeP + backend.closeFeeP;

  return `📊 Trading Fee Details for ${from}/${to}:

🔗 Pair: ${pair.name}
💰 Total Trading Fee (Open + Close): ${(totalTradingFee * 100).toFixed(2)}%
🚀 Open Fee: ${(backend.openFeeP * 100).toFixed(2)}%
📉 Close Fee: ${(backend.closeFeeP * 100).toFixed(2)}%
🎯 Trigger Order Fee: ${(backend.triggerOrderFeeP * 100).toFixed(2)}%
📊 Min Position Size: $${backend.minPositionSizeUsd.toLocaleString()}
⚡ Leverage Range: ${backend.minLeverage}x - ${backend.maxLeverage}x

⚠️ Consider these fees when making trading decisions.`;
};
