import Button from '@mui/material/Button';
import logo from './assets/logo.png'
import { AppContainer, ButtonContainer, ImgLogo, InfosContainer, MiddleContainer, SubTitle } from './styled'
import circular from './assets/economia-circular.png'
import Header from './components/Header/Header';
import { useHistory } from 'react-router-dom';
import { goToSignUp } from './router/coordinator';

function App() {
  const history = useHistory()

  const buttonAction = () => {
    goToSignUp(history)
  }

  return (
    <AppContainer>
      <Header/>
      <ImgLogo src={logo} />
      <SubTitle>
        <h1>ser elegante é ajudar o <u>mundo</u>. </h1>
        <h6>CATALOGUE, COMPARTILHE, CUIDE DE SUAS ROUPAS E DO NOSSO PLANETA!</h6>
      </SubTitle>
      <ButtonContainer>
        <Button variant="contained" color="success" onClick={() => buttonAction()} >Cadastre-se</Button>
      </ButtonContainer>


      <MiddleContainer>
        <h3>procurando uma roupa para festa?</h3>
        <h1>Você sabia que 50% - 80% das roupas de festa são usadas apenas UMA vez?</h1>
      </MiddleContainer>
      <InfosContainer>
        <h6>O planeta é circular!
          Por que nossas roupas não?
        </h6>
        <p>
          Compartilhe, alugue, venda, troque (monetize sua roupas) ou mesmo contrate serviços de reparo, lavanderia, reciclagem,
          doação e muito mais. Somos uma comunidade que disse basta! ao Fast Fashion e faz crescer uma economia colaborativa, da
          troca entre pessoas e que ressignifica a sua roupa. Cadastre-se gratuitamente e participe.
        </p>
        <img src={circular}/>
      </InfosContainer>
      <>
        Produtos
      </>

    </AppContainer>


  );
}

export default App;
