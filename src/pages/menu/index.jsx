import React from "react";
import styled from "styled-components";

import desktop from "../../assets/img/banners/burguer-desk.png";
import mobile from "../../assets/img/banners/burguer-mobile.png";
import imhungry from "../../assets/img/banners/hungry.png";
import screen from "../../services/screen";

export default function Menu() {

    const mobile = screen.mobile();

    return (
        <MenuContainer>

            <BurguerContainer>
                <TitleContent>
                    <Title>
                        <H1>Escolha o seu combo imperial, <span>peça agora!</span></H1>
                    </Title>
                    <Subtitle>
                        <H2>Temos vários tipos de pratos para a nossa realeza, fique esperto porque temos sempre  promoção!</H2>
                    </Subtitle>
                    <ButtonContainer>
                        <Button>
                            <H3>Ver Cardápio Completo</H3>
                        </Button>
                    </ButtonContainer>
                </TitleContent>
            </BurguerContainer>

            <ContentContainer>
                <MenuTitle>
                    <H1 color={"#F59A1B"}>{mobile ? "Nossa especialidade" : "Cardápio imperial | Burger"}</H1>
                </MenuTitle>
                <MenuOptionBox>
                    <H4>Classic burger <span>R$49,99</span></H4>
                    <H5>Hamburguer bonino 160g, Molho, Bacon, Queijo prato, peito de peru, Tomate, Alface, Servidor do pão de batata</H5>
                </MenuOptionBox>
                <MenuOptionBox>
                    <H4>Classic burger <span>R$49,99</span></H4>
                    <H5>Hamburguer bonino 160g, Molho, Bacon, Queijo prato, peito de peru, Tomate, Alface, Servidor do pão de batata</H5>
                </MenuOptionBox>
                <MenuOptionBox>
                    <H4>Classic burger <span>R$49,99</span></H4>
                    <H5>Hamburguer bonino 160g, Molho, Bacon, Queijo prato, peito de peru, Tomate, Alface, Servidor do pão de batata</H5>
                </MenuOptionBox>
                <MenuOptionBox>
                    <H4>Classic burger <span>R$49,99</span></H4>
                    <H5>Hamburguer bonino 160g, Molho, Bacon, Queijo prato, peito de peru, Tomate, Alface, Servidor do pão de batata</H5>
                </MenuOptionBox>
            </ContentContainer>

            <FooterContainer>
                <CentralContent>
                    <Hungry />
                    <FooterContent>
                        <ContentBox>
                            <FooterTitle>
                                <H1>Atendimento <br /><span>personalizado</span></H1>
                            </FooterTitle>
                            <FooterSubtitle>
                                <H2>Todos os nossos clientes são tratados como rei e rainha, com a nossa colunaria artesanal.</H2>
                            </FooterSubtitle>
                            <FooterButton>
                                <Button>
                                    <H3>Cardápio Imperial</H3>
                                </Button>
                            </FooterButton>
                        </ContentBox>
                    </FooterContent>
                </CentralContent>
            </FooterContainer>
        </MenuContainer>
    )
};

const MenuContainer = styled.section`

    display: grid;
    grid-template-rows: 47% 53%;
    grid-template-columns: 49% 51%;
    grid-template-areas: "burguer menu" "footer footer";
    
    @media screen and (max-width: 768px) {
        grid-template-rows: 18.5% 36% 45.5%;
        grid-template-columns: repeat(3, 100%);
        grid-template-areas: "burguer" "menu" "footer";
    }
`;

// ------------------------------>>

const BurguerContainer = styled.section`

    grid-area: burguer;
    position: relative;

    background-image: url(${desktop});
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;

    @media screen and (max-width: 768px) {
        background-image: url(${mobile});
    }
`;

const TitleContent = styled.section`

    top: 25%;
    left: 38%;
    width: 55%;
    height: 40%;
    transition: 2s;
    position: absolute;

    display: flex;
    flex-direction: column;
    justify-content: center;

    @media screen and (max-width: 768px) {
        top: 5%;
        left: 0;
        width: 95%;
        height: 90%;
        padding-left: 2%;
    }
`;

// ------------------------------>> Title

const Title = styled.section`

    width: 100%;
    height: 40%;
`;

const H1 = styled.h1`

    color: ${props => props.color ? props.color : "#3B200B"};
    font-weight: 400;
    line-height: 120%;
    font-family: 'Lilita One';
    text-transform: uppercase;
    font-size: clamp(2vw, 2vw, 2vw);

    span {
        border-radius: 5px;
        padding: 0 5px 0 5px;
        background-color: #F59A1B;
    }
    
    @media screen and (max-width: 768px) {
        font-size: clamp(7vw, 7vw, 7vw);
    }
`;

// ------------------------------>> subtitle

const Subtitle = styled.section`

    width: 100%;
    height: 35%;

    display: flex;
    align-items: center;
    justify-content: center;
`;

const H2 = styled.h2`

    font-weight: 400;
    line-height: 120%;
    font-family: 'Lato';
    color: rgba(29, 6, 5, 0.69);
    font-size: clamp(2vh, 2vh, 2vh);
`;

// ------------------------------>> button

const ButtonContainer = styled.section`

    width: 100%;
    height: 25%;
    
    display: flex;
    align-items: center;
    justify-content: flex-start;
`;

const Button = styled.section`

    width: 40%;
    height: 80%;
    display: flex;
    cursor: pointer;
    border-radius: 5px;
    align-items: center;
    justify-content: center;
    background-color: #F43127;

    &:hover {
        transform: scale(1.02);
    }
`;

const H3 = styled.h3`

    color: #FFFFFF;
    font-weight: 700;
    line-height: 22px;
    font-family: 'Lato';
    font-size: clamp(0.9vw, 0.9vw, 0.9vw);

    @media screen and (max-width: 768px) {
        font-size: clamp(3.2vw, 3.2vw, 3.2vw);
    }
`;

// ------------------------------>> menu options

const ContentContainer = styled.section`

    background-color: #3B200B;
    grid-area: menu;
`;

const MenuTitle = styled.section`

    width: 95%;
    height: 20%;
    margin: auto;
    display: flex;
    align-items: center;
    justify-content: flex-start;

    @media screen and (max-width: 768px) {
        height: 15%;
    }
`;

const MenuOptionBox = styled.section`

    width: 95%;
    height: 19%;
    margin: auto;
    display: flex;
    align-items: flex-start;
    flex-direction: column;
    justify-content: space-around;

    @media screen and (max-width: 768px) {
        height: 21%;
    }
`;

const H4 = styled.h4`

    font-weight: 400;
    font-size: clamp(1.5vw, 1.5vw, 1.5vw);
    color: #FAE4D0;
    text-transform: uppercase;
    font-family: 'Lilita One';

    span {
        position: absolute;
        right: 10%;
    }

    @media screen and (max-width: 768px) {
        font-size: clamp(4.5vw, 4.5vw, 4.5vw);
    }
`;

const H5 = styled.h5`

    font-family: 'Lato';
    font-weight: 400;
    line-height: 15px;
    font-size: clamp(1vw, 1vw, 1vw);
    color: rgba(255, 255, 255, 0.9);
    margin-right: 20%;

    @media screen and (max-width: 768px) {
        font-size: clamp(3.5vw, 2vw, 2vw);
    }
`;

// ------------------------------>> footer

const FooterContainer = styled.section`

    grid-area: footer;
`;

const CentralContent = styled.section`

    width: 65%;
    height: 100%;
    margin: auto;
    display: flex;
    
    @media screen and (max-width: 768px) {
        flex-direction: column;
        width: 100%;
    }
`;

const Hungry = styled.section`

    width: 50%;
    height: 100%;

    background-image: url(${imhungry});
    background-repeat: no-repeat;
    background-position: center;
    background-size: 90% 75%;

    @media screen and (max-width: 768px) {
        background-size: 90% 90%;
        width: 100%;
        height: 60%;
    }
`;

const FooterContent = styled.section`

    width: 50%;
    height: 100%;
    display: flex;
    align-items: center;

    @media screen and (max-width: 768px) {
        width: 100%;
        height: 40%;
    }
`;

const ContentBox = styled.section`

    width: 100%;
    height: 50%;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;

    @media screen and (max-width: 768px) {
        height: 100%;
        justify-content: flex-start;
    }
`;

const FooterTitle = styled.section`

    width: 100%;
    height: 32%;

    @media screen and (max-width: 768px) {
        margin: 0 auto;
        width: 90%;
        height: 30%;
    }
`;

const FooterSubtitle = styled.section`

    width: 100%;
    height: 22%;

    display: flex;
    justify-content: center;
    align-items: center;

    @media screen and (max-width: 768px) {
        margin: 0 auto;
        width: 90%;
        height: 35%;
    }
`;

const FooterButton = styled.section`

    width: 100%;
    height: 22%;
    display: flex;
    justify-content: flex-start;
    align-items: center;

    @media screen and (max-width: 768px) {
        margin: 0 auto;
        width: 90%;
        height: 25%;
    }
`;