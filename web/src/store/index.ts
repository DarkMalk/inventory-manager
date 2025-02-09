import { DEFAULT_VALUES_FILTERS } from '../hooks/useFilters'
import { create } from 'zustand'

const useStore = create<IStore>(set => ({
  inventory: [],
  add: newComputer => set(state => ({ inventory: [...state.inventory, newComputer] })),
  setInventory: computers => set(() => ({ inventory: computers })),
  isOpenModal: false,
  toggleModal: () => set(state => ({ isOpenModal: !state.isOpenModal })),
  filteredInventory: [],
  setFilteredInventory: computers => set(() => ({ filteredInventory: computers })),
  filters: DEFAULT_VALUES_FILTERS,
  setFilters: filters => set(() => ({ filters }))
}))

export { useStore }
