import styled from "styled-components";

import logo from "../../assets/img/icons/logo.svg";

import desktop from "../../assets/img/banners/main-desk.png";
import mobile from "../../assets/img/banners/main-mob.png";

export const BannerContainer = styled.section`

    position: relative;
    border: 2px solid black;
    
    background-image: url(${desktop});
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;

    @media screen and (max-width: 768px) {
        background-image: url(${mobile});
    }
`;

export const TitleContainer = styled.section`

    width: 30%;
    height: 42%;
    left: 19%;
    top: 30%;
    position: absolute;

    display: grid;
    grid-template-rows: 17% 34% 19% 30%;

    @media screen and (max-width: 768px) {
        grid-template-rows: 17% 30% 22% 31%;
        height: 22%;
        width: 85%;
        top: 11%;
        left: 4%;
    }
`;

export const TitleBox = styled.section`

    display: flex;
    justify-content: flex-start;
    align-items: center;
`;

export const H2 = styled.h2`

    font-family: 'Lato';
    font-weight: 700;
    line-height: 23px;
    color: rgba(29, 6, 5, 0.9);
    font-size: clamp(2vh, 2vh, 2vh);
`;

export const H5 = styled.h5`

    font-family: 'Lilita One';
    font-weight: 400;
    line-height: 85px;
    color: #3B200B;
    font-size: clamp(7vh, 7vh, 7vh);

    span {
        color: #F59A1B;
    }

    @media screen and (max-width: 768px) {
        font-size: clamp(5vh, 5vh, 5vh);
    }
`;

export const H3 = styled.h3`

    font-family: 'Lato';
    font-weight: 400;
    line-height: 32px;
    color: rgba(29, 6, 5, 0.69);
    font-size: clamp(1.2vw, 1.2vw, 1.2vw);

    span {
        padding: 1px 5px 1px 5px;
        border-radius: 5px;
        background-color: #F59A1B;
    }

    @media screen and (max-width: 768px) {
        font-size: clamp(2vh, 2vh, 2vh);
    }
`;

export const BannerButton = styled.section`
    
    width: 35%;
    height: 80%;
    cursor: pointer;
    border-radius: 5px;
    background-color: #F43127;

    display: flex;
    justify-content: center;
    align-items: center;

    &:hover {
        transform: scale(1.02);
    }

    @media screen and (max-width: 768px) {
        width: 45%;
    }
`;

export const H4 = styled.h4`

    font-family: 'Lato';
    font-weight: 700;
    font-size: clamp(1.2vw, 1.2vw, 1.2vw);
    line-height: 32px;
    color: #FFFFFF;

    @media screen and (max-width: 768px) {
        font-size: clamp(2vh, 2vh, 2vh);
    }
`;

// ------------------------------>> header

export const HeaderContainer = styled.section`

    width: 100%;
    height: 11%;
`;

export const HeaderContent = styled.section`

    width: 65%;
    margin: auto;
    height: 100%;
    display: flex;
    transition: 2s;

    @media screen and (max-width: 1200px) {
        width: 80%;
    }

    @media screen and (max-width: 768px) {
        width: 100%;
    }
`;

export const Logo = styled.section`

    width: 25%;
    background-image: url(${logo});
    background-repeat: no-repeat;
    background-position: center;
    background-size: 85% 80%;

    &:hover {
        cursor: pointer;
        transform: scale(1.05);
    }

    @media screen and (max-width: 768px) {
        background-size: 85% 50%;
        height: 65%;
        width: 100%;
    }
`;

// ------------------------------>> Menu

export const Menu = styled.section`

    width: 48%;
    display: flex;

    @media screen and (max-width: 768px) {
        display: none;
    }
`;

export const Box = styled.section`

    display: flex;
    align-items: center;
    width: calc(100% / 5);
    justify-content: center;
`;

export const H1 = styled.h1`

    cursor: pointer;
    font-family: 'Lato';    
    font-size: clamp(1vw, 1vw, 1vw);
    color: ${props => props.special ? "#000000" : "#635352"};

    &:hover {
        transform: ${props => props.disabled ? "" : "scale(1.1)"};
    }
`;

// ------------------------------>>

export const Contact = styled.section`

    width: 25%;
    display: flex;

    @media screen and (max-width: 768px) {
        display: none;
    }
`;

export const Icons = styled.section`

    width: 52%;
    display: flex;
    justify-content: flex-end;
`;

export const IconsLogo = styled.section`

    width: 30%;
    height: 100%;
    cursor: pointer;
    background-position: center;
    background-repeat: no-repeat;
    background-size: ${props => props.size};
    background-image: url(${props => props.img});

    &:hover {
        transform: ${props => props.disabled ? "" : "scale(1.1)"};
    }
`;

// ------------------------------>>

export const WhatsContaner = styled.section`

    width: 48%;
    display: flex;
    align-items: center;
    justify-content: center;
`;

export const Button = styled.section`

    width: 82%;
    height: 70%;
    cursor: pointer;
    border-radius: 5px;
    background-color: #F59A1B;

    display: flex;
    align-items: center;
    justify-content: center;

    &:hover {
        transform: scale(1.05);
    }
`;