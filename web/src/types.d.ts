interface IQRDataComputers {
  hostname: string
  ip: string
  serialnumber: string
  manufacturer: string
  model: string
}

type ColumnsDataComputer = (keyof IComputer)[]

interface IComputer extends IQRDataComputers {
  id: string
  location: string
}

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
  inventory: IComputer[]
  add: (computer: IComputer) => void
  setInventory: (computers: IComputer[]) => void
  filteredInventory: IComputer[]
  setFilteredInventory: (computers: IComputer[]) => void
}
