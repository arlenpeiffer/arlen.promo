import { type ComponentProps } from 'react'

import { type MediaType } from '@/components/media'

export type FigureType = {
  caption: Nullable<string>
  media: Nullable<MediaType>
}

type FigureProps = ComponentProps<'figure'> & {
  caption?: Nullable<string>
}

export function Figure({ caption, children, ...props }: FigureProps) {
  return (
    <figure {...props}>
      {children}
      {caption && <figcaption>{caption}</figcaption>}
    </figure>
  )
}
