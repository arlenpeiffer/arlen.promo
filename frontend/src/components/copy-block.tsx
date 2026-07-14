import { type InferComponents, PortableText } from '@portabletext/react'
import { type ComponentProps } from 'react'

import { Link } from '@/components/link'
import { type CopyBlock } from '@/lib/sanity/types'

export type CopyBlockType = {
  body: CopyBlock['body'] | null
  heading: string | null
}

type CopyBlockProps = ComponentProps<'div'> & {
  copyBlock: CopyBlockType
}

const components: InferComponents<NonNullable<CopyBlock['body']>> = {
  marks: {
    strong: ({ children }) => <strong className="font-bold">{children}</strong>,
    em: ({ children }) => <em className="italic">{children}</em>,
    link: ({ children, value }) => <Link url={value?.url}>{children}</Link>
  }
}

export function CopyBlock({ copyBlock, ...props }: CopyBlockProps) {
  return (
    <div {...props}>
      {copyBlock.heading && <h2>{copyBlock.heading}</h2>}
      {copyBlock.body && <PortableText value={copyBlock.body} components={components} />}
    </div>
  )
}
