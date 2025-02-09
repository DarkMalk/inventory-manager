import { create } from 'zustand'

export const useInventoryStore = create<IStoreInventory>(set => ({
  inventory: [],
  add: newComputer => set(state => ({ inventory: [...state.inventory, newComputer] })),
  setInventory: computers => set(() => ({ inventory: computers })),
  filteredInventory: [],
  setFilteredInventory: computers => set(() => ({ filteredInventory: computers }))
}))
