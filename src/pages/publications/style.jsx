import styled from "styled-components";
import desktop from "../../assets/img/banners/publications.png";
import mobile from "../../assets/img/banners/publications-mobile.png";

export const PublicationsContainer = styled.section``;

// ------------------------------>> 

export const MainContent = styled.section`

    width: 100%;
    height: 50%;

    @media screen and (max-width: 768px) {
        height: 60%;
    }
`;

export const CentralContainer = styled.section`

    width: 65%;
    height: 100%;
    margin: auto;

    @media screen and (max-width: 768px) {
        width: 100%;
    }
`;

export const TitlesBox = styled.section`

    width: 100%;
    height: 40%;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;

    @media screen and (max-width: 768px) {
        height: 30%;
    }
`;

export const Title = styled.section`

    width: 95%;
    height: 20%;
    display: flex;
    margin: 0 auto;
    align-items: center;

    @media screen and (max-width: 768px) {
        width: 90%;
        height: 25%;
    }
`;

export const H1 = styled.h1`

    font-weight: 400;
    font-family: 'Lilita One';
    text-transform: uppercase;
    color: rgba(29, 6, 5, 0.9);
    font-size: clamp(${props => props.small ? "1vw, 1vw, 1vw" : "1.7vw, 1.7vw, 1.7vw"});

    @media screen and (max-width: 768px) {
        font-size: clamp(${props => props.small ? "4vw, 4vw, 4vw" : "6vw, 6vw, 6vw"});
    }
`;

export const H2 = styled.h2`

    font-weight: 400;
    font-family: 'Lato';
    color: rgba(29, 6, 5, 0.69);
    font-size: clamp(2vh, 2vh, 2vh);

    @media screen and (max-width: 768px) {
        font-size: clamp(4vw, 4vw, 4vw);
    }
`;

export const PublicationsContent = styled.section`

    width: 100%;
    height: 60%;

    display: flex;
    align-items: center;

    @media screen and (max-width: 768px) {
        height: 70%;
        flex-wrap: wrap;
        overflow-x: scroll;
        padding: 0 12px 0 5px;
        flex-direction: column;
        justify-content: center;
    }
`;

export const PublicationBox = styled.section`

    width: 31%;
    height: 80%;
    margin: 0 auto;
    border-radius: 5px;
    background-color: #FFFFFF;
    box-shadow: 0px 4px 25px rgba(60, 35, 13, 0.1);

    &:hover {
        transform: scale(1.01);
    }

    @media screen and (max-width: 768px) {
        margin-left: 2%;
        height: 85%;
        width: 85%;
    }
`;

export const ReportContent = styled.section`

    width: 100%;
    height: 65%;
    display: flex;
    line-height: 18px;
    padding: 10px 10px 0 10px;
    align-items: center;
    justify-content: center;
    text-align: center;
`;

export const UserProfile = styled.section`

    width: 100%;
    height: 35%;
    display: flex;
`;

export const Picture = styled.section`

    width: 35%;
    height: 100%;

    display: flex;
    justify-content: center;

    img {
        height: 95%;
        border-radius: 50%;
    }
`;

export const UserData = styled.section`

    width: 65%;
    height: 100%;
`;

export const UserName = styled.section`

    width: 100%;
    height: 50%;
    display: flex;
    align-items: flex-end;
    justify-content: flex-start;
`;

export const ReportDate = styled.section`

    width: 100%;
    height: 50%;
    display: flex;
    align-items: center;
    justify-content: flex-start;
`;

// ------------------------------>>

export const PublicationsBanner = styled.section`

    width: 100%;
    height: 50%;

    @media screen and (max-width: 768px) {
        height: 40%;
    }
`;

export const TitleContainer = styled.section`

    width: 100%;
    height: 39%;

    @media screen and (max-width: 768px) {
        height: 50%;
    }
`;

export const BackgroundContainer = styled.section`

    width: 100%;
    height: 61%;
    
    background-size: 100% 100%;
    background-position: center;
    background-repeat: no-repeat;
    background-image: url(${desktop});

    @media screen and (max-width: 768px) {
        background-image: url(${mobile});
        height: 50%;
    }
`;

export const BannerTitle = styled.section`

    width: 100%;
    height: 80%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
`;

export const SelectComponent = styled.section`

    width: 100%;
    height: 20%;
    display: flex;
    justify-content: center;
`;

export const SelectButton = styled.section`

    width: 3%;
    height: 15%;
    margin-left: 5px;
    cursor: pointer;
    background-color: ${props => props.selected ? "red" : "#FFFFFF"};
`;