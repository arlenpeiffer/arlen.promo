'use client'

import MuxPlayer from '@mux/mux-player-react/lazy'
import { type ComponentProps } from 'react'

import { type MuxVideo } from '@/lib/sanity/types'

export type VideoType = {
  description: Nullable<string>
  source: Nullable<MuxVideo>
}

type VideoProps = ComponentProps<typeof MuxPlayer> & {
  video: VideoType
}

// oxlint-disable-next-line no-unused-vars
export function Video({ video, ...props }: VideoProps) {
  return <MuxPlayer {...props} />
}
