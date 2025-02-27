import { elizaLogger } from "@elizaos/core"

export const debugLog = (message: string, data?: any) => {
  const timestamp = new Date().toISOString()
  const logMessage = `[${timestamp}] ${message}${data ? '\n' + JSON.stringify(data, null, 2) : ''}`

  // Log to Eliza's logger
  elizaLogger.debug(logMessage)

  // Also log to console for development
  if (process.env.NODE_ENV === 'development') {
    console.log('Leverage API :', message)
    if (data) {
      console.dir(data, { depth: null, colors: true })
    }
  }
}

export const logApiCall = (method: string, url: string | URL, params: any = {}) => {
  debugLog(`API Call: ${method} ${url.toString()}`, params)
}

export const logApiResponse = (endpoint: string, response: any) => {
  debugLog(`API Response from ${endpoint}:`, {
    status: response.status,
    results: response.results,
    errors: response.errors,
    response: response.response
  })

  // Check for rate limiting headers
  if (response.headers) {
    const remaining = response.headers.get('x-ratelimit-remaining')
    const reset = response.headers.get('x-ratelimit-reset')
    if (remaining && parseInt(remaining) < 10) {
      debugLog(`⚠️ API Rate limit warning!`, {
        remaining,
        resetTime: reset ? new Date(parseInt(reset) * 1000).toLocaleString() : 'unknown'
      })
    }
  }
}
