export const getExtremeTradingFeePairTemplate = `Respond with a JSON object indicating whether the user is asking for the highest or lowest trading fee pair.
Extract keywords from the most recent message to determine if they are asking for:
- The **highest** trading fee pair (e.g., "most expensive", "highest fee", "max trading fee").
- The **lowest** trading fee pair (e.g., "cheapest", "lowest fee", "min trading fee").

The response must include:
- feeType: Either "highest" or "lowest".

Example responses:
\`\`\`json
{
    "feeType": "highest"
}
\`\`\`

\`\`\`json
{
    "feeType": "lowest"
}
\`\`\`

{{recentMessages}}
Analyze the most recent message to determine if the user wants the highest or lowest trading fee pair.
Respond with a JSON markdown block containing the extracted "feeType".`;
