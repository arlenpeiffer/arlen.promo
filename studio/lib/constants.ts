import { documents } from '../schemaTypes/documents'

export type DocumentTypeName = (typeof documents)[number]['name']

// Document ids which:
// - cannot be created in the 'new document' menu
// - cannot be duplicated, unpublished or deleted
export const LOCKED_DOCUMENT_IDS: readonly DocumentTypeName[] = [
  'aboutPage',
  'contactPage',
  'homePage'
]
