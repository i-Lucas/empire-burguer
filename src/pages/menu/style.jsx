import styled from "styled-components";

import desktop from "../../assets/img/banners/burguer-desk.png";
import mobile from "../../assets/img/banners/burguer-mobile.png";
import imhungry from "../../assets/img/banners/hungry.png";

export const MenuContainer = styled.section`

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

export const BurguerContainer = styled.section`

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

export const TitleContent = styled.section`

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

export const Title = styled.section`

    width: 100%;
    height: 40%;
`;

export const H1 = styled.h1`

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

export const Subtitle = styled.section`

    width: 100%;
    height: 35%;

    display: flex;
    align-items: center;
    justify-content: center;
`;

export const H2 = styled.h2`

    font-weight: 400;
    line-height: 120%;
    font-family: 'Lato';
    color: rgba(29, 6, 5, 0.69);
    font-size: clamp(2vh, 2vh, 2vh);
`;

// ------------------------------>> button

export const ButtonContainer = styled.section`

    width: 100%;
    height: 25%;
    
    display: flex;
    align-items: center;
    justify-content: flex-start;
`;

export const Button = styled.section`

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

export const H3 = styled.h3`

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

export const ContentContainer = styled.section`

    background-color: #3B200B;
    grid-area: menu;
`;

export const MenuTitle = styled.section`

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

export const MenuOptionBox = styled.section`

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

export const H4 = styled.h4`

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

export const H5 = styled.h5`

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

export const FooterContainer = styled.section`

    grid-area: footer;
`;

export const CentralContent = styled.section`

    width: 65%;
    height: 100%;
    margin: auto;
    display: flex;
    
    @media screen and (max-width: 768px) {
        flex-direction: column;
        width: 100%;
    }
`;

export const Hungry = styled.section`

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

export const FooterContent = styled.section`

    width: 50%;
    height: 100%;
    display: flex;
    align-items: center;

    @media screen and (max-width: 768px) {
        width: 100%;
        height: 40%;
    }
`;

export const ContentBox = styled.section`

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

export const FooterTitle = styled.section`

    width: 100%;
    height: 32%;

    @media screen and (max-width: 768px) {
        margin: 0 auto;
        width: 90%;
        height: 30%;
    }
`;

export const FooterSubtitle = styled.section`

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

export const FooterButton = styled.section`

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