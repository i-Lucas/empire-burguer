import React from "react";
import screen from "../../services/screen";
import menu from "./data";

import {

    MenuContainer,
    BurguerContainer,
    TitleContent,
    Title,
    H1,
    Subtitle,
    H2,
    ButtonContainer,
    Button,
    H3,

    ContentContainer,
    MenuTitle,
    MenuOptionBox,
    H4,
    H5,

    FooterContainer,
    CentralContent,
    Hungry,
    FooterContent,
    ContentBox,
    FooterTitle,
    FooterSubtitle,
    FooterButton

} from "./style";

export default function Menu() {

    const mobile = screen.mobile();

    return (
        <MenuContainer id="menu">

            <BurguerContainer>
                <TitleContent>
                    <Title>
                        <H1>Escolha o seu combo imperial, <span>peça agora!</span></H1>
                    </Title>
                    <Subtitle>
                        <H2>Temos vários tipos de pratos para a nossa realeza, fique esperto porque temos sempre  promoção!</H2>
                    </Subtitle>
                    <ButtonContainer>
                        <Button>
                            <H3>Ver Cardápio Completo</H3>
                        </Button>
                    </ButtonContainer>
                </TitleContent>
            </BurguerContainer>

            <ContentContainer>
                <MenuTitle>
                    <H1 color={"#F59A1B"}>{mobile ? "Nossa especialidade" : "Cardápio imperial | Burger"}</H1>
                </MenuTitle>
                <RenderMenu />
            </ContentContainer>

            <FooterContainer>
                <CentralContent>
                    <Hungry />
                    <FooterContent>
                        <ContentBox>
                            <FooterTitle>
                                <H1>Atendimento <br /><span>personalizado</span></H1>
                            </FooterTitle>
                            <FooterSubtitle>
                                <H2>Todos os nossos clientes são tratados como rei e rainha, com a nossa colunaria artesanal.</H2>
                            </FooterSubtitle>
                            <FooterButton>
                                <Button>
                                    <H3>Cardápio Imperial</H3>
                                </Button>
                            </FooterButton>
                        </ContentBox>
                    </FooterContent>
                </CentralContent>
            </FooterContainer>
        </MenuContainer>
    )
};

function RenderMenu() {
        
    return menu.map(({ title, price, desc }, index) =>
        <MenuOptionBox key={index}>
            <H4>{title}<span>{price}</span></H4>
            <H5>{desc}</H5>
        </MenuOptionBox>
    )
};