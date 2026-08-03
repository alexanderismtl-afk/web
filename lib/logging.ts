type LogLevel = 'info' | 'warn' | 'error'

export function logEvent(message: string, details?: Record<string, unknown>, level: LogLevel = 'info') {
  if (process.env.NODE_ENV === 'test') {
    return
  }

  const payload = {
    timestamp: new Date().toISOString(),
    level,
    message,
    ...details,
  }

  if (level === 'error') {
    console.error(JSON.stringify(payload))
    return
  }

  if (level === 'warn') {
    console.warn(JSON.stringify(payload))
    return
  }

  console.info(JSON.stringify(payload))
}
