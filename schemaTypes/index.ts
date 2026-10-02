import { type SchemaTypeDefinition } from 'sanity'

// Objects (Primitives)
import { hexColor } from './objects/hexColor'

// Documents
import { leadStatus } from './documents/leadStatus'

// Emirate Hub Public Website Schemas
import { emirateSchemas } from './emirate'

export const schemaTypes: SchemaTypeDefinition[] = [
  // Primitive Objects
  hexColor,

  // CRM Pipeline Stages
  leadStatus,

  // Emirate Hub Public Frontend Schemas
  ...emirateSchemas,
]

