export const getExtremeCollateralTemplate = `Respond with a JSON object indicating whether the user is asking for the biggest or smallest collateral.

Extract keywords from the most recent message to determine if they are asking for:
- The **biggest collateral** (e.g., "largest collateral", "maximum collateral", "biggest asset", "most locked collateral").
- The **smallest collateral** (e.g., "smallest collateral", "minimum collateral", "least locked asset", "lowest asset").

The response must include:
- collateralStatus: Either "highest" or "lowest".

Example responses:
\\\json
{
    "collateralStatus": "highest"
}
\\\

\\\json
{
    "collateralStatus": "lowest"
}
\\\

{{recentMessages}}

Analyze the most recent message to determine if the user wants the biggest or smallest collateral.
Respond with a JSON markdown block containing the extracted "collateralStatus".`;
