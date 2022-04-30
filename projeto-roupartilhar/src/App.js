import Button from '@mui/material/Button';
import logo from './assets/logo.png'
import { AppContainer, ImgLogo, InfosContainer, SubTitle } from './styled'

function App() {
  // goToSignUp(e){

  // }
  return (
    <AppContainer>
      <ImgLogo src={logo} />
      <SubTitle>
        <h1>ser elegante é ajudar o <u>mundo</u>. </h1>
        <h5>CATALOGUE, COMPARTILHE, CUIDE DE SUAS ROUPAS E DO NOSSO PLANETA!</h5>
      </SubTitle>
      
      <Button variant="contained" color="success" >Cadastre-se</Button>

      <InfosContainer>
        <h1>O que somos?</h1>
      </InfosContainer>
    </AppContainer>


  );
}

export default App;
