// IMPORTS
import { type Member } from '../contexts/members/membersInterface'

// FUNCTION
export function copyColumn (items: Member[], column: keyof Member): void {

  const copyText = items.map((item) => item[column]).join('\n')

  navigator.clipboard.writeText(copyText)
    .catch((error) => { console.error(error) })

}

// FUNCTION
export function copyRow (row: Member): void {

  const copyText = Object.entries(row)
    .filter(([key]) => key !== 'id')
    .map(([, value]) => {

      if (typeof value === 'string') return value
      if (typeof value === 'number') return value.toString()
      if (typeof value === 'boolean') return (value) ? '1' : '0'

      return ''

    }).join('\t')

  navigator.clipboard.writeText(copyText)
    .catch((error) => { console.error(error) })

}

// FUNCTION
export function copyTable (items: Member[]): void {

  const copyText = items.map((item) => {

    return Object.entries(item)
      .filter(([key]) => key !== 'id')
      .map(([, value]) => {

        if (typeof value === 'string') return value
        if (typeof value === 'number') return value.toString()
        if (typeof value === 'boolean') return (value) ? '1' : '0'

        return ''

      }).join('\t')

  }).join('\n')

  navigator.clipboard.writeText(copyText)
    .catch((error) => { console.error(error) })

}
