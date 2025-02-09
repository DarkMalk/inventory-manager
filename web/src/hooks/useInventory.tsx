import { getItemLocalStorage, saveItemLocalStorage } from '../utils/local_storage'
import { KEY_INVENTORY_LOCALSTORAGE } from '../utils/constants'
import { useStore } from '../store'
import { useEffect } from 'react'

export const useInventory = () => {
  const { inventory, filteredInventory, add: addOneComputer, setInventory, setFilteredInventory } = useStore()

  useEffect(() => {
    const items = getItemLocalStorage<IQRDataComputers>(KEY_INVENTORY_LOCALSTORAGE)
    if (Array.isArray(items) && items.length > 0) setInventory(items)
  }, [])

  useEffect(() => {
    saveItemLocalStorage(KEY_INVENTORY_LOCALSTORAGE, inventory)
  }, [inventory])

  return { inventory, filteredInventory, addOneComputer, setFilteredInventory, setInventory }
}
