import { CopyBlock, type CopyBlockType } from '@/components/copy-block'
import { Figure, type FigureType } from '@/components/figure'
import { Media } from '@/components/media'
import { type Placement } from '@/lib/sanity/types'
import { cn } from '@/lib/utils'

type CellContentCopyBlock = { variant: 'copyBlock'; copyBlock: Nullable<CopyBlockType> }
type CellContentFigure = { variant: 'figure'; figure: Nullable<FigureType> }

export type CellType = {
  content: Nullable<CellContentCopyBlock | CellContentFigure>
  placement: Nullable<Placement>
}

type CellProps = {
  cell: CellType
}

export function Cell({ cell }: CellProps) {
  const { base, large, medium } = cell.placement ?? {}

  const placementClasses = cn(
    base?.start && base.span && `col-start-${base.start} col-span-${base.span}`,
    medium?.start && medium.span && `md:col-start-${medium.start} md:col-span-${medium.span}`,
    large?.start && large.span && `lg:col-start-${large.start} lg:col-span-${large.span}`
  )

  if (cell.content?.variant === 'copyBlock' && cell.content.copyBlock) {
    return <CopyBlock copyBlock={cell.content.copyBlock} className={placementClasses} />
  }

  if (cell.content?.variant === 'figure' && cell.content.figure?.media) {
    return (
      <Figure caption={cell.content.figure.caption} className={placementClasses}>
        <Media media={cell.content.figure.media} />
      </Figure>
    )
  }

  return null
}
