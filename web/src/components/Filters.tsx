import { DEFAULT_VALUES_FILTERS, useFilters } from '../hooks/useFilters'
import { filterInventory } from '../utils/filtered_inventory'
import { Button, Input, InputGroup } from 'reactstrap'
import { useInventory } from '../hooks/useInventory'
import { InputSelect } from './InputSelect'
import { useEffect } from 'react'

export const Filters = () => {
  const { inventory, setFilteredInventory } = useInventory()
  const { filters, setFilters } = useFilters()

  const manufacturers = Array.from(new Set(inventory.map(item => item.manufacturer)))
  const models = Array.from(new Set(inventory.map(item => item.model)))

  const onChangeInputs = (event: React.ChangeEvent<HTMLInputElement>) =>
    setFilters({ ...filters, [event.target.name]: event.target.value })

  const resetFilters = () => setFilters(DEFAULT_VALUES_FILTERS)

  useEffect(() => {
    setFilteredInventory(filterInventory({ filters, inventory }))
  }, [filters])

  return (
    <search className='my-4'>
      <InputGroup>
        <Input
          onChange={onChangeInputs}
          value={filters.searchString}
          name='searchString'
          type='text'
          placeholder='Search with hostname, ip and serial number'
        />
        <InputSelect
          value={filters.manufacturer}
          onChange={onChangeInputs}
          name='manufacturer'
          options={manufacturers}
          defaultOption='Select a manufacturer'
        />
        <InputSelect
          value={filters.model}
          onChange={onChangeInputs}
          options={models}
          name='model'
          defaultOption='Select a model'
        />
        <Button color='danger' onClick={resetFilters}>
          Reset filters
        </Button>
      </InputGroup>
    </search>
  )
}
