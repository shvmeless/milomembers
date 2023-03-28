// DATA
export const DATA_INSTITUTIONS = [
  'Colegio',
  'Club Deportivo',
] as const

// TYPE
export type DataInstitution = typeof DATA_INSTITUTIONS[number]
