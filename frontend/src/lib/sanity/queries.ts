import { defineQuery } from 'next-sanity'

const mediaFragment = `
  ...select(
    variant == "image" => {
      "variant": "image",
      "image": image.asset-> {
        altText,
        "height": metadata.dimensions.height,
        url,
        "width": metadata.dimensions.width,
      }
    },
    variant == "video" => {
      "variant": "video",
      video {
        description,
        source
      }
    }
  )
`

const figureFragment = `
  caption,
  media {
    ${mediaFragment}
  }
`

export const CASE_STUDY_QUERY = defineQuery(
  `*[_type == "caseStudy" && slug.current == $slug][0]{
    hero {
      ${mediaFragment}
    },
    links[] {
      label,
      url
    },
    name,
    roles,
    sections[] {
      content {
        ...select(
          variant == "figure" => {
            "variant": "figure",
            figure {
              ${figureFragment}
            }
          },
          variant == "grid" => {
            "variant": "grid",
            grid {
              caption,
              cells[] {
                content {
                  ...select(
                    variant == "copyBlock" => {
                      "variant": "copyBlock",
                      copyBlock {
                        body,
                        heading
                      },
                    },
                    variant == "figure" => {
                      "variant": "figure",
                      figure {
                        ${figureFragment}
                      },
                    }
                  )
                },
                placement
              }
            }
          }
        )
      },
      spacing
    },
    tagline,
    timeline,
    tools
  }`
)
