export interface FetchPairsResponseDTO {
  block: number
  isForexOpen: boolean
  isStocksOpen: boolean
  isCommoditiesOpen: boolean
  isCryptoOpen: boolean
  limits: ILimit[]
  groupFees: IGroupFee[]
  groupLps: IGroupLP[]
  groupOis: IGroupOI[]
  groups: IGroups
  collaterals: IPairCollateral
}

// <------------ shared types -------------->
export interface IValues {
  long: number
  short: number
  max: number
}

export interface IUtilization {
  longUtilization: number
  shortUtilization: number
}

// <------------ limit interface ------------->
export interface ILimit {
  key: string
  index: number
  pairName: string
  values: IValues
  utilization: IUtilization
}

// <----------- limit group interface ------------->
export interface ILimitGroup {
  collateralId: number
  groupId: number
  values: IValues
  utilization: IUtilization
}

// <------------ interfaces for pairs -------------->
export interface IPair {
  name: string
  from: string
  to: string
  feeIndex: number
  groupIndex: number
  pairIndex: number
  spreadP: number
  description: string
  listed: boolean
  liqParams: ILiqParams
  backend: IBackend
  depth: IDepth
  blockFees: IBlockFee[]
  oi: IOI
}

export interface ILiqParams {
  maxLiqSpreadP: number
  startLiqThresholdP: number
  endLiqThresholdP: number
  startLeverage: number
  endLeverage: number
}

export interface IBackend {
  from: string
  to: string
  feeId: string
  spreadP: string
  groupIndex: number
  feeIndex: number
  altPriceOracle: boolean
  name: string
  minLeverage: number
  maxLeverage: number
  openFeeP: number
  closeFeeP: number
  triggerOrderFeeP: number
  minPositionSizeUsd: number
}

export interface IDepth {
  onePercentDepthAboveUsd: number
  onePercentDepthBelowUsd: number
}

export interface IBlockFee {
  collateralId: number
  pairId: number
  result: IBlockFeeResult
}

export interface IBlockFeeResult {
  feePerBlock: number
  accFeeLong: number
  accFeeShort: number
  accLastUpdatedBlock: number
}

export interface IOI {
  weth: IValues
  cbbtc: IValues
  usdc: IValues
  categories: string[]
}

// <-------------- interfaces for group fees -------------->
export interface IGroupFee {
  openFeeP: number
  closeFeeP: number
  triggerOrderFeeP: number
  minPositionSizeUsd: number
  blockFees: IBlockFee[]
}

export interface IBlockFee {
  collateralId: number
  groupId: number
  result: IBlockFeeResult
}

export interface IBlockFeeResult {
  feePerBlock: number
  accFeeLong: number
  accFeeShort: number
  accLastUpdatedBlock: number
}

// <-------------- interfaces for group -------------->
export interface IGroupLP {
  maxLiqSpreadP: number
  startLiqThresholdP: number
  endLiqThresholdP: number
  startLeverage: number
  endLeverage: number
}

export interface IGroupOI {
  collateralId: number
  groupId: number
  result: IValues
}

export interface IGroups {
  g1: IGroup
  g2: IGroup
  g3: IGroup
  g4: IGroup
}

export interface IGroup {
  name: string
  minLeverage: number
  maxLeverage: number
}

// <-------------- interface for collaterals -------------->
export interface IPairCollateral {
  collateral: string
  isActive: boolean
  __placeholder: number
  precision: bigint,
  precisionDelta: number
}
