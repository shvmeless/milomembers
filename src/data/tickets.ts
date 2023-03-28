// DATA
export const DATA_TICKETS = [
  '3K',
  '5K',
] as const

// TYPE
export type DataTicket = typeof DATA_TICKETS[number]
