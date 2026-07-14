import NextLink from 'next/link'
import { type ComponentProps } from 'react'

type LinkProps = Omit<ComponentProps<typeof NextLink>, 'href'> & {
  url?: string | null
}

export function Link({ children, className, url, ...props }: LinkProps) {
  if (!url) return <span className={className}>{children}</span>

  return (
    <NextLink href={url} className={className} {...props}>
      {children}
    </NextLink>
  )
}
