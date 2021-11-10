
import Jobs from './components/Jobs'
import StyledContainer from './styled/StyledContainer'
import GlobalStyle from './styled/GlobalStyle'
import { ThemeProvider } from 'styled-components'
import Header from './components/Header'

const theme = {
  mobile: '768px'
}


function App() {
  return (
   
    <ThemeProvider theme={theme}>

   <GlobalStyle />
    <Header />
    
    <StyledContainer>
     <Jobs />
    </StyledContainer>

    </ThemeProvider>
  );
}

export default App;
