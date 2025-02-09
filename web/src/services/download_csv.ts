type Props = {
  data: string
}

export const downloadCsv = ({ data }: Props): void => {
  const blob = new Blob([data], { type: 'text/csv' })

  const url = URL.createObjectURL(blob)
  const a = document.createElement('a')
  a.href = url

  const date = new Date().toDateString()
  a.download = `Inventory ${date}.csv`

  document.body.appendChild(a)
  a.click()

  URL.revokeObjectURL(url)
  document.body.removeChild(a)
}
