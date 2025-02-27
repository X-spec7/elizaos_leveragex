export interface FetchTradesResponseDTO {
  trades: ITrade[]
  ois: IOIS
}

// <------------- Interfaces for Trade -------------->
export interface ITrade {
  user: string
  index: string
  pairIndex: string
  pair: string
  pairGroupName: string
  leverage: number
  long: boolean
  isOpen: boolean
  collateralIndex: string
  collateralName: string
  tradeType: string
  collateralAmount: number
  openPrice: number
  currentPrice: number
  pnLPercent: number
  tp: number
  sl: number
  tradeInfo: ITradeInfo
  initialAccFees: IInitialAccFees
  liquidationParams: ILiquidationParams
}

export interface ITradeInfo {
  createdBlock: string
  tpLastUpdatedBlock: string
  slLastUpdatedBlock: string
  maxSlippageP: number
  lastOiUpdatedTs: string
  collateralPriceUsd: number
}

export interface IInitialAccFees {
  accPairFee: string
  accGroupFee: string
  block: string
}

export interface ILiquidationParams {
  maxLiqSpreadP: number
  startLiqThresholdP: number
  endLiqThresholdP: number
  startLeverage: number
  endLeverage: number
}

// <--------------- Interfaces for OIS ---------------->

export interface IOIS {
  groupOIResult: IGroupOIResult[]
  pairOIResult: IPairOIResult[]
}

export interface IGroupOIResult {
  collateralName: string
  groupIndex: number
  longOI: number
  shortOI: number
}

export interface IPairOIResult {
  collateralName: string
  pairName: string
  pairIndex: number
  longOI: number
  shortOI: number
}
