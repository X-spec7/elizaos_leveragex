export const getTradingFeePairTemplate = `Extract the trading pair from the user's message and respond with a JSON object.

The response must include:
- from: The base asset (string).
- to: The quote asset (string).

Example responses:
\`\`\`json
{
    "from": "ETH",
    "to": "USD"
}
\`\`\`

\`\`\`json
{
    "from": "BTC",
    "to": "USDT"
}
\`\`\`

{{recentMessages}}
Analyze the most recent message to extract the two assets involved in the trading pair.
Respond with a JSON markdown block containing "from" and "to" fields.`;
