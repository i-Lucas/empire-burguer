import styled from "styled-components";

import desktop from "../../assets/img/offers/main-desk.png";
import mobile from "../../assets/img/offers/main-mobile.png";
import timer from "../../assets/img/icons/timer.svg";

export const OffersContainer = styled.section`

    width: 65%;
    height: 100%;
    margin: auto;
    transition: 2s;

    display: grid;
    grid-template-rows: 22% 50% 28%;

    @media screen and (max-width: 1400px) {
        width: 80%;
    }

    @media screen and (max-width: 768px) {
        width: 100%;
        grid-template-rows: 27% 49% 24%;
    }
`;

// -------------------------------- >> title

export const OffersTitleContainer = styled.section`

    display: flex;
    justify-content: center;
    align-items: flex-end;
`;

export const TitleContent = styled.section`

    width: 80%;
    height: 40%;

    @media screen and (max-width: 768px) {
        width: 95%;
        height: 35%;
        margin: 0 auto;
    }
`;

export const H1 = styled.h1`

    font-family: 'Lilita One';
    text-transform: uppercase;
    color: rgba(29, 6, 5, 0.9);
    font-size: clamp(1.8vw, 1.8vw, 1.8vw);

    @media screen and (max-width: 768px) {
        font-size: clamp(7vw, 7vw, 7vw);
    }
`;

export const H2 = styled.h2`

    line-height: 22px;
    font-family: 'Lato';
    color: rgba(29, 6, 5, 0.69);
    font-size: clamp(2vh, 2vh, 2vh);

    @media screen and (max-width: 768px) {
        margin-top: 2.5%;
    }
`;

// -------------------------------- >> main content

export const OffersContentContainer = styled.section`

    width: 80%;
    height: 100%;
    margin: auto;
    display: flex;
    
    @media screen and (max-width: 768px) {
        flex-direction: column;
        width: 100%;
    }
`;

export const MainOffer = styled.section`

    width: 66%;
    height: 100%;

    background-image: url(${desktop});
    background-repeat: no-repeat;
    background-position: center;
    background-size: 100% 97%;

    &:hover {
        cursor: pointer;
        transform: scale(1.01);
    }

    @media screen and (max-width: 768px) {
        background-image: url(${mobile});
        background-size: 95% 95%;
        width: 100%;
        height: 54%;
    }
`;

export const Secondary = styled.section`

    width: 34%;
    height: 100%;

    @media screen and (max-width: 768px) {
        width: 100%;
    }
`;

export const SecondaryBox = styled.section`

    width: 100%;
    height: 50%;

    background-image: url(${props => props.background});
    background-repeat: no-repeat;
    background-position: center;
    background-size: 95% 95%;

    &:hover {
        cursor: pointer;
        transform: scale(1.02);
    }
`;

// -------------------------------- >> footer

export const OffersFooterContainer = styled.section`

    display: flex;

    @media screen and (max-width: 768px) {
        flex-direction: column;
    }
`;

// -------------------------------- >> opening hours

export const OpeningHoursContainer = styled.section`

    width: 50%;
    height: 100%;

    display: flex;
    justify-content: flex-end;
    align-items: center;

    @media screen and (max-width: 768px) {
        width: 100%;
    }
`;

export const OpeningHoursBox = styled.section`

    width: 74%;
    height: 53%;
    display: flex;
    margin-right: 2%;
    border-radius: 10px;
    background-color: #F43127;

    @media screen and (max-width: 768px) {
        width: 88%;
        height: 69%;
        margin: 2% auto 0% auto;
        border-radius: 10px;
    }
`;

export const TimerIcon = styled.section`

    width: 25%;
    height: 100%;

    background-image: url(${timer});
    background-repeat: no-repeat;
    background-position: center;
    
    @media screen and (max-width: 768px) {
        background-size: 75% 75%;
    }
`;

export const OpeningContent = styled.section`

    width: 75%;
    height: 100%;

    display: flex;
    justify-content: center;
    align-items: center;
`;

export const Wrapper = styled.section`

    width: 100%;
    height: 80%;
`;

export const OpeningTitle = styled.section`

    width: 100%;
    height: 40%;

    display: flex;
    justify-content: flex-start;
    align-items: center;
`;

export const H3 = styled.h3`

    font-size: clamp(1.3vw, 1.3vw, 1.3vw);
    font-family: 'Lilita One';
    text-transform: uppercase;
    color: rgba(29, 6, 5, 0.69);

    @media screen and (max-width: 768px) {
        font-size: clamp(4vw, 2vw, 2vw);
    }
`;

export const OpeningSubtitle = styled.section`

    width: 100%;
    height: 30%;
`;

export const H4 = styled.h4`

    font-weight: 700;
    font-family: 'Lato';
    font-size: clamp(2vh, 2vh, 2vh);
    color: rgba(255, 255, 255, 0.85);

    @media screen and (max-width: 768px) {
        font-size: clamp(3.2vw, 3.2vw, 3.2vw);
    }
`;
// -------------------------------- >> follow insta

export const FollowInstaContainer = styled.section`

    width: 50%;
    height: 100%;

    display: flex;
    justify-content: flex-start;
    align-items: center;

    @media screen and (max-width: 768px) {
        width: 100%;
    }
`;

export const FollowInstaBox = styled.section`

    width: 80%;
    height: 45%;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    @media screen and (max-width: 768px) {
        width: 90%;
        height: 60%;
        margin: auto;
    }
`;

export const H5 = styled.h5`

    font-weight: 400;
    font-family: 'Lato';
    color: rgba(29, 6, 5, 0.69);
    font-size: clamp(1.2vw, 1.2vw, 1.2vw);

    @media screen and (max-width: 768px) {
        font-size: clamp(4.5vw, 4vw, 4vw);
    }
`;

export const H6 = styled.h6`

    color: #F43127;
    font-weight: 400;
    margin-top: 3%;
    font-family: 'Lilita One';
    text-transform: uppercase;
    font-size: clamp(4vw, 4vw, 4vw);

    @media screen and (max-width: 768px) {
        font-size: clamp(8vw, 8vw, 8vw);
    }
`;