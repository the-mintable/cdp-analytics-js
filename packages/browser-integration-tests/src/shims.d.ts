import type { AnalyticsSnippet } from '@tandem.team/cdp-analytics-browser'

declare global {
  interface Window {
    analytics: AnalyticsSnippet
  }
}
