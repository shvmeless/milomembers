// IMPORTS
import { type Member } from './membersInterface'

// DATABASE
const databaseName = 'milo-registrations'

// DATABASE
export const membersDatabase = {

  // FUNCTION
  read (): Member[] {

    const item = localStorage.getItem(databaseName)
    const database = item === null ? [] : JSON.parse(item) as Member[]

    return database

  },

  // FUNCTION
  write (items: Member[]): void {

    const database = items

    localStorage.setItem(databaseName, JSON.stringify(database))

  },

}
