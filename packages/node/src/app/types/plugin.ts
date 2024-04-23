import type { CorePlugin } from '@tandem.team/cdp-analytics-core'
import type { Analytics } from '../analytics-node'
import type { Context } from '../context'

export interface Plugin extends CorePlugin<Context, Analytics> { }
