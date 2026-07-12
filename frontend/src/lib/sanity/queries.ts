import { defineQuery } from 'next-sanity'

const linkFragment = `
  label,
  url
`

const mediaFragment = `
  ...select(
    variant == "image" => {
      "image": image.asset-> {
        altText,
        "height": metadata.dimensions.height,
        url,
        "width": metadata.dimensions.width,
      }
    },
    variant == "video" => {
      video {
        description,
        source
      }
    }
  )
`

export const CASE_STUDY_QUERY = defineQuery(
  `*[_type == "caseStudy" && slug.current == $slug][0]{
    hero {
      ${mediaFragment}
    },
    links[] {
      ${linkFragment}
    },
    name,
    roles,
    tagline,
    timeline,
    tools
  }`
)
