interface IQRDataComputers {
  hostname: string
  ip: string
  serialnumber: string
  manufacturer: string
  model: string
}

type ColumnsDataComputer = (keyof IQRDataComputers)[]

type Filters = {
  searchString: string
  manufacturer: string
  model: string
}

interface IStore {
  inventory: IQRDataComputers[]
  add: (computer: IQRDataComputers) => void
  setInventory: (computers: IQRDataComputers[]) => void
  isOpenModal: boolean
  toggleModal: () => void
  filteredInventory: IQRDataComputers[]
  setFilteredInventory: (computers: IQRDataComputers[]) => void
  filters: Filters
  setFilters: (filters: Filters) => void
}
