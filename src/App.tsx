import { StrictMode } from 'react'
import { AppRouter } from './routers/AppRouter'
import { GlobalStyle } from './styles/GlobalStyles'

const App = () => {
  return (
    <StrictMode>
      <GlobalStyle />
      <AppRouter />
    </StrictMode>
  )
}

export default App
