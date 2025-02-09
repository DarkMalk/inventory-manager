import { DEFAULT_VALUES_FILTERS } from '../utils/constants'
import { create } from 'zustand'

export const useFiltersStore = create<IStoreFilters>(set => ({
  filters: DEFAULT_VALUES_FILTERS,
  setFilters: filters => set(() => ({ filters }))
}))
