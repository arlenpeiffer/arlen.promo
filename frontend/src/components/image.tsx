import { Image as NextSanityImage } from 'next-sanity/image'
import { type ComponentProps } from 'react'

export type ImageType = {
  altText: Nullable<string>
  height: Nullable<number>
  url: Nullable<string>
  width: Nullable<number>
}

export type ImageProps = Omit<
  ComponentProps<typeof NextSanityImage>,
  'alt' | 'height' | 'src' | 'width'
> & {
  image: ImageType
}

export function Image({ image, ...props }: ImageProps) {
  if (!image.url || image.width == null || image.height == null) return null

  return (
    <NextSanityImage
      src={image.url}
      alt={image.altText || ''}
      width={image.width}
      height={image.height}
      {...props}
    />
  )
}
