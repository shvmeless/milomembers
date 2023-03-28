// IMPORTS
import { membersValidations } from './membersValidations'
import { type Member } from './membersInterface'

// FUNCTION
export function createMember (member: Member): Member {

  if (!membersValidations.rut(member.document)) throw new Error('')
  if (!membersValidations.generic(member.fatherLastName)) throw new Error('')
  if (!membersValidations.generic(member.motherLastName)) throw new Error('')
  if (!membersValidations.generic(member.names)) throw new Error('')
  if (!membersValidations.date(member.birth)) throw new Error('')
  if (!membersValidations.email(member.email)) throw new Error('')
  if (!membersValidations.phone(member.phone)) throw new Error('')
  if (!membersValidations.generic(member.altSchool)) throw new Error('')
  if (!membersValidations.generic(member.club)) throw new Error('')
  if (!membersValidations.generic(member.contactName)) throw new Error('')
  if (!membersValidations.phone(member.contactPhone)) throw new Error('')
  if (!membersValidations.email(member.contactEmail)) throw new Error('')
  if (!membersValidations.generic(member.ticket)) throw new Error('')
  if (!membersValidations.generic(member.note)) throw new Error('')
  if (!membersValidations.generic(member.number)) throw new Error('')

  if (
    member.institutionType === 'Colegio' &&
    member.school === ''
  ) throw new Error('')

  if (
    member.institutionType === 'Colegio' &&
    member.school === 'Otro' &&
    member.altSchool === ''
  ) throw new Error('')

  if (
    member.institutionType === 'Colegio' &&
    member.club !== ''
  ) throw new Error('')

  if (
    member.institutionType === 'Club Deportivo' &&
    member.club === ''
  ) throw new Error('')

  if (
    member.institutionType === 'Club Deportivo' &&
    member.school !== ''
  ) throw new Error('')

  if (
    member.institutionType === 'Club Deportivo' &&
    member.altSchool !== ''
  ) throw new Error('')

  return { ...member }

}
