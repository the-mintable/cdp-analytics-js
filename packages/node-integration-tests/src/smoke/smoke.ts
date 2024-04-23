import { default as AnalyticsDefaultImport } from '@tandem.team/cdp-analytics-node'
import { Analytics as AnalyticsNamedImport } from '@tandem.team/cdp-analytics-node'

{
  // test named imports vs default imports
  new AnalyticsNamedImport({ writeKey: 'hello world' })
  new AnalyticsDefaultImport({ writeKey: 'hello world' })
}
