import { fetchStatsService } from "../services";

export const getCollateralNameById = async (collateralId: number): Promise<string> => {
  const { fetchColsStats } = fetchStatsService();

  try {
    const response = await fetchColsStats();

    // Find the matching collateral
    const matchingCollateral = response.collaterals.find(
      (collateral) => collateral.collateral === String(collateralId)
    );

    return matchingCollateral ? matchingCollateral.collateralName : `Unknown Collateral For Collateral ID: ${collateralId}`;
  } catch (error) {
    console.error(`Error fetching collateral name for ID ${collateralId}:`, error);
    return `Unknown Collateral For Collateral ID: ${collateralId}`;
  }
};
