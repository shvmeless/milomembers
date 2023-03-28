// IMPORTS
import { MEMBER_DEFAULT, MEMBER_DESCRIPTIONS } from '../../../contexts/members/membersInterface'
import { membersValidations } from '../../../contexts/members/membersValidations'
import { MemberContext } from '../../../contexts/members/membersContext'
import { CommonContext } from '../../../contexts/common/commonContext'
import { DATA_INSTITUTIONS } from '../../../data/institutions'
import { DATA_COUNTRIES } from '../../../data/countries'
import { DATA_DOCUMENTS } from '../../../data/document'
import { DATA_TICKETS } from '../../../data/tickets'
import { DATA_SCHOOLS } from '../../../data/schools'
import { DATA_GENRES } from '../../../data/genres'
import css from './MemberCreatorForm.module.scss'
import { useForm } from '../../../hooks/useForm'
import { DATA_SIZES } from '../../../data/sizes'
import { classes } from '../../../utils/common'
import Select from '../../forms/Select/Select'
import Submit from '../../forms/Submit/Submit'
import { useContext, useEffect } from 'react'
import Label from '../../forms/Label/Label'
import Input from '../../forms/Input/Input'
import { v4 as uuid } from 'uuid'
import Hr from '../../forms/Hr/Hr'
import { createMember } from '../../../contexts/members/membersHelper'

// COMPONENT
export default function MemberCreatorForm (props: {
  className?: string
}): JSX.Element {

  // PROPS
  const { className } = props

  // CONTEXT
  const { addMember } = useContext(MemberContext)
  const { setLastCreatedMember } = useContext(CommonContext)

  // STATE
  const { form, updateForm, resetForm } = useForm(MEMBER_DEFAULT)

  // EFFECT
  useEffect(() => {

    const formCopy = { ...form }

    if (formCopy.institutionType === 'Club Deportivo') formCopy.school = 'Otro'
    if (form.institutionType !== 'Colegio' || form.school !== 'Otro') formCopy.altSchool = ''
    if (form.institutionType !== 'Club Deportivo') formCopy.club = ''

    updateForm(formCopy)

  }, [form.institutionType, form.school])

  // HANDLER
  const onSubmit = (event: React.FormEvent<HTMLFormElement>): void => {
    event.preventDefault()
    try {

      const newMember = createMember({ ...form, id: uuid() })
      addMember(newMember)
      setLastCreatedMember(newMember)

      resetForm()

    } catch (error) { console.error(error) }
  }

  // RETURN
  return <form className={classes(css.MemberCreatorForm, className)} onSubmit={onSubmit}>

    <Label text={MEMBER_DESCRIPTIONS.countryOrigin}>
      <Select choices={[...DATA_COUNTRIES]} value={form.countryOrigin} callback={(value) => { updateForm({ countryOrigin: value }) }}/>
    </Label>

    <Label text={MEMBER_DESCRIPTIONS.countryIssuer}>
      <Select choices={[...DATA_COUNTRIES]} value={form.countryIssuer} callback={(value) => { updateForm({ countryIssuer: value }) }}/>
    </Label>

    <Hr className={css.separator}/>

    <Label text={MEMBER_DESCRIPTIONS.documentType}>
      <Select choices={[...DATA_DOCUMENTS]} value={form.documentType} callback={(value) => { updateForm({ documentType: value }) }}/>
    </Label>

    <Label text={MEMBER_DESCRIPTIONS.document}>
      <Input value={form.document} callback={(value) => { updateForm({ document: value }) }} error={!membersValidations.rut(form.document)}/>
    </Label>

    <Label text={MEMBER_DESCRIPTIONS.fatherLastName}>
      <Input value={form.fatherLastName} callback={(value) => { updateForm({ fatherLastName: value }) }} error={!membersValidations.generic(form.fatherLastName)}/>
    </Label>

    <Label text={MEMBER_DESCRIPTIONS.motherLastName}>
      <Input value={form.motherLastName} callback={(value) => { updateForm({ motherLastName: value }) }} error={!membersValidations.generic(form.motherLastName)}/>
    </Label>

    <Label text={MEMBER_DESCRIPTIONS.names}>
      <Input value={form.names} callback={(value) => { updateForm({ names: value }) }} error={!membersValidations.generic(form.names)}/>
    </Label>

    <Label text={MEMBER_DESCRIPTIONS.genre}>
      <Select choices={[...DATA_GENRES]} value={form.genre} callback={(value) => { updateForm({ genre: value }) }}/>
    </Label>

    <Label text={MEMBER_DESCRIPTIONS.birth}>
      <Input value={form.birth} callback={(value) => { updateForm({ birth: value }) }} error={!membersValidations.date(form.birth)}/>
    </Label>

    <Hr className={css.separator}/>

    <Label text={MEMBER_DESCRIPTIONS.email}>
      <Input value={form.email} callback={(value) => { updateForm({ email: value }) }} error={!membersValidations.email(form.email)}/>
    </Label>

    <Label text={MEMBER_DESCRIPTIONS.phone}>
      <Input value={form.phone} callback={(value) => { updateForm({ phone: value }) }} error={!membersValidations.phone(form.phone)}/>
    </Label>

    <Hr className={css.separator}/>

    <Label text={MEMBER_DESCRIPTIONS.institutionType}>
      <Select choices={[...DATA_INSTITUTIONS]} value={form.institutionType} callback={(value) => { updateForm({ institutionType: value }) }}/>
    </Label>

    <Label text={MEMBER_DESCRIPTIONS.school}>
      <Select choices={[...DATA_SCHOOLS]} value={form.school} callback={(value) => { updateForm({ school: value }) }} disabled={form.institutionType !== 'Colegio'}/>
    </Label>

    <Label text={MEMBER_DESCRIPTIONS.altSchool}>
      <Input value={form.altSchool} callback={(value) => { updateForm({ altSchool: value }) }} error={!membersValidations.generic(form.altSchool)} disabled={form.institutionType !== 'Colegio' || form.school !== 'Otro'}/>
    </Label>

    <Label text={MEMBER_DESCRIPTIONS.club}>
      <Input value={form.club} callback={(value) => { updateForm({ club: value }) }} error={!membersValidations.generic(form.club)} disabled={form.institutionType !== 'Club Deportivo'}/>
    </Label>

    <Hr className={css.separator}/>

    <Label text={MEMBER_DESCRIPTIONS.contactName}>
      <Input value={form.contactName} callback={(value) => { updateForm({ contactName: value }) }} error={!membersValidations.generic(form.contactName)}/>
    </Label>

    <Label text={MEMBER_DESCRIPTIONS.contactPhone}>
      <Input value={form.contactPhone} callback={(value) => { updateForm({ contactPhone: value }) }} error={!membersValidations.phone(form.contactPhone)}/>
    </Label>

    <Label text={MEMBER_DESCRIPTIONS.contactEmail}>
      <Input value={form.contactEmail} callback={(value) => { updateForm({ contactEmail: value }) }} error={!membersValidations.email(form.contactEmail)}/>
    </Label>

    <Hr className={css.separator}/>

    <Label text={MEMBER_DESCRIPTIONS.shirtSize}>
      <Select choices={[...DATA_SIZES]} value={form.shirtSize} callback={(value) => { updateForm({ shirtSize: value }) }}/>
    </Label>

    <Label text={MEMBER_DESCRIPTIONS.ticket}>
      <Select choices={[...DATA_TICKETS]} value={form.ticket} callback={(value) => { updateForm({ ticket: value }) }}/>
    </Label>

    <Hr className={css.separator}/>

    <Submit className={css.submit} text='Agregar'/>

  </form>

}
