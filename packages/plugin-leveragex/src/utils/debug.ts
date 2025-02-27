import { elizaLogger } from "@elizaos/core"

export const debugLog = (message: string, data?: any) => {
  const timestamp = new Date().toISOString()
  const logMessage = `[${timestamp}] ${message}${data ? '\n' + JSON.stringify(data, null, 2) : ''}`

  // Log to Eliza's logger
  elizaLogger.debug(logMessage)

  // Also log to console for development
  if (process.env.NODE_ENV === 'development') {
    console.log('🏃 Football API:', message)
    if (data) {
      console.dir(data, { depth: null, colors: true })
    }
  }
}
