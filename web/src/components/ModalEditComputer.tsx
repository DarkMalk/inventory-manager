import { Button, Form, Input, Label, Modal, ModalBody, ModalFooter, ModalHeader } from 'reactstrap'
import { handleChangeInputs } from '../utils/handle_change_inputs'
import { useInventory } from '../hooks/useInventory'
import { useFilters } from '../hooks/useFilters'
import { useEffect, useState } from 'react'
import { toast } from 'sonner'

type Props = {
  isOpen: boolean
  toggle: () => void
  indexComputer: number
}

const INITIAL_STATE_COMPUTER: IQRDataComputers = {
  hostname: '',
  ip: '',
  serialnumber: '',
  manufacturer: '',
  model: ''
}

export const ModalEditComputer = ({ isOpen, toggle, indexComputer }: Props) => {
  const [computer, setComputer] = useState<IQRDataComputers>(INITIAL_STATE_COMPUTER)
  const { inventory, filteredInventory, setInventory, setFilteredInventory } = useInventory()
  const { filters } = useFilters()

  const hasFilters = Object.values(filters).some(value => value)

  useEffect(() => {
    const computerToEdit = hasFilters ? filteredInventory[indexComputer] : inventory[indexComputer]
    if (computerToEdit) setComputer({ ...computer, ...computerToEdit })
  }, [indexComputer, inventory, filteredInventory])

  // TODO: modificar para que esta funcionalidad se pueda utilizar mediante un ID en lugar de un index
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    let newFilteredInventory = []
    let newInventory = []

    if (hasFilters) {
      const indexComputerInventory = inventory.findIndex(item => item.hostname === computer.hostname)
      if (indexComputerInventory !== -1) {
        newInventory = inventory.map((item, index) => (index === indexComputerInventory ? computer : item))
        setInventory(newInventory)
      }

      newFilteredInventory = filteredInventory.map((item, index) => (index === indexComputer ? computer : item))
      setFilteredInventory(newFilteredInventory)
    } else {
      newInventory = inventory.map((item, index) => (index === indexComputer ? computer : item))
      setInventory(newInventory)
    }

    toggle()
    toast.success('Computer edited successfully')
  }

  return (
    <Modal fade centered isOpen={isOpen} toggle={toggle}>
      <ModalHeader toggle={toggle}>Edit Computer</ModalHeader>
      <ModalBody>
        <Form id='form-edit-computer' onSubmit={handleSubmit} autoFocus className='d-flex flex-column gap-2'>
          <Label>
            Hostname
            <Input
              type='text'
              onChange={event => handleChangeInputs<IQRDataComputers>({ event, data: computer, setState: setComputer })}
              name='hostname'
              value={computer.hostname}
              placeholder='Hostname'
              required
            />
          </Label>
          <Label>
            IP
            <Input
              type='text'
              onChange={event => handleChangeInputs<IQRDataComputers>({ event, data: computer, setState: setComputer })}
              name='ip'
              value={computer.ip}
              placeholder='IP'
              required
            />
          </Label>
          <Label>
            Serial Number
            <Input
              type='text'
              onChange={event => handleChangeInputs<IQRDataComputers>({ event, data: computer, setState: setComputer })}
              name='serialnumber'
              value={computer.serialnumber}
              placeholder='Serial Number'
              required
            />
          </Label>
          <Label>
            Manufacturer
            <Input
              type='text'
              onChange={event => handleChangeInputs<IQRDataComputers>({ event, data: computer, setState: setComputer })}
              name='manufacturer'
              value={computer.manufacturer}
              placeholder='Manufacturer'
              required
            />
          </Label>
          <Label>
            Model
            <Input
              type='text'
              onChange={event => handleChangeInputs<IQRDataComputers>({ event, data: computer, setState: setComputer })}
              name='model'
              value={computer.model}
              placeholder='Model'
              required
            />
          </Label>
        </Form>
      </ModalBody>
      <ModalFooter>
        <Button color='primary' form='form-edit-computer' type='submit'>
          Save
        </Button>
        <Button color='danger' onClick={toggle}>
          Cancel
        </Button>
      </ModalFooter>
    </Modal>
  )
}
