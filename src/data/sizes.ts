// DATA
export const DATA_SIZES = [
  '8',
  '10',
  '12',
  '14',
  'S',
  'M',
  'L',
] as const

// TYPE
export type DataSize = typeof DATA_SIZES[number]
