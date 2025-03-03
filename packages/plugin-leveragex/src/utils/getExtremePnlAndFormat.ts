import { ITrade } from "../types"

interface IGetExtremePnlAndFormatProps {
  trades: ITrade[]
  status: "highest" | "lowest"
}

export const getExtremePnlAndFormat = ({ trades, status }: IGetExtremePnlAndFormatProps) => {
  if (!trades || trades.length === 0) {
    return "No trades available."
  }

  // Find the trade with the highest or lowest PnL percentage
  const extremePnlTrade = trades.reduce((extreme, trade) => {
    return status === "highest"
      ? trade.pnLPercent > extreme.pnLPercent ? trade : extreme
      : trade.pnLPercent < extreme.pnLPercent ? trade : extreme
  }, trades[0])

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
  } = extremePnlTrade

  return `📊 ${status === 'highest' ? 'Highest' : 'Lowest'} PnL Trade Summary:

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

⚠️ Note: Ensure proper risk management when trading. 🚀`
}
