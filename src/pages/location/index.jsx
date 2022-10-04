import React from "react";
import styled from "styled-components";

import insta from "../../assets/img/icons/insta.svg";
import logo from "../../assets/img/icons/logo-footer.svg";
import ifood from "../../assets/img/icons/ifood-footer.svg";
import desktop from "../../assets/img/banners/location.png";
import mobile from "../../assets/img/banners/location-mobile.png";

import Maps from "../../services/maps";

import scrollTo from "../../services/scroll";

export default function Location({ modal }) {

    return (

        <LocationContainer id="location">
            <TitleContainer>
                <H1>Onde fica nosso castelo</H1>< br />
                <H2>Estaremos de portas abertas para a nossa realeza.</H2>
            </TitleContainer>

            <Banner >
                <Maps />
            </Banner>

            <FooterContainer>
                <FooterMenu>
                    <Logo />
                    <Menu>
                        <MenuBox><H3 onClick={() => scrollTo("home")} >Início</H3> </MenuBox>
                        <MenuBox><H3 onClick={() => scrollTo("publications")}>Comentários</H3></MenuBox>
                        <MenuBox><H3 onClick={() => scrollTo("menu")} >Cardápio</H3> </MenuBox>
                        <MenuBox><H3 onClick={() => { scrollTo("home"), modal.setOpen(true) }}>Sobre</H3></MenuBox>
                    </Menu>
                    <Icons>
                        <IconBox img={ifood} size={"85% 85%"} />
                        <IconBox img={insta} size={"70% 70%"} />
                    </Icons>
                </FooterMenu>

                <Copyright>
                    <Inter><span>2022 © EmpireBurger.</span> Todos os direitos reservados.</Inter>
                </Copyright>
            </FooterContainer>

        </LocationContainer>
    )
};

const LocationContainer = styled.section``;

const TitleContainer = styled.section`

    width: 100%;
    height: 25%;
    display: flex;
    text-align: center;
    flex-direction: column;
    justify-content: center;

    @media screen and (max-width: 768px) {
        height: 15%;
    }
`;

const Banner = styled.section`

    width: 100%;
    height: 70%;

    @media screen and (max-width: 768px) {
        height: 40%;
    }
`;

// ------------------------------>> footer

const FooterContainer = styled.section`

    width: 100%;
    height: 28%;

    @media screen and (max-width: 768px) {
        height: 35%;
    }
`;

const FooterMenu = styled.section`

    width: 65%;
    height: 60%;
    margin: auto;

    display: flex;
    align-items: center;
    justify-content: flex-start;

    @media screen and (max-width: 768px) {
        width: 50%;
        height: 75%;
    }
`;

const Logo = styled.section`

    width: 28%;
    height: 100%;

    background-image: url(${logo});
    background-repeat: no-repeat;
    background-position: center;
    background-size: 85% 85%;

    @media screen and (max-width: 768px) {
        display: none;
    }
`;

const Menu = styled.section`

    width: 55%;
    height: 100%;
    display: flex;
    justify-content: flex-end;
    
    @media screen and (max-width: 768px) {
        width: 100%;
        align-items: center;
        flex-direction: column;
        justify-content: center;
    }
`;

const MenuBox = styled.section`

    width: 20%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;

    @media screen and (max-width: 768px) {
        width: 100%;
        align-items: flex-end;
    }
`;

const H3 = styled.h3`

    color: #3A210B;
    cursor: pointer;
    font-weight: 400;
    font-family: 'Lato';
    font-size: clamp(0.9vw, 0.8vw, 0.8vw);

    &:hover {
        transform: scale(1.1);
    }

    @media screen and (max-width: 768px) {
        font-size: clamp(4vw, 4vw, 4vw);
    }
`;

const Icons = styled.section`

    width: 17%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: flex-end;

    @media screen and (max-width: 768px) {
        display: none;
    }
`;

const IconBox = styled.section`

    width: 25%;
    height: 80%;
    cursor: pointer;

    background-position: center;
    background-repeat: no-repeat;
    background-size: ${props => props.size};
    background-image: url(${props => props.img});

    &:hover {
        transform: scale(1.01);
    }
`;

// ------------------------------>>

const Copyright = styled.section`

    width: 100%;
    height: 40%;
    display: flex;
    align-items: flex-end;
    justify-content: center;

    @media screen and (max-width: 768px) {
        height: 25%;
    }
`;

const Inter = styled.h1`

    font-family: 'Inter';
    font-weight: 400;

    span {
        font-weight: 700;
    }

    margin-bottom: 5px;
    text-align: center;
    color: rgba(2, 14, 31, 0.69);
    font-size: clamp(0.8vw, 0.8vw, 0.8vw);
    
    @media screen and (max-width: 768px) {
        font-size: clamp(3vw, 1vw, 1vw);
    }
`;

const H1 = styled.h1`

    font-family: 'Lilita One';
    text-transform: uppercase;
    color: rgba(29, 6, 5, 0.9);
    font-size: clamp(2vw, 2vw, 2vw);

    @media screen and (max-width: 768px) {
        font-size: clamp(6vw, 6vw, 6vw);
    }
`;

const H2 = styled.h2`

    font-family: 'Lato';
    color: rgba(29, 6, 5, 0.69);
    font-size: clamp(1vw, 1vw, 1vw);
    
    @media screen and (max-width: 768px) {
        font-size: clamp(4vw, 4vw, 4vw);
    }
`;