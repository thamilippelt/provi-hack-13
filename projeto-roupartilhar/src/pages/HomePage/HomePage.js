import { useHistory } from 'react-router-dom';
import Button from '@mui/material/Button';
import logo from '../../assets/logo.png'
import { ButtonContainer, ImgLogo, InfosContainer, MiddleContainer, SubTitle, SubTitleText, ImgSubText, ProductSection } from './styled'
import { goToSignUp } from '../../router/coordinator';
import imgUm from '../../assets/01.png'
import imgDois from '../../assets/02.png'
import roupaUm from '../../assets/roupa1.jpeg'
import roupaDois from '../../assets/roupa2.jpeg'
import roupaTres from '../../assets/roupa3.jpeg'
import roupaQuatro from '../../assets/roupa4.jpeg'
import roupaCinco from '../../assets/roupa5.jpeg'



function HomePage() {
    const history = useHistory()

    const buttonAction = () => {
        goToSignUp(history)
    }
    return (
        <>
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
            <>
                <SubTitleText>
                    <h2>O planeta é circular!
                        Por que nossas roupas não?
                    </h2>
                </SubTitleText>
                <InfosContainer>
                    <p>
                        Compartilhe, alugue, venda, troque (monetize sua roupas) ou mesmo contrate serviços de reparo, lavanderia, reciclagem,
                        doação e muito mais. Somos uma comunidade que disse basta! ao Fast Fashion e faz crescer uma economia colaborativa, da
                        troca entre pessoas e que ressignifica a sua roupa. Cadastre-se gratuitamente e participe.
                    </p>
                    <ImgSubText src={imgUm} />
                </InfosContainer>
                <SubTitleText>
                    <h2>
                        Quem somos:
                    </h2>
                </SubTitleText>
                <InfosContainer>
                    <p>
                        Somos um time de pessoas preocupadas com o planeta que encontrou na moda circular uma forma de inspirar a mudança.
                        Aqui é o lugar ideal para um garimpo perfeito, onde você encontra tudo da moda feminina por preços incríveis e em excelente estado.
                        Nossa curadoria é feita por um time de Fashionistas e cada peça é analisada individualmente para garantir uma excelente experiência.
                        É seguro e prático para quem vende e um sonho para quem compra!
                        A grande sacada da moda circular está em unir looks incríveis com sustentabilidade.
                        Vista a mudança que você quer ver no mundo! ♡
                        A Roupartilhar nasceu para que todas as mulheres tenham acesso à produtos exclusivos por preços incríveis! Nossa proposta é movimentar aquelas peças lindas que estão paradas nos guarda roupas e fazê-las circular.

                    </p>
                    <ImgSubText src={imgDois} />
                </InfosContainer>
            </>
            <SubTitleText>
                <h2>Produtos</h2>
            </SubTitleText>
            <ProductSection>
                <ImgSubText src={roupaUm} />
                <ImgSubText src={roupaDois} />
                <ImgSubText src={roupaTres} />
                <ImgSubText src={roupaQuatro} />
                <ImgSubText src={roupaCinco} />
            </ProductSection>
        </>

    );
}
export default HomePage;