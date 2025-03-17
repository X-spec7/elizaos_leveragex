import { ITrade } from "../types";

interface IGetAllOpenTradePairsProps {
  trades: ITrade[];
}

export const getAllOpenTradePairsAndFormat = ({
  trades,
}: IGetAllOpenTradePairsProps) => {
  if (!trades || trades.length === 0) {
    return `No trades available.`;
  }

  // Filter only open trades
  const openTrades = trades.filter((trade) => trade.isOpen);
  
  if (openTrades.length === 0) {
    return `There are currently no open trades across any pairs.`;
  }

  // Group trades by pair
  const pairMap = new Map();
  
  openTrades.forEach((trade) => {
    if (!pairMap.has(trade.pair)) {
      pairMap.set(trade.pair, { total: 0, long: 0, short: 0 });
    }
    
    const pairStats = pairMap.get(trade.pair);
    pairStats.total += 1;
    
    if (trade.long) {
      pairStats.long += 1;
    } else {
      pairStats.short += 1;
    }
  });

  // Convert map to array and sort by total trades (descending)
  const pairsArray = Array.from(pairMap.entries())
    .sort((a, b) => b[1].total - a[1].total);

  // Format the response
  let response = `📊 Open Trades by Pair Summary:\n\n`;
  
  pairsArray.forEach(([pair, stats]) => {
    response += `🔹 ${pair}:\n`;
    response += `   📈 Total Open: ${stats.total}\n`;
    response += `   🟢 Long: ${stats.long}\n`;
    response += `   🔴 Short: ${stats.short}\n\n`;
  });

  response += `Total Pairs with Open Trades: ${pairsArray.length}\n`;
  response += `Total Open Positions: ${openTrades.length}\n\n`;
  response += `⚡ Stay informed and manage your trades wisely!`;

  return response;
};