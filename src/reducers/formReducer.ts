import { types } from '../types/types'

interface InitialStateType {
  loading: boolean
  msgError: string
}

interface FormReducerAction {
  type: '[Form] Set Error' | '[Form] Remove Error'
  payload: {
    state: InitialStateType
    msgError: string
  }
}

const initialState: InitialStateType = {
  loading: false,
  msgError: ''
}

export const formReducer = (state = initialState, action: FormReducerAction) => {
  switch (action.type) {
    case types.formSetError:
      return {
        ...state,
        msgError: action.payload
      }

    case types.formRemoveError:
      return {
        ...state,
        msgError: ''
      }

    default:
      return state
  }
}
