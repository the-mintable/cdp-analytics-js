import { default as AnalyticsDefaultImport } from '@the-mintable/cdp-analytics-node'
import { Analytics as AnalyticsNamedImport } from '@the-mintable/cdp-analytics-node'

{
  // test named imports vs default imports
  new AnalyticsNamedImport({ writeKey: 'hello world' })
  new AnalyticsDefaultImport({ writeKey: 'hello world' })
}
