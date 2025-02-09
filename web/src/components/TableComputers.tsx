import { DEFAULT_COLUMNS } from '../utils/constants'
import { Table } from 'reactstrap'

type Props = {
  columns?: ColumnsDataComputer
  data: IQRDataComputers[]
  className?: string
}

export const TableComputers = ({ columns = DEFAULT_COLUMNS, data, className }: Props) => (
  <Table bordered hover responsive striped className={className}>
    <thead>
      <tr>
        <th>#</th>
        {columns.map((value, index) => (
          <th key={index}>{value}</th>
        ))}
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
        </tr>
      ))}
    </tbody>
  </Table>
)
