import React from "react";

import content from "./data";

import {

    DeliveriesContainer,
    CentralContainer,
    ContentContainer,
    PhoneBackground,
    DeliveriesContent,

    MainContent,
    Title, H1,

    ContentBox,
    Icon,
    Content,
    ContentTitle,
    ContentSubtitle,
    H2,

    FooterContainer,
    FooterContent,
    FooterIcon,
    FooterTitles,
    FooterTitle,
    FooterSubtitle,

    FooterButton,
    Button,
    H3

} from "./style";

export default function Deliveries() {

    return (
        <DeliveriesContainer>
            <CentralContainer>

                <ContentContainer>
                    <PhoneBackground />
                    <DeliveriesContent>
                        <MainContent>
                            <Title>
                                <H1>Nossas Entregas</H1>
                            </Title>
                            <RenderContent />
                        </MainContent>
                    </DeliveriesContent>
                </ContentContainer>

                <FooterContainer>
                    <FooterContent>
                        <FooterIcon />
                        <FooterTitles>
                            <FooterTitle>
                                <H1 special={true}>faça o seu pedido agora mesmo!</H1>
                            </FooterTitle>
                            <FooterSubtitle>
                                <H2 special={true}>Venha saborear a melhor experiência de hambúrgueres artesanais do <span>Empires Burger</span> com temática medieval !</H2>
                            </FooterSubtitle>
                        </FooterTitles>
                        <FooterButton>
                            <Button>
                                <H3>Solicitar Pedido</H3>
                            </Button>
                        </FooterButton>
                    </FooterContent>
                </FooterContainer>

            </CentralContainer>
        </DeliveriesContainer>
    )
};

function RenderContent() {

    return content.map(({ img, title, subtitle }, index) =>
        <ContentBox key={index}>
            <Icon img={img} />
            <Content>
                <ContentTitle>
                    <H1 small={true}>{title}</H1>
                </ContentTitle>
                <ContentSubtitle>
                    <H2>{subtitle}</H2>
                </ContentSubtitle>
            </Content>
        </ContentBox>
    )
};