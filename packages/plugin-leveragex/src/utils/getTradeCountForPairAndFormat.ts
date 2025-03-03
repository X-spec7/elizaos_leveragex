import { ITrade } from "../types";

interface IGetTradeCountForPairProps {
  trades: ITrade[];
  pair: string;
}

export const getTradeCountForPairAndFormat = ({
  trades,
  pair,
}: IGetTradeCountForPairProps) => {
  if (!trades || trades.length === 0) {
    return `No trades available.`;
  }

  // Filter trades that match the pair and are currently open
  const openTrades = trades.filter((trade) => trade.pair === pair && trade.isOpen);

  return `📊 Trade Count Summary:

🔹 Trading Pair: ${pair}
📈 Open Trades: ${openTrades.length}

⚡ Stay informed and manage your trades wisely!`;
};
