// DATA
export const DATA_GENRES = [
  'Masculino',
  'Femenino',
] as const

// TYPES
export type DataGenre = typeof DATA_GENRES[number]
