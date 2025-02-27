import { ICollateral } from '../types'

export const getBiggestCollateralAndFormat = (collaterals: ICollateral[]) => {
  if (!collaterals || collaterals.length === 0) {
    return "No collateral data available."
  }

  // Find the collateral with the largest 'collateralInSc'
  const biggestCollateral = collaterals.reduce((maxCollateral, collateral) => 
    collateral.collateralInSc > maxCollateral.collateralInSc ? collateral : maxCollateral, collaterals[0]
  )

  const {
    collateral,
    collateralName,
    collateralInSc,
    collateralInUsePercent,
    collateralInUse,
    price,
    tvlEarn,
    apr,
    apy,
    volume,
    fees,
    lastDayEarned,
    last7DaysEarned,
  } = biggestCollateral

  return `💎 Biggest Collateral Summary:

🔑 Collateral Name: ${collateralName} (${collateral})
💸 Collateral in Smart Contract (SC): ${collateralInSc.toFixed(2)} ${collateralName}
📊 Collateral in Use: ${collateralInUse.toFixed(2)} ${collateralName} (${collateralInUsePercent.toFixed(2)}% in use)
💵 Price: $${price.toFixed(2)}
📈 TVL Earned: $${tvlEarn.toFixed(2)}
💹 APR: ${apr.toFixed(2)}%
💹 APY: ${apy.toFixed(2)}%

📅 Last Day Earnings:
• Total Volume: $${lastDayEarned.totalVolume.toFixed(2)}
• Total PnL: $${lastDayEarned.totalPnl.toFixed(2)} (${lastDayEarned.totalPnlPercentage.toFixed(2)}%)
• Total Fees: $${lastDayEarned.totalFees.toFixed(2)}

📊 Last 7 Days Earnings:
• Total Volume: $${last7DaysEarned.toFixed(2)}
• Total Fees: $${fees.toFixed(2)}

🔄 Volume: $${volume.toFixed(2)}
💰 Total Fees: $${fees.toFixed(2)}

⚠️ Note: Please ensure appropriate risk management when using collateral to optimize returns. 🚀`
}
