import { useFiltersStore } from '../store/useFiltersStore'

export const useFilters = () => {
  const { filters, setFilters } = useFiltersStore()

  return { filters, setFilters }
}
