import { default as AnalyticsDefaultImport } from '@joshtandemteam/cdp-analytics-node'
import { Analytics as AnalyticsNamedImport } from '@joshtandemteam/cdp-analytics-node'

{
  // test named imports vs default imports
  new AnalyticsNamedImport({ writeKey: 'hello world' })
  new AnalyticsDefaultImport({ writeKey: 'hello world' })
}
