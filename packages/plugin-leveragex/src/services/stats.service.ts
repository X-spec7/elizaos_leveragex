import { logApiCall, logApiResponse } from '../utils'
import {
  FetchColsStatsDTO,
  FetchPairsResponseDTO,
  FetchTradesResponseDTO
} from '../types'

export const fetchStatsService = () => {
  const fetchPairsUrl: string = 'https://1f5i4e87mf.execute-api.eu-central-1.amazonaws.com/prod/pairs'
  const fetchColsStatsUrl: string = 'https://1f5i4e87mf.execute-api.eu-central-1.amazonaws.com/prod/cols-stats'
  const fetchTradesUrl: string = 'https://1f5i4e87mf.execute-api.eu-central-1.amazonaws.com/prod/trades'

  const fetchPairs = async (): Promise<FetchPairsResponseDTO> => {
    try {
      logApiCall('GET', fetchPairsUrl)

      const response = await fetch(fetchPairsUrl, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json'
        }
      })
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`)
      }

      const data: FetchPairsResponseDTO = await response.json()
      logApiResponse(fetchPairsUrl, data)

      return data
    } catch (error) {
      console.error('Error fetching pairs: ', error)
      throw error
    }
  }

  const fetchColsStats = async (): Promise<FetchColsStatsDTO> => {
    try {
      logApiCall('GET', fetchColsStatsUrl)

      const response = await fetch(fetchColsStatsUrl, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json'
        }
      })
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`)
      }

      const data: FetchColsStatsDTO = await response.json()
      logApiResponse(fetchColsStatsUrl, data)

      return data
    } catch (error) {
      console.error('Error fetching cols stats: ', error)
      throw error
    }
  }

  const fetchTrades = async (): Promise<FetchTradesResponseDTO> => {
    try {
      logApiCall('GET', fetchTradesUrl)

      const response = await fetch(fetchTradesUrl, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json'
        }
      })
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`)
      }

      const data: FetchTradesResponseDTO = await response.json()
      logApiResponse(fetchTradesUrl, data)

      return data
    } catch (error) {
      console.error('Error fetching trades: ', error)
      throw error
    }
  }

  return { fetchPairs, fetchColsStats, fetchTrades }
}
