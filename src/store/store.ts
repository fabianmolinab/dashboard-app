import { combineReducers, compose, createStore } from 'redux'
import { formReducer } from '../reducers/formReducer'

const composeEnhancers =
  (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

const reducers = combineReducers({
  form: formReducer
})

export const store = createStore(reducers, composeEnhancers())

export type RootState = ReturnType<typeof store.getState>;
export type AppDispach = typeof store.dispatch;
