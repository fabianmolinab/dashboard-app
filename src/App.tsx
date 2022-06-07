import React, { StrictMode } from 'react'
import { Provider } from 'react-redux'
import { AppRouter } from './routers/AppRouter'
import { store } from './store/store'
import { GlobalStyle } from './styles/GlobalStyles'

const App: React.FC = () => {
  return (
    <Provider store={store}>
      <StrictMode>
        <GlobalStyle />
        <AppRouter />
      </StrictMode>
    </Provider>
  )
}

export default App
