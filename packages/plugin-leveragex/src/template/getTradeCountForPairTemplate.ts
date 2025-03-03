export const getTradeCountForPairTemplate = `Extract the trading pair from the most recent user message.

- Identify standard trading pairs (e.g., "BTC/USD", "ETH/USDT").
- Support variations such as:
  - "How many open trades exist between ETH and USD?"
  - "Show me active trades for Ethereum to USDT."
- Convert extracted values into a standardized format (e.g., "ETH/USD").
- The response must be a JSON object with:
  - pair: The extracted trading pair.

Example responses:

\`\`\`json
{
  "pair": "ETH/USD"
}
\`\`\`

\`\`\`json
{
  "pair": "BTC/USDT"
}
\`\`\`

{{recentMessages}}

Extract the trading pair from the user's message and respond in a JSON markdown block.`;
