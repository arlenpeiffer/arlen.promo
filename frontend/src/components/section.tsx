import { type ComponentProps } from 'react'

import { Figure, type FigureType } from '@/components/figure'
import { Grid, type GridType } from '@/components/grid'
import { Media } from '@/components/media'
import { type Spacing } from '@/lib/sanity/types'

type SectionContentFigure = { variant: 'figure'; figure: FigureType | null }
type SectionContentGrid = { variant: 'grid'; grid: GridType | null }

export type SectionType = {
  content: SectionContentFigure | SectionContentGrid | null
  spacing: Spacing | null
}

type SectionProps = ComponentProps<'div'> & {
  section: SectionType
}

export function Section({ section, ...props }: SectionProps) {
  return (
    <div {...props}>
      {section.content?.variant === 'figure' && section.content.figure?.media && (
        <Figure caption={section.content.figure.caption}>
          <Media media={section.content.figure.media} />
        </Figure>
      )}
      {section.content?.variant === 'grid' && section.content.grid && (
        <Grid grid={section.content.grid} />
      )}
    </div>
  )
}
