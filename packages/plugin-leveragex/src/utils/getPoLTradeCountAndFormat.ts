import { ITrade } from "../types";

interface IGetPoLTradeCountAndFormatProps {
  status: "profit" | "loss";
  trades: ITrade[];
}

export const getPoLTradeCountAndFormat = ({
  status,
  trades,
}: IGetPoLTradeCountAndFormatProps) => {
  if (!trades || trades.length === 0) {
    return "No trades available.";
  }

  // Filter trades based on PnL status
  const filteredTrades = trades.filter((trade) =>
    status === "profit" ? trade.pnLPercent > 0 : trade.pnLPercent < 0
  );

  const tradeCount = filteredTrades.length;

  if (status === "profit") {
    return `📊 Open Trades Summary:
  
  ✅ Trades in Profit: ${tradeCount}

  🔍 Total Open Trades: ${trades.length}

  ⚠️ Note: Keep an eye on market trends and risk management strategies. 🚀`;
  } else {
    return `📊 Open Trades Summary:
  
    ✅ Trades in Profit: ${tradeCount}
  
    🔍 Total Open Trades: ${trades.length}
  
    ⚠️ Note: Keep an eye on market trends and risk management strategies. 🚀`;
  }
};
