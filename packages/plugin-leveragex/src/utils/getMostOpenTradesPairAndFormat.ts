import { ITrade } from "../types";

interface IGetMostOpenTradesPairAndFormatProps {
  trades: ITrade[];
}

export const getMostOpenTradesPairAndFormat = ({
  trades,
}: IGetMostOpenTradesPairAndFormatProps) => {
  if (!trades || trades.length === 0) {
    return "No trading data available.";
  }

  // Count open trades per pair
  const tradeCountMap: Record<string, number> = {};

  trades.forEach((trade) => {
    if (trade.isOpen) {
      tradeCountMap[trade.pair] = (tradeCountMap[trade.pair] || 0) + 1;
    }
  });

  if (Object.keys(tradeCountMap).length === 0) {
    return "There are no open trades right now.";
  }

  // Find the pair with the highest count
  const mostTradedPair = Object.entries(tradeCountMap).reduce(
    (maxPair, currentPair) =>
      currentPair[1] > maxPair[1] ? currentPair : maxPair
  );

  return `📊 Most Active Trading Pair:

🔹 Pair: ${mostTradedPair[0]}
📈 Open Trades: ${mostTradedPair[1]}

This is the trading pair with the most open positions currently. 🚀`;
};
