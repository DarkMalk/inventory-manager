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

interface IStoreFilters {
  filters: Filters
  setFilters: (filters: Filters) => void
}

interface IStoreModal {
  isOpenModal: boolean
  toggleModal: () => void
}

interface IStoreInventory {
  inventory: IQRDataComputers[]
  add: (computer: IQRDataComputers) => void
  setInventory: (computers: IQRDataComputers[]) => void
  filteredInventory: IQRDataComputers[]
  setFilteredInventory: (computers: IQRDataComputers[]) => void
}
