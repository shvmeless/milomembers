// DATA
export const DATA_DOCUMENTS = [
  'Rut',
  'Pasaporte',
] as const

// TYPES
export type DataDocument = typeof DATA_DOCUMENTS[number]
