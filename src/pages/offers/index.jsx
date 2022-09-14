import React from "react";

import {

    OffersContainer,
    OffersTitleContainer,
    TitleContent,
    OffersContentContainer,
    MainOffer,
    Secondary,
    SecondaryBox,
    OffersFooterContainer,
    OpeningHoursContainer,
    OpeningHoursBox,
    FollowInstaContainer,
    FollowInstaBox

} from "./style";

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