import debounce from '@/plugins/utils/debounce'
import throttle from '@/plugins/utils/throttle'
import { currency, miss } from '@/plugins/filters'

function isEmpty (value) {
  return value === undefined || value === null
}

export default {
  debounce,
  throttle,
  isEmpty,
  currency,
  miss
}
