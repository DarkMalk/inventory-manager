import { ModalEditComputer } from './ModalEditComputer'
import { DEFAULT_COLUMNS } from '../utils/constants'
import { useInventory } from '../hooks/useInventory'
import { TrashIcon } from '../icons/trash-icon'
import { EditIcon } from '../icons/edit-icon'
import { Button, Table } from 'reactstrap'
import { useState } from 'react'
import { toast } from 'sonner'

type Props = {
  columns?: ColumnsDataComputer
  data: IQRDataComputers[]
  className?: string
  btnActions?: boolean
}

export const TableComputers = ({ columns = DEFAULT_COLUMNS, data, className, btnActions }: Props) => {
  const [indexComputer, setIndexComputer] = useState<number | null>(null)
  const [isOpenModal, setIsOpenModal] = useState(false)
  const { inventory, setInventory } = useInventory()

  const handleDelete = (index: number) => {
    setInventory(inventory.filter((_, i) => i !== index))
    toast.success('Computer deleted successfully')
  }

  const openModal = (index: number) => {
    setIndexComputer(index)
    setIsOpenModal(!isOpenModal)
  }

  return (
    <>
      <Table bordered hover responsive striped className={className}>
        <thead>
          <tr>
            <th>#</th>
            {columns.map((value, index) => (
              <th key={index}>{value}</th>
            ))}
            {btnActions && <th>Actions</th>}
          </tr>
        </thead>
        <tbody>
          {data.map((value, index) => (
            <tr key={index}>
              <th scope='row'>{index + 1}</th>
              <td className='text-nowrap'>{value.hostname}</td>
              <td className='text-nowrap'>{value.ip}</td>
              <td className='text-nowrap'>{value.serialnumber}</td>
              <td className='text-nowrap'>{value.manufacturer}</td>
              <td className='text-nowrap'>{value.model}</td>
              {btnActions && (
                <td className='text-nowrap d-flex gap-2'>
                  <Button color='warning' onClick={() => openModal(index)}>
                    <EditIcon />
                  </Button>
                  <Button color='danger' onClick={() => handleDelete(index)}>
                    <TrashIcon />
                  </Button>
                </td>
              )}
            </tr>
          ))}
        </tbody>
      </Table>
      <ModalEditComputer
        isOpen={isOpenModal}
        toggle={() => setIsOpenModal(!isOpenModal)}
        indexComputer={indexComputer ?? 0}
      />
    </>
  )
}
