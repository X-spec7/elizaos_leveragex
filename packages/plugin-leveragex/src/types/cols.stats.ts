export interface FetchColsStatsDTO {
  yield: IYield
  collaterals: ICollateral[]
}

// <-------------- Interfaces for yield ------------->
export interface IYield {
  apr: number
  apy: number
  totalVolume: ITotalVolume
  totalVolumeUSD: ITotalVolumeUSD
  totalFees: ITotalFees
  totalFeesUSD: ITotalFeesUSD
}

export interface IBaseVolume {
  WETH: number
  cbBTC: number
  USDC: number
}

export interface ITotalVolume extends IBaseVolume {}

export interface ITotalVolumeUSD extends IBaseVolume {
  TOTAL: number
}

export interface ITotalFees extends IBaseVolume {}

export interface ITotalFeesUSD extends IBaseVolume {
  TOTAL: number
}

// <------------- Interfaces for collaterals ------------>
export interface ICollateral {
  collateral: string
  lastDayEarned: IEarning
  last7DaysEarned: number
  price: number
  tvlEarn: number
  apr: number
  apy: number
  collateralName: string
  collateralInSc: number
  collateralInUsePercent: number
  collateralInUse: number
  volume: number
  fees: number
  earnings: IEarning[]
}

export interface IEarning {
  date: string
  totalOpenedTrades: number
  totalClosedTrades: number
  totalVolume: number
  totalPnl: number
  totalPnlPercentage: number
  totalLpFees: number
  totalGovFees: number
  totalStakerFees: number
  totalBorrowingFees: number
  totalReferralFees: number
  totalFees: number
}
