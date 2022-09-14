import React from "react";
import styled from "styled-components";

export default function Offers() {
    return (
        <OffersContainer>
            <OffersTitleContainer>
                <TitleContent>

                </TitleContent>
            </OffersTitleContainer>
            <OffersContentContainer>

                <MainOffer>
                </MainOffer>
                <Secondary>
                    <SecondaryBox />
                    <SecondaryBox />
                </Secondary>

            </OffersContentContainer>
            <OffersFooterContainer>
                <OpeningHoursContainer>
                    <OpeningHoursBox>

                    </OpeningHoursBox>
                </OpeningHoursContainer>
                <FollowInstaContainer>
                    <FollowInstaBox>

                    </FollowInstaBox>
                </FollowInstaContainer>
            </OffersFooterContainer>
        </OffersContainer>
    )
};

const OffersContainer = styled.section`

    width: 65%;
    height: 100%;
    margin: auto;
    transition: 2s;
    border: 1px solid black;

    display: grid;
    grid-template-rows: 22% 50% 28%;

    @media screen and (max-width: 1400px) {
        width: 80%;
        transition: 2s;
    }

    @media screen and (max-width: 768px) {
        width: 100%;
        transition: 2s;
        grid-template-rows: 27% 49% 24%;
    }
`;

// -------------------------------- >> title

const OffersTitleContainer = styled.section`

    display: flex;
    justify-content: center;
    align-items: flex-end;
`;

const TitleContent = styled.section`

    width: 80%;
    height: 40%;
    border: 1px solid red;

    @media screen and (max-width: 768px) {
        width: 100%;
        height: 25%;
    }
`;

// -------------------------------- >> main content

const OffersContentContainer = styled.section`

    width: 80%;
    height: 100%;
    margin: auto;
    display: flex;
    border: 1px solid blue;
    
    @media screen and (max-width: 768px) {
        flex-direction: column;
        width: 100%;
    }
`;

const MainOffer = styled.section`

    width: 66%;
    height: 100%;
    border: 1px solid blue;

    @media screen and (max-width: 768px) {
        width: 100%;
        height: 54%;
    }
`;

const Secondary = styled.section`

    width: 34%;
    height: 100%;
    border: 1px solid red;

    @media screen and (max-width: 768px) {
        width: 100%;
    }
`;

const SecondaryBox = styled.section`

    width: 100%;
    height: 50%;
    border: 1px solid red;
`;

// -------------------------------- >> footer

const OffersFooterContainer = styled.section`

    display: flex;

    @media screen and (max-width: 768px) {
        flex-direction: column;
    }
`;

// -------------------------------- >> opening hours

const OpeningHoursContainer = styled.section`

    width: 50%;
    height: 100%;

    display: flex;
    justify-content: flex-end;
    align-items: center;

    @media screen and (max-width: 768px) {
        width: 100%;
    }
`;

const OpeningHoursBox = styled.section`

    width: 74%;
    height: 53%;
    margin-right: 2%;
    border-radius: 5px;
    border: 1px solid black;

    @media screen and (max-width: 768px) {
        width: 88%;
        height: 69%;
        margin: 2% auto 0% auto;
        border-radius: 10px;
    }
`;

// -------------------------------- >> follow insta

const FollowInstaContainer = styled.section`

    width: 50%;
    height: 100%;

    display: flex;
    justify-content: flex-start;
    align-items: center;

    @media screen and (max-width: 768px) {
        width: 100%;
    }
`;

const FollowInstaBox = styled.section`

    width: 50%;
    height: 35%;
    margin-right: 4%;
    border: 1px solid black;

    @media screen and (max-width: 768px) {
        width: 90%;
        height: 50%;
        margin: auto;
    }
`;