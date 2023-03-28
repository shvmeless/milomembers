// MODULE
export const membersValidations = {

  // FUNCTION
  generic: (value: string): boolean => {

    if (value.startsWith(' ')) return false
    if (value.endsWith(' ')) return false

    const regex = /[ ]{2,}/g
    if (regex.test(value)) return false

    return true

  },

  // FUNCTION
  rut: (rut: string): boolean => {

    const regex = /^[1-9][0-9]{7}[-][0-9K]$/
    if (!regex.test(rut)) return false

    const [number, dv] = rut.split('-')

    let sum = 0
    let multiplier = 2
    for (let i = number.length - 1; i >= 0; i--) {
      sum += Number(number[i]) * multiplier
      multiplier = multiplier === 7 ? 2 : multiplier + 1
    }
    const dvExpected = 11 - (sum % 11)
    const dvCalculated = dvExpected === 11 ? '0' : dvExpected === 10 ? 'K' : dvExpected.toString()

    return dvCalculated === dv

  },

  // FUNCTION
  date: (date: string): boolean => {

    const regex = /^[0-9]{1,2}[/][0-9]{1,2}[/][0-9]{4}$/
    if (!regex.test(date)) return false

    const splitted = date.split('/')
    const day = Number(splitted[0])
    const month = Number(splitted[1])
    const year = Number(splitted[2])

    const newDate = new Date(`${year}-${month}-${day} UTC`)
    if (isNaN(newDate.getTime())) return false
    if (newDate.getTime() > Date.now()) return false

    return true

  },

  // FUNCTION
  email: (email: string): boolean => {

    const regex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/
    if (regex.test(email)) return true

    return false

  },

  // FUNCTION
  phone: (phone: string): boolean => {

    const regex = /^[9]{1}[0-9]{8}$/
    if (regex.test(phone)) return true

    return false

  },

}
