import { ITrade } from "../types"

export const getHighestPnlAndFormat = (trades: ITrade[]) => {
  if (!trades || trades.length === 0) {
    return "No trades available."
  }

  // Find the trade with the highest PnL percentage
  const highestPnlTrade = trades.reduce((maxTrade, trade) => 
    trade.pnLPercent > maxTrade.pnLPercent ? trade : maxTrade, trades[0]
  )

  const {
    user,
    pair,
    pairGroupName,
    leverage,
    long,
    collateralName,
    collateralAmount,
    openPrice,
    currentPrice,
    pnLPercent,
    tp,
    sl,
    tradeType,
    tradeInfo,
  } = highestPnlTrade

  return `📈 Highest PnL Trade Summary:

👤 Trader: ${user}
🔹 Pair: ${pair} (${pairGroupName})
📌 Trade Type: ${tradeType}
📈 Position: ${long ? "Long 📈" : "Short 📉"}
🔄 Leverage: ${leverage}x
💰 Collateral: ${collateralAmount} ${collateralName}
🚀 Open Price: ${openPrice.toFixed(2)}
📊 Current Price: ${currentPrice.toFixed(2)}
💵 PnL: ${pnLPercent.toFixed(2)}%
🎯 Take Profit (TP): ${tp}
🛑 Stop Loss (SL): ${sl}

⏳ Trade Created At Block: ${tradeInfo.createdBlock}
💰 Collateral Price at Entry: $${tradeInfo.collateralPriceUsd.toFixed(2)}

⚠️ Note: Ensure proper risk management to maximize profits while minimizing risks. 🚀`
}
