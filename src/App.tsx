import { FC, StrictMode } from 'react'
import { AppRouter } from './routers/AppRouter'
import { GlobalStyle } from './styles/GlobalStyles'

const App: FC = () => {
  return (
    <StrictMode>
      <GlobalStyle />
      <AppRouter />
    </StrictMode>
  )
}

export default App
