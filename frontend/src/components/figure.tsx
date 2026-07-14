import { type ComponentProps } from 'react'

import { type MediaType } from '@/components/media'

export type FigureType = {
  caption: string | null
  media: MediaType | null
}

type FigureProps = ComponentProps<'figure'> & {
  caption?: string | null
}

export function Figure({ caption, children, ...props }: FigureProps) {
  return (
    <figure {...props}>
      {children}
      {caption && <figcaption>{caption}</figcaption>}
    </figure>
  )
}
