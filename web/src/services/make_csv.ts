import { DEFAULT_COLUMNS } from '../utils/constants'

type Props = {
  data: IQRDataComputers[]
}

export const makeCSV = ({ data }: Props) => {
  const csvLines = []

  const headersCSV = DEFAULT_COLUMNS.join(',')
  csvLines.push(headersCSV)

  for (const content of data) {
    const values: string[] = Object.values(content)
    csvLines.push(values.map(value => value.replace(',', '.')).join(','))
  }

  return csvLines.join('\n')
}
