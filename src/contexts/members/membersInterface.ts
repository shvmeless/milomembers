// IMPORTS
import { type DataInstitution } from '../../data/institutions'
import { type DataCountry } from '../../data/countries'
import { type DataDocument } from '../../data/document'
import { type DataSchool } from '../../data/schools'
import { type DataGenre } from '../../data/genres'
import { type DataSize } from '../../data/sizes'

// INTERFACE
export interface Member {
  id?: string
  countryOrigin: DataCountry
  countryIssuer: DataCountry
  documentType: DataDocument
  document: string
  fatherLastName: string
  motherLastName: string
  names: string
  genre: DataGenre
  birth: string
  email: string
  phone: string
  institutionType: DataInstitution
  school: DataSchool
  altSchool: string
  club: string
  shirtSize: DataSize
  contactName: string
  contactPhone: string
  contactEmail: string
  acceptTerms: boolean
  acceptPrivacy: boolean
  acceptNewsletter: boolean
  ticket: string
  note: string
  number: string
}

// CONST
export const MEMBER_DEFAULT: Member = {
  countryOrigin: 'Chile',
  countryIssuer: 'Chile',
  documentType: 'Rut',
  document: '',
  fatherLastName: '',
  motherLastName: '',
  names: '',
  genre: 'Masculino',
  birth: '',
  email: '',
  phone: '',
  institutionType: 'Colegio',
  school: 'Otro',
  altSchool: '',
  club: '',
  shirtSize: 'S',
  contactName: '',
  contactPhone: '',
  contactEmail: '',
  acceptTerms: true,
  acceptPrivacy: true,
  acceptNewsletter: true,
  ticket: '',
  note: '',
  number: '',
}

// CONST
export const MEMBER_DESCRIPTIONS: Record<keyof Member, string> = {
  id: 'Id',
  countryOrigin: 'País de Origen',
  countryIssuer: 'País de Emisión',
  documentType: 'Tipo de Documento',
  document: 'Rut/Dni',
  fatherLastName: 'Apellido Paterno',
  motherLastName: 'Apellido Materno',
  names: 'Nombre',
  genre: 'Género',
  birth: 'Fecha de Nacimiento',
  email: 'Correo Electrónico',
  phone: 'Teléfono',
  institutionType: 'Tipo de Institución',
  school: 'Nombre del Colegio',
  altSchool: 'Otro Nombre de Colegio',
  club: 'Nombre del Club',
  shirtSize: 'Talla de Polera',
  contactName: 'Nombre de Contacto',
  contactPhone: 'Teléfono de Contacto',
  contactEmail: 'Correo Electrónico de Contacto',
  acceptTerms: 'Términos y Condiciones',
  acceptPrivacy: 'Política de Privacidad',
  acceptNewsletter: 'Suscripción a Boletín',
  ticket: 'Ticket',
  note: 'Nota',
  number: 'Número',
}

// // CONST
// export const MEMBER_NAMES: Record<keyof Member, string> = {
//   id: 'Id',
//   countryOrigin: 'País De Origen',
//   countryIssuer: 'País Emisor',
//   documentType: 'Tipo',
//   document: 'Rut/Dni/Pasaporte',
//   fatherLastName: 'Apellido Paterno',
//   motherLastName: 'Apellido Materno',
//   names: 'Nombres',
//   genre: 'Género',
//   birth: 'Fecha Nacimiento',
//   email: 'E-mail',
//   phone: 'Teléfono Móvil',
//   institutionType: 'Institución A La Que Pertenece',
//   school: 'Nombre Del Colegio',
//   altSchool: 'Indique Nombre Del Colegio',
//   club: 'Nombre Del Club',
//   shirtSize: 'Talla De Polera',
//   contactName: 'Nombre De Contacto',
//   contactPhone: 'Teléfono De Contacto',
//   contactEmail: 'Email Del Contacto',
//   acceptTerms: 'Acepto Las <a Target=" Blank" Href="https://corridasmilo.cl/wp-content/uploads/2023/03/Bases-Tour-Corridas-MILO-2023-21.03.2023.pdf ">bases Y Condiciones</a>',
//   acceptPrivacy: 'Acepto El Acepto Las <a Target=" Blank" Href="https://corridasmilo.cl/wp-content/uploads/2023/03/privacy Policy Chile.pdf">aviso De Privacidad </a>',
//   acceptNewsletter: 'Acepto Recibir Comunicaciones De NESTLÉ® Y Sus Marcas',
//   ticket: 'Ticket',
//   note: 'Nota Interna',
//   number: 'Número',
// }
