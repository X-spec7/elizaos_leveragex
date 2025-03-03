import { getCollateralNameById } from "./getCollateralNameById";
import { IPair } from "../types";

interface IGetExtremeTradingFeePairAndFormatProps {
  pairs: IPair[];
  feeType: "highest" | "lowest";
}

export const getExtremeTradingFeePairAndFormat = async ({
  pairs,
  feeType,
}: IGetExtremeTradingFeePairAndFormatProps) => {
  if (!pairs || pairs.length === 0) {
    return "No trading fee data available.";
  }

  // Find the extreme (highest/lowest) trading fee pair based on openFeeP + closeFeeP
  const extremePair = pairs.reduce((extreme, current) => {
    const currentFee = current.backend.openFeeP + current.backend.closeFeeP;
    const extremeFee = extreme.backend.openFeeP + extreme.backend.closeFeeP;

    return feeType === "highest"
      ? currentFee > extremeFee
        ? current
        : extreme
      : currentFee < extremeFee
        ? current
        : extreme;
  });

  // Get all collateral IDs from blockFees
  const collateralIds = extremePair.blockFees.map((block) => block.collateralId);

  // Fetch collateral names asynchronously
  const uniqueCollateralNames = [
    ...new Set(await Promise.all(collateralIds.map(getCollateralNameById))),
  ];

  const totalTradingFee = extremePair.backend.openFeeP + extremePair.backend.closeFeeP;

  return `📊 ${feeType === "highest" ? "Highest" : "Lowest"} Trading Fee Pair:

🔑 Pair: ${extremePair.name} (${extremePair.from} → ${extremePair.to})
🔑 Collateral(s): ${uniqueCollateralNames.join(", ")}
💰 Total Trading Fee (Open + Close): ${(totalTradingFee * 100).toFixed(2)}%
🚀 Open Fee: ${(extremePair.backend.openFeeP * 100).toFixed(2)}%
📉 Close Fee: ${(extremePair.backend.closeFeeP * 100).toFixed(2)}%
📊 Min Position Size: $${extremePair.backend.minPositionSizeUsd.toLocaleString()}

⚠️ Consider these fees when making trading decisions.`;
};
