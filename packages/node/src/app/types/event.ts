import type { CoreCustomerioEvent } from '@tandem.team/cdp-analytics-core'

type CustomerioEventType = 'track' | 'page' | 'identify' | 'alias' | 'screen'

export interface CustomerioEvent extends CoreCustomerioEvent {
  type: CustomerioEventType
}
