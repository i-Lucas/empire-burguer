import styled from "styled-components";

import phone from "../../assets/img/banners/phone.png";
import phone2 from "../../assets/img/icons/phone.svg";

export const DeliveriesContainer = styled.section``;

export const CentralContainer = styled.section`

    width: 65%;
    height: 100%;
    margin: auto;
    display: flex;
    flex-direction: column;

    @media screen and (max-width: 768px) {
        width: 100%;
    }
`;

export const ContentContainer = styled.section`

    width: 100%;
    height: 80%;
    display: flex;

    @media screen and (max-width: 768px) {
        height: 75%;
        flex-direction: column;
    }
`;

export const PhoneBackground = styled.section`

    width: 50%;
    height: 100%;
    background-size: 80% 80%;
    background-position: center;
    background-repeat: no-repeat;
    background-image: url(${phone});

    @media screen and (max-width: 768px) {
        width: 100%;
        height: 50%;
        background-size: 85% 90%;
    }
`;

export const DeliveriesContent = styled.section`

    width: 50%;
    height: 100%;
    display: flex;
    align-items: center;

    @media screen and (max-width: 768px) {
        width: 100%;
        height: 55%;
    }
`;

export const MainContent = styled.section`

    width: 100%;
    height: 75%;
    display: flex;
    flex-direction: column;

    @media screen and (max-width: 768px) {
        height: 100%;
    }
`;

export const Title = styled.section`

    width: 92%;
    height: 10%;
    margin: auto;

    display: flex;
    align-items: center;
    justify-content: flex-start;
`;

export const H1 = styled.h1`

    font-family: 'Lilita One';
    text-transform: uppercase;
    color: ${props => props.special ? "rgba(29, 6, 5, 0.69); ": "rgba(29, 6, 5, 0.9);"}
    font-size: clamp(${props => props.small ? "1.2vw, 1.2vw, 1.2vw" : "1.6vw, 1.6vw, 1.6vw"});

    @media screen and (max-width: 768px) {
        font-size: clamp(${props => props.small ? "4vw, 4vw, 4vw" : props.special ? "5vw, 3vw, 3vw" : "6vw, 6vw, 6vw"});
    }
`;

export const ContentBox = styled.section`

    width: 95%;
    margin: 2px auto;
    display: flex;
    cursor: pointer;
    border-radius: 10px;
    height: calc(100% / 4);
    background-color: #FFFFFF;
    box-shadow: 0px 4px 40px rgba(179, 155, 132, 0.5);

    &:hover {
        transform: scale(1.01);
    }
`;

export const Icon = styled.section`

    width: 25%;
    height: 100%;
    background-size: 80% 80%;
    background-repeat: no-repeat;
    background-position: center;
    background-image: url(${props => props.img});
`;

export const Content = styled.section`
    
    width: 75%;
    height: 100%;
    border-top-right-radius: 10px;
    border-bottom-right-radius: 10px;
`;

export const ContentTitle = styled.section`

    width: 100%;
    height: 50%;
    display: flex;
    padding-top: 10px;
    align-items: center;
`;
export const ContentSubtitle = styled.section`

    width: 85%;
    height: 50%;

    @media screen and (max-width: 768px) {
        width: 90%;
    }
`;

export const H2 = styled.h2`

    font-family: 'Lato';
    line-height: ${props => props.special ? "130%;" : "115%;"}
    font-size: clamp(${props => props.special ? "1.1vw, 1.1vw, 1.1vw" : "1vw, 1vw, 1vw"});
    color: ${props => props.special ? "rgba(255, 255, 255, 0.9);" : "rgba(29, 6, 5, 0.69);" };
    
    span {
        font-weight: bold;
    }

    @media screen and (max-width: 768px) {
        font-size: clamp(4vw, 4vw, 4vw);
    }
`;
// ------------------------------>> footer

export const FooterContainer = styled.section`

    width: 100%;
    height: 20%;
    display: flex;  
    
    @media screen and (max-width: 768px) {
        height: 25%;
    }
`;

export const FooterContent = styled.section`

    width: 95%;
    height: 80%;
    margin: auto;
    display: flex;
    border-radius: 10px;
    background-color: #F43127;

    @media screen and (max-width: 768px) {
        height: 90%;
        flex-direction: column;
    }
`;

export const FooterIcon = styled.section`

    width: 15%;
    height: 100%;
    background-image: url(${phone2});
    background-repeat: no-repeat;
    background-size: 80% 80%;
    background-position: center;

    @media screen and (max-width: 768px) {
        
        width: 100%;
        height: 40%;
        margin-top: 10px;
        padding-top: 20px;
        background-size: 100% 100%;
    }
`;

export const FooterTitles = styled.section`

    width: 50%;
    height: 90%;

    @media screen and (max-width: 768px) {
        width: 90%;
        margin: auto;
        height: 80%;
    }
`;

export const FooterTitle = styled.section`

    width: 100%;
    height: 40%;
    display: flex;
    align-items: flex-end;
    justify-content: flex-start;

    @media screen and (max-width: 768px) {
        height: 40%;
        align-items: center;
        justify-content: center;
    }
`;

export const FooterSubtitle = styled.section`

    width: 100%;
    height: 60%;
    display: flex;
    align-items: center;
    justify-content: flex-start;

    @media screen and (max-width: 768px) {
        height: 50%;
        text-align: center;
    }
`;

export const FooterButton = styled.section`

    width: 32%;
    height: 100%;
    display: flex;
    justify-content: flex-end;
    align-items: center;

    @media screen and (max-width: 768px) {
        width: 100%;
        height: 30%;
        align-items: flex-start;
        justify-content: center;
    }
`;

export const Button = styled.section`

    width: 65%;
    height: 35%;
    display: flex;
    cursor: pointer;
    border-radius: 5px;
    align-items: center;
    justify-content: center;
    background-color: #FAE4D0;

    &:hover {
        transform: scale(1.01);
    }

    @media screen and (max-width: 768px) {
        width: 80%;
        height: 75%;
    }
`;

export const H3 = styled.h3`

    font-family: 'Lato';
    font-weight: 900;
    font-size: clamp(1vw, 1vw, 1vw);
    text-transform: uppercase;
    color: #F43127;

    @media screen and (max-width: 768px) {
        font-size: clamp(4vw, 4vw, 4vw);
    }
`;