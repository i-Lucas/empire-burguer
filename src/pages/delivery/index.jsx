import React from "react";

import whatsapp from "../../assets/img/icons/whatsapp.svg";
import ifood from "../../assets/img/icons/ifoode.svg";
import dessert from "../../assets/img/icons/dessert.svg";
import delivery from "../../assets/img/icons/delivery.svg";

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

    const content = [
        { img: whatsapp, title: "Whatsapp", subtitle: "Vamos direto ao ponto, sem perder tempo!" },
        { img: delivery, title: "Entrega", subtitle: "Entregamos menos de 45 minutos na porta da sua casa!" },
        { img: dessert, title: "Sobremesa", subtitle: "Pedidos acima de 100 reais, ganham brindes!" },
        { img: ifood, title: "Ifood", subtitle: "Nossa loja é Top 1 da região !" }
    ];

    return (
        <DeliveriesContainer>
            <CentralContainer>

                <ContentContainer>
                    <PhoneBackground />
                    <DeliveriesContent>
                        <MainContent>
                            <Title><H1>Nossas Entregas</H1></Title>
                            {content.map((element, index) => {
                                return (
                                    <ContentBox key={index}>
                                        <Icon img={element.img} />
                                        <Content>
                                            <ContentTitle>
                                                <H1 small={true}>{element.title}</H1>
                                            </ContentTitle>
                                            <ContentSubtitle>
                                                <H2>{element.subtitle}</H2>
                                            </ContentSubtitle>
                                        </Content>
                                    </ContentBox>
                                )
                            })}
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