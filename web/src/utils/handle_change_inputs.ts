type Props<T> = {
  event: React.ChangeEvent<HTMLInputElement>
  data: T
  setState: React.Dispatch<React.SetStateAction<T>> | ((data: T) => void)
}

export const handleChangeInputs = <T>({ event, data, setState }: Props<T>) => {
  const { name, value } = event.target
  setState({ ...data, [name]: value })
}
