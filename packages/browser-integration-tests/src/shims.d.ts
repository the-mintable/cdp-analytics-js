import type { AnalyticsSnippet } from '@joshtandemteam/cdp-analytics-browser'

declare global {
  interface Window {
    analytics: AnalyticsSnippet
  }
}
