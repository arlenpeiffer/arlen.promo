import path from 'path'

import { defineCliConfig } from 'sanity/cli'

export default defineCliConfig({
  api: {
    projectId: 'axnfnnl3',
    dataset: 'production'
  },
  deployment: {
    /**
     * Enable auto-updates for studios.
     * Learn more at https://www.sanity.io/docs/studio/latest-version-of-sanity#k47faf43faf56
     */
    autoUpdates: true
  },
  schemaExtraction: {
    enabled: true
  },
  typegen: {
    path: '../frontend/src/lib/sanity/queries.ts',
    generates: '../frontend/src/lib/sanity/types.ts',
    overloadClientMethods: false
  },
  vite: {
    resolve: {
      alias: {
        '@': path.resolve(__dirname, '.')
      }
    }
  }
})
