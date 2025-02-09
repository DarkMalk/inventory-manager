import { Button, Form, Input, Label, Modal, ModalBody, ModalFooter, ModalHeader } from 'reactstrap'
import { handleChangeInputs } from '../utils/handle_change_inputs'
import { useInventory } from '../hooks/useInventory'
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
  const { inventory, setInventory } = useInventory()

  useEffect(() => {
    const computerToEdit = inventory[indexComputer]
    if (computerToEdit) setComputer({ ...computer, ...computerToEdit })
    console.log({ computerToEdit, indexComputer })
  }, [indexComputer, inventory])

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    const newInventory = inventory.map((item, index) => (index === indexComputer ? computer : item))
    setInventory(newInventory)
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
