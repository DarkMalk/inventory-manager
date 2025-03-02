import { Alert, Button, Input, Modal, ModalBody, ModalFooter, ModalHeader } from 'reactstrap'
import { isPreviousAddedComputer } from '../utils/validate_is_previous_added'
import { IDetectedBarcode, Scanner } from '@yudiel/react-qr-scanner'
import { generateRandomUUID } from '../utils/generate_random_uuid'
import { validateDataQR } from '../utils/validate_data_qr'
import { useInventory } from '../hooks/useInventory'
import { TableComputers } from './TableComputers'
import { useModal } from '../hooks/useModal'
import { useState } from 'react'
import { toast } from 'sonner'
import { handleChangeInputs } from '../utils/handle_change_inputs'

const ModalCamera = () => {
  const [computer, setComputer] = useState<IComputer | null>(null)
  const { isOpenModal, toggleModal } = useModal()
  const { inventory, addOneComputer } = useInventory()
  const isPausedCamera = !isOpenModal

  const closeModal = () => {
    toggleModal()
    setComputer(null)
  }

  const handleScan = (content: IDetectedBarcode[]) => {
    const [data] = content

    const rawData = data.rawValue.replace(/'/g, '"')

    try {
      const json = JSON.parse(rawData)

      if (!validateDataQR(json)) {
        return toast.error('Invalid QR data')
      }

      const newComputer: IComputer = {
        id: generateRandomUUID(),
        ...json,
        serialnumber: json.serialnumber || 'Unknown',
        location: 'Unknown'
      }
      setComputer(newComputer)
    } catch {
      toast.error('Invalid QR data')
    }
  }

  const handleSaveComputers = () => {
    if (!computer) return toast.error('Could not save')

    const isPreviousAdded = isPreviousAddedComputer({ inventory, computer })
    if (isPreviousAdded) {
      closeModal()
      return toast.error('The computer has already been added previously')
    }

    addOneComputer({ ...computer, location: computer.location || 'Unknown' })
    toast.success('Successfully added to inventory')
    setComputer(null)
    closeModal()
  }

  const alertText = computer
    ? 'Device detected, do you want to save it to the inventory?'
    : 'Bring your device closer to the QR to scan its information'

  console.log(computer)

  return (
    <>
      <Modal fade centered isOpen={isOpenModal} toggle={closeModal}>
        <ModalHeader toggle={closeModal}>Scan Computer</ModalHeader>
        <ModalBody>
          <Alert color='info'>{alertText}</Alert>
          {!computer ? (
            <Scanner paused={isPausedCamera} styles={{ container: { aspectRatio: '1/1' } }} onScan={handleScan} />
          ) : (
            <>
              <TableComputers className='my-4' data={[computer]} />
              <Input
                type='text'
                placeholder='Insert location for this device, default is Unknown'
                className='mt-2'
                name='location'
                onChange={event => handleChangeInputs({ event, data: computer, setState: setComputer })}
              />
            </>
          )}
        </ModalBody>
        <ModalFooter>
          <Button disabled={!computer} color='primary' onClick={handleSaveComputers}>
            Add
          </Button>
          <Button color='danger' onClick={closeModal}>
            Cancel
          </Button>
        </ModalFooter>
      </Modal>
    </>
  )
}

export { ModalCamera }
