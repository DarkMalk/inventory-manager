import { useEffect } from 'react'
import { useStore } from '../store'
import { getItemLocalStorage, saveItemLocalStorage } from '../utils/local_storage'

const KEY_INVENTORY_LOCALSTORAGE = 'inventory_computers'

export const useInventory = () => {
  const { inventory, filteredInventory, add, setInventory, setFilteredInventory } = useStore()

  function addComputer(computer: IQRDataComputers) {
    saveItemLocalStorage(KEY_INVENTORY_LOCALSTORAGE, [...inventory, computer])
    add(computer)
  }

  useEffect(() => {
    const items = getItemLocalStorage<IQRDataComputers>(KEY_INVENTORY_LOCALSTORAGE)
    if (items) setInventory(items)
  }, [setInventory])

  return { inventory, filteredInventory, addComputer, setFilteredInventory }
}
