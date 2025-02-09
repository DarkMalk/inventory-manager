import { useStore } from '../store'

export const DEFAULT_VALUES_FILTERS = { searchString: '', manufacturer: '', model: '' }

export const useFilters = () => {
  const { filters, setFilters } = useStore()

  return { filters, setFilters }
}
