import { Select } from '@sanity/ui'
import { type ChangeEvent, useCallback } from 'react'
import { type NumberInputProps, set, unset, useFormValue } from 'sanity'

import { getColumnOptions } from './helpers'

export function ColumnSelect({ elementProps, onChange, path, value }: NumberInputProps) {
  const field = path[path.length - 1]
  const siblingField = field === 'start' ? 'span' : 'start'
  const siblingValue = useFormValue([...path.slice(0, -1), siblingField]) as number | undefined

  const handleChange = useCallback(
    (event: ChangeEvent<HTMLSelectElement>) => {
      const next = event.currentTarget.value
      onChange(next ? set(Number(next)) : unset())
    },
    [onChange]
  )

  return (
    <Select
      {...elementProps}
      value={value === undefined ? '' : String(value)}
      onChange={handleChange}
    >
      <option value="">Select…</option>
      {getColumnOptions(siblingValue).map((option) => (
        <option key={option.value} value={option.value} disabled={option.disabled}>
          {option.title}
        </option>
      ))}
    </Select>
  )
}
