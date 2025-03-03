import { ITrade } from "../types"

export const analyzeOpenTradeTrend = (trades: ITrade[]) => {
  if (!trades || trades.length === 0) {
    return "No trade data available to analyze market activity trends."
  }

  // Filter open trades
  const openTrades = trades.filter(trade => trade.isOpen)

  // Sort by creation block (ascending order)
  openTrades.sort((a, b) => Number(a.tradeInfo.createdBlock) - Number(b.tradeInfo.createdBlock))

  if (openTrades.length < 2) {
    return "Not enough open trade data to identify a clear trend."
  }

  // Compare the number of trades over time
  const firstBlock = Number(openTrades[0].tradeInfo.createdBlock)
  const lastBlock = Number(openTrades[openTrades.length - 1].tradeInfo.createdBlock)
  const totalTrades = openTrades.length

  const timeDifference = lastBlock - firstBlock
  const tradeRate = totalTrades / timeDifference

  let trendMessage = `📊 Market Activity Analysis:\n`
  trendMessage += `• Total Open Trades: ${totalTrades}\n`
  trendMessage += `• First Open Trade Block: ${firstBlock}\n`
  trendMessage += `• Last Open Trade Block: ${lastBlock}\n`
  trendMessage += `• Average Trades per Block: ${tradeRate.toFixed(2)}\n\n`

  if (tradeRate > 0.5) {
    trendMessage += "🚀 Market activity is increasing, with more open trades appearing in recent blocks."
  } else if (tradeRate < 0.2) {
    trendMessage += "📉 Market activity seems low, with fewer new open trades over time."
  } else {
    trendMessage += "🔍 Market activity is stable, with a consistent number of open trades."
  }

  return trendMessage
}
