import React from "react";

import {

    OffersContainer,
    OffersTitleContainer,
    TitleContent,
    H1, H2,
    OffersContentContainer,
    MainOffer,
    Secondary,
    SecondaryBox,
    OffersFooterContainer,
    OpeningHoursContainer,
    OpeningHoursBox,
    TimerIcon,
    OpeningContent,
    Wrapper,
    OpeningTitle,
    H3, H4,
    OpeningSubtitle,
    FollowInstaContainer,
    FollowInstaBox,
    H5, H6

} from "./style";

import offer1 from "../../assets/img/offers/offer1.png";
import offer2 from "../../assets/img/offers/offer2.png";

export default function Offers() {

    return (
        <OffersContainer id={"offers"}>
            <OffersTitleContainer>
                <TitleContent>
                    <H1>Ofertas Especiais</H1>
                    <H2>
                        Aproveite todas as nossas ofertas,
                        fiquem de olhos abertos, porque sempre
                        estamos mudando o nosso cardapio.
                    </H2>
                </TitleContent>
            </OffersTitleContainer>
            <OffersContentContainer>

                <MainOffer />
                <Secondary>
                    <SecondaryBox background={offer1} />
                    <SecondaryBox background={offer2} />
                </Secondary>

            </OffersContentContainer>
            <OffersFooterContainer>
                <OpeningHoursContainer>
                    <OpeningHoursBox>
                        <TimerIcon>

                        </TimerIcon>
                        <OpeningContent>
                            <Wrapper>
                                <OpeningTitle>
                                    <H3>Horário de funcionamento</H3>
                                </OpeningTitle>
                                <OpeningSubtitle>
                                    <H4>Segunda-feira a sexta-feira: 17h00 - 23h00</H4>
                                </OpeningSubtitle>
                                <OpeningSubtitle>
                                    <H4>Sabado a Domíngo: 18h30 - 23h00</H4>
                                </OpeningSubtitle>
                            </Wrapper>
                        </OpeningContent>
                    </OpeningHoursBox>
                </OpeningHoursContainer>
                <FollowInstaContainer>
                    <FollowInstaBox>
                            <H5>Não esqueça de marcar a gente no Instagram:</H5>
                            <H6>#empireburger </H6>
                    </FollowInstaBox>
                </FollowInstaContainer>
            </OffersFooterContainer>
        </OffersContainer>
    )
};