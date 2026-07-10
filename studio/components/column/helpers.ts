export const GRID_COLUMNS = 12

export interface ColumnOption {
  title: string
  value: number
  disabled: boolean
}

export function getColumnLimit(sibling?: number) {
  return sibling ? GRID_COLUMNS - sibling + 1 : GRID_COLUMNS
}

export function getColumnOptions(sibling?: number): ColumnOption[] {
  const limit = getColumnLimit(sibling)
  return Array.from({ length: GRID_COLUMNS }, (_, index) => index + 1).map((value) => ({
    title: String(value),
    value,
    disabled: value > limit
  }))
}

export function validateCombination(start?: number, span?: number) {
  if (start === undefined || span === undefined) return true
  if (start + span - 1 > GRID_COLUMNS) return 'Invalid Combo'
  return true
}
