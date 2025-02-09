type Props = {
  inventory: IQRDataComputers[]
  computer: IQRDataComputers
}

export const isPreviousAddedComputer = ({ inventory, computer }: Props) => {
  const inventoryFiltered = inventory.filter(
    pc => pc.hostname === computer.hostname || pc.ip === computer.ip || pc.serialnumber === computer.serialnumber
  )

  return Boolean(inventoryFiltered.length)
}
