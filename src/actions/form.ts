import { types } from '../types/types'

export const setError = (err: string) => ({
  type: types.formSetError,
  payload: err
})

export const removeError = () => ({
  type: types.formRemoveError
})
