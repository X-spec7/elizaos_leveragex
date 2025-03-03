export const getPoLOpenTradesCountTemplate = `Respond with a JSON object indicating whether the user is asking for the number of open trades in profit or at a loss.
Extract keywords from the most recent message to determine if they are asking for:
- The **number of profitable trades** (e.g., "winning trades", "trades in profit", "profitable positions").
- The **number of losing trades** (e.g., "losing trades", "trades in loss", "negative positions").

The response must include:
- tradeStatus: Either "profit" or "loss".

Example responses:
\`\`\`json
{
    "tradeStatus": "profit"
}
\`\`\`

\`\`\`json
{
    "tradeStatus": "loss"
}
\`\`\`

{{recentMessages}}
Analyze the most recent message to determine if the user wants the count of trades in profit or at a loss.
Respond with a JSON markdown block containing the extracted "tradeType".`;
