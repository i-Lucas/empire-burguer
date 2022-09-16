import React from "react";
import styled from "styled-components";

export default function Menu() {

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

            </ContentContainer>
            <FooterContainer>

            </FooterContainer>
        </MenuContainer>
    )
};

const MenuContainer = styled.section`

    display: grid;
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

    color: #3B200B;
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
    align-items: center;
    justify-content: center;

    border-radius: 5px;
    background-color: #F43127;
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

// ------------------------------>>

const ContentContainer = styled.section`

    // background-color: salmon;
    border: 3px solid red;
    grid-area: menu;
`;

const FooterContainer = styled.section`

    // background-color: tomato;
    border: 3px solid black;
    grid-area: footer;
`;