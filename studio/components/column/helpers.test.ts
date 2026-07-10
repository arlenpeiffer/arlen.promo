import { describe, expect, it } from 'vitest'

import { getColumnLimit, getColumnOptions, validateCombination } from './helpers'

describe('getColumnLimit', () => {
  it('caps the field at 13 - sibling when the sibling is set', () => {
    expect(getColumnLimit(5)).toBe(8)
    expect(getColumnLimit(1)).toBe(12)
    expect(getColumnLimit(12)).toBe(1)
  })

  it('allows the full grid when the sibling is unset', () => {
    expect(getColumnLimit(undefined)).toBe(12)
  })
})

describe('getColumnOptions', () => {
  it('returns all 12 values regardless of the sibling', () => {
    expect(getColumnOptions(5)).toHaveLength(12)
    expect(getColumnOptions(undefined)).toHaveLength(12)
  })

  it('disables values that would overflow the grid', () => {
    const disabled = getColumnOptions(5)
      .filter((option) => option.disabled)
      .map((option) => option.value)
    expect(disabled).toEqual([9, 10, 11, 12])
  })

  it('disables nothing when the sibling is unset', () => {
    expect(getColumnOptions(undefined).every((option) => !option.disabled)).toBe(true)
  })

  it('disables nothing when the sibling is 1 (whole grid still fits)', () => {
    expect(getColumnOptions(1).some((option) => option.disabled)).toBe(false)
  })

  it('disables everything but 1 when the sibling is 12', () => {
    const enabled = getColumnOptions(12)
      .filter((option) => !option.disabled)
      .map((option) => option.value)
    expect(enabled).toEqual([1])
  })
})

describe('validateCombination', () => {
  it('flags a combination that overflows the 12-column grid', () => {
    expect(validateCombination(3, 12)).toMatch(/invalid/i)
  })

  it('is symmetric — flags the overflow regardless of argument order', () => {
    expect(validateCombination(12, 3)).toMatch(/invalid/i)
  })

  it('allows a combination that fits exactly', () => {
    expect(validateCombination(3, 10)).toBe(true)
  })

  it('allows a combination that fills the whole grid', () => {
    expect(validateCombination(1, 12)).toBe(true)
  })

  it('passes through when span is not yet set', () => {
    expect(validateCombination(3, undefined)).toBe(true)
  })

  it('passes through when start is not yet set', () => {
    expect(validateCombination(undefined, 5)).toBe(true)
  })
})
