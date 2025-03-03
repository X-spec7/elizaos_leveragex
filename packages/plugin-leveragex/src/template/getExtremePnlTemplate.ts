export const getExtremePnLTradeTemplate = `Respond with a JSON object indicating whether the user is asking for the highest or lowest PnL trade.
Extract keywords from the most recent message to determine if they are asking for:
- The **highest PnL trade** (e.g., "most profitable", "best trade", "highest PnL", "biggest profit").
- The **lowest PnL trade** (e.g., "biggest loss", "worst trade", "lowest PnL", "highest loss").

The response must include:
- pnlType: Either "highest" or "lowest".

Example responses:
\`\`\`json
{
    "pnlType": "highest"
}
\`\`\`

\`\`\`json
{
    "pnlType": "lowest"
}
\`\`\`

{{recentMessages}}
Analyze the most recent message to determine if the user wants the highest or lowest PnL trade.
Respond with a JSON markdown block containing the extracted "pnlType".`;
