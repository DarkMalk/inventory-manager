import { Button, Form, Input, Label, Modal, ModalBody, ModalFooter, ModalHeader } from 'reactstrap'
import { handleChangeInputs } from '../utils/handle_change_inputs'
import { useInventory } from '../hooks/useInventory'
import { useFilters } from '../hooks/useFilters'
import { useEffect, useState } from 'react'
import { toast } from 'sonner'

type Props = {
  isOpen: boolean
  toggle: () => void
  idComputer: string
}

const INITIAL_STATE_COMPUTER: IComputer = {
  id: '',
  hostname: '',
  ip: '',
  serialnumber: '',
  manufacturer: '',
  model: '',
  location: ''
}

export const ModalEditComputer = ({ isOpen, toggle, idComputer }: Props) => {
  const [computer, setComputer] = useState<IComputer>(INITIAL_STATE_COMPUTER)
  const { inventory, filteredInventory, updateComputer } = useInventory()
  const { filters } = useFilters()

  const hasFilters = Object.values(filters).some(value => value)

  useEffect(() => {
    const computerToEdit = hasFilters
      ? filteredInventory.find(item => item.id === idComputer)
      : inventory.find(item => item.id === idComputer)
    if (computerToEdit) setComputer(computerToEdit)
  }, [idComputer, inventory, filteredInventory])

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    updateComputer(computer)

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
              onChange={event => handleChangeInputs<IComputer>({ event, data: computer, setState: setComputer })}
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
              onChange={event => handleChangeInputs<IComputer>({ event, data: computer, setState: setComputer })}
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
              onChange={event => handleChangeInputs<IComputer>({ event, data: computer, setState: setComputer })}
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
              onChange={event => handleChangeInputs<IComputer>({ event, data: computer, setState: setComputer })}
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
              onChange={event => handleChangeInputs<IComputer>({ event, data: computer, setState: setComputer })}
              name='model'
              value={computer.model}
              placeholder='Model'
              required
            />
          </Label>
          <Label>
            Location
            <Input
              type='text'
              onChange={event => handleChangeInputs<IComputer>({ event, data: computer, setState: setComputer })}
              name='location'
              value={computer.location}
              placeholder='Location'
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
