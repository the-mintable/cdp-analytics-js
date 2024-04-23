import type { AnalyticsSnippet } from '@the-mintable/cdp-analytics-browser'

declare global {
  interface Window {
    analytics: AnalyticsSnippet
  }
}
