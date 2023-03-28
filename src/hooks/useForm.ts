// IMPORTS
import { useState } from 'react'

// HOOK
export function useForm <T extends Record<string, any>> (init: T): {
  form: T
  updateForm: (update: Partial<T>) => void
  resetForm: () => void
} {

  // STATE
  const [form, setForm] = useState(init)

  // FUNCTION
  const updateForm = (update: Partial<T>): void => {
    setForm({
      ...form,
      ...update,
    })
  }

  // FUNCTION
  const resetForm = (): void => {
    setForm(init)
  }

  // RETURN
  return { form, updateForm, resetForm }

}
