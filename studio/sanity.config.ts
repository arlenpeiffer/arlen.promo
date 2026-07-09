import { visionTool } from '@sanity/vision'
import { defineConfig } from 'sanity'
import { media, mediaAssetSource } from 'sanity-plugin-media'
import { muxInput } from 'sanity-plugin-mux-input'
import { structureTool } from 'sanity/structure'

import { schemaTypes } from './schemaTypes'

export default defineConfig({
  title: 'arlen.promo',
  projectId: 'axnfnnl3',
  dataset: 'production',
  plugins: [structureTool(), visionTool(), media(), muxInput()],
  form: {
    image: {
      assetSources: () => [mediaAssetSource]
    }
  },
  schema: {
    types: schemaTypes
  }
})
