import { getItemLocalStorage, saveItemLocalStorage } from '../utils/local_storage'
import { KEY_INVENTORY_LOCALSTORAGE } from '../utils/constants'
import { useInventoryStore } from '../store/useInventoryStore'
import { useFilters } from './useFilters'
import { useEffect } from 'react'

export const useInventory = () => {
  const { inventory, filteredInventory, add: addOneComputer, setInventory, setFilteredInventory } = useInventoryStore()
  const { filters } = useFilters()

  useEffect(() => {
    const items = getItemLocalStorage<IComputer>(KEY_INVENTORY_LOCALSTORAGE)
    if (Array.isArray(items) && items.length > 0) setInventory(items)
  }, [])

  useEffect(() => {
    saveItemLocalStorage(KEY_INVENTORY_LOCALSTORAGE, inventory)
  }, [inventory])

  const hasFilters = Object.values(filters).some(value => value)
  const updateComputer = (computer: IComputer) => {
    if (hasFilters) {
      const newFilteredInventory = filteredInventory.map(item => (item.id === computer.id ? computer : item))
      setFilteredInventory(newFilteredInventory)
    }
    const newInventory = inventory.map(item => (item.id === computer.id ? computer : item))
    setInventory(newInventory)
  }

  return { inventory, filteredInventory, addOneComputer, setFilteredInventory, setInventory, updateComputer }
}
