import { Input } from 'reactstrap'

type Props = {
  value: string
  options: string[]
  defaultOption: string
  name?: string
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void
}

export const InputSelect = ({ value, options, defaultOption, onChange, name }: Props) => (
  <Input type='select' name={name} value={value} onChange={onChange}>
    <option value='' selected disabled>
      {defaultOption}
    </option>
    {options.map((string, index) => (
      <option key={index} value={string}>
        {string}
      </option>
    ))}
  </Input>
)
