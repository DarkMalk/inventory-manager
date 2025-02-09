type Props = {
  filters: Filters
  inventory: IQRDataComputers[]
}

export const filterInventory = ({ filters, inventory }: Props) => {
  let copyArray = inventory
  const lowerSearchString = filters.searchString.toLowerCase()
  const hasFilterManufacturer = Boolean(filters.manufacturer)
  const hasFilterModel = Boolean(filters.model)
  const hasFilters = Object.values(filters).some(item => item)

  // Verifica si alguno de los filtros es truthy, en el caso de que sean todos falsy retorna un array vacío
  if (!hasFilters) {
    return []
  }

  // Verifica si existe el filtro de marca y lo filtro por ello
  if (hasFilterManufacturer) {
    copyArray = copyArray.filter(item => item.manufacturer === filters.manufacturer)
  }

  // Verifica si existe el filtro de modelo y lo filtra por ello
  if (hasFilterModel) {
    copyArray = copyArray.filter(item => item.model === filters.model)
  }

  // Filtra hostname, ip y número de serie si encuentra algún patron con el searchString
  copyArray = copyArray.filter(
    ({ hostname, ip, serialnumber }) =>
      hostname.toLowerCase().includes(lowerSearchString) ||
      ip.includes(lowerSearchString) ||
      serialnumber.toLowerCase().includes(lowerSearchString)
  )

  return copyArray
}
