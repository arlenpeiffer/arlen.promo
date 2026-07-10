import { visionTool } from '@sanity/vision'
import { defineConfig } from 'sanity'
import { media, mediaAssetSource } from 'sanity-plugin-media'
import { muxInput } from 'sanity-plugin-mux-input'
import { structureTool } from 'sanity/structure'

import { LOCKED_DOCUMENT_IDS, type DocumentTypeName } from '@/lib/constants'
import { schemaTypes } from '@/schemaTypes'
import { structure } from '@/structure'

export default defineConfig({
  title: 'arlen.promo',
  projectId: 'axnfnnl3',
  dataset: 'production',
  plugins: [structureTool({ structure }), visionTool(), media(), muxInput()],
  form: {
    image: {
      assetSources: () => [mediaAssetSource]
    }
  },
  schema: {
    types: schemaTypes
  },
  document: {
    actions: (prev, context) =>
      LOCKED_DOCUMENT_IDS.includes(context.schemaType as DocumentTypeName)
        ? prev.filter(({ action }) => action !== 'delete' && action !== 'duplicate')
        : prev,
    newDocumentOptions: (prev, context) =>
      context.creationContext.type === 'global'
        ? prev.filter((item) => !LOCKED_DOCUMENT_IDS.includes(item.templateId as DocumentTypeName))
        : prev
  }
})
