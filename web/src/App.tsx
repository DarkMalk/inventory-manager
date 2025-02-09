import { TableComputers } from './components/TableComputers'
import { ModalCamera } from './components/ModalCamera'
import { useInventory } from './hooks/useInventory'
import { NavbarComponent } from './components/Nav'
import { useFilters } from './hooks/useFilters'
import { Filters } from './components/Filters'
import { Toaster } from 'sonner'

const App = () => {
  const { inventory, filteredInventory } = useInventory()
  const { filters } = useFilters()

  const hasFilters = Object.values(filters).some(item => item)
  const inventoryToRender = hasFilters ? filteredInventory : inventory

  return (
    <>
      <NavbarComponent />
      <main className='container my-5'>
        <Filters />
        <TableComputers data={inventoryToRender} />
      </main>
      <ModalCamera />
      <Toaster richColors position='bottom-right' />
    </>
  )
}

export { App }
