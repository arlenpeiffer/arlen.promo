import { type ComponentProps } from 'react'

import { Cell, type CellType } from '@/components/cell'
import { Figure } from '@/components/figure'
import { cn } from '@/lib/utils'

export type GridType = {
  caption: string | null
  cells: CellType[] | null
}

type GridProps = ComponentProps<'div'> & {
  grid: GridType
}

export function Grid({ className, grid, ...props }: GridProps) {
  if (!grid.cells?.length) return null

  const markup = (
    <div className={cn('grid grid-cols-12 gap-8 px-8 lg:px-16', className)} {...props}>
      {grid.cells.map((cell, i) => (
        <Cell key={i} cell={cell} />
      ))}
    </div>
  )

  return grid.caption ? <Figure caption={grid.caption}>{markup}</Figure> : markup
}
