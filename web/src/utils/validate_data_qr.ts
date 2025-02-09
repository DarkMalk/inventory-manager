import { DEFAULT_COLUMNS } from './constants'

export const validateDataQR = (json: Record<string, unknown>): boolean => {
  const keys = Object.keys(json)
  return keys.every(column => DEFAULT_COLUMNS.includes(column as keyof IQRDataComputers))
}
