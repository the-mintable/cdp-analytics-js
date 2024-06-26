export type RuntimeEnv =
  | 'node'
  | 'browser'
  | 'web-worker'
  | 'cloudflare-worker'
  | 'vercel-edge'
  | 'unknown'

export const detectRuntime = (): RuntimeEnv => {
  if (typeof process === 'object' && process && process.env) {
    return 'node'
  }

  if (typeof window === 'object') {
    return 'browser'
  }

  // @ts-ignore
  if (typeof WebSocketPair !== 'undefined') {
    return 'cloudflare-worker'
  }

  // @ts-ignore
  if (typeof EdgeRuntime === 'string') {
    return 'vercel-edge'
  }

  if (
    // @ts-ignore
    typeof WorkerGlobalScope !== 'undefined' &&
    // @ts-ignore
    typeof importScripts === 'function'
  ) {
    return 'web-worker'
  }

  return 'unknown'
}
