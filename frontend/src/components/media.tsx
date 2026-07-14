import { Image, type ImageProps, type ImageType } from '@/components/image'
import { Video, type VideoType } from '@/components/video'

type MediaImage = { variant: 'image'; image: ImageType | null }
type MediaVideo = { variant: 'video'; video: VideoType | null }

export type MediaType = MediaImage | MediaVideo

type MediaProps = Pick<ImageProps, 'preload'> & {
  className?: string
  media: MediaType
}

export function Media({ className, media, preload }: MediaProps) {
  if (media.variant === 'image' && media.image) {
    return <Image image={media.image} className={className} preload={preload} />
  }

  if (media.variant === 'video' && media.video) {
    return <Video video={media.video} className={className} />
  }

  return null
}
