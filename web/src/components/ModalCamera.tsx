import { Alert, Button, Modal, ModalBody, ModalFooter, ModalHeader } from 'reactstrap'
import { isPreviousAddedComputer } from '../utils/validate_is_previous_added'
import { IDetectedBarcode, Scanner } from '@yudiel/react-qr-scanner'
import { validateDataQR } from '../utils/validate_data_qr'
import { useInventory } from '../hooks/useInventory'
import { TableComputers } from './TableComputers'
import { useModal } from '../hooks/useModal'
import { useState } from 'react'
import { toast } from 'sonner'

const ModalCamera = () => {
  const [computer, setComputer] = useState<IQRDataComputers | null>(null)
  const { isOpenModal, toggleModal } = useModal()
  const { inventory, addComputer } = useInventory()
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

      setComputer(json)
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

    addComputer(computer)
    toast.success('Successfully added to inventory')
    closeModal()
  }

  return (
    <>
      <Modal fade centered isOpen={isOpenModal} toggle={closeModal}>
        <ModalHeader toggle={closeModal}>Scan Computer</ModalHeader>
        <ModalBody>
          <Alert color='info'>Bring your device closer to the QR to scan its information</Alert>
          <Scanner paused={isPausedCamera} styles={{ container: { aspectRatio: '1/1' } }} onScan={handleScan} />
          {computer && <TableComputers className='my-4' data={[computer]} />}
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
