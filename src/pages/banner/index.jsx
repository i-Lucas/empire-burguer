import React from "react";

import {

    BannerContainer,
    HeaderContainer,
    HeaderContent,
    Logo,
    Menu,
    Box,
    H1,
    Contact,
    Icons,
    IconsLogo,
    WhatsContaner,
    Button,

    TitleContainer,
    TitleBox,
    BannerButton,
    H2, H3, H4, H5

} from "./style";

import ifood from "../../assets/img/icons/ifood.svg";
import insta from "../../assets/img/icons/insta.svg";
import whats from "../../assets/img/icons/whats.svg";

export default function Banner() {
    return (
        <BannerContainer>
            <HeaderContainer>
                <HeaderContent>
                    <Logo />
                    <Menu >
                        <Box><H1>Home</H1></Box>
                        <Box><H1>Promoção</H1></Box>
                        <Box><H1>Cardapio</H1></Box>
                        <Box><H1>Comentarios</H1></Box>
                        <Box><H1>Contato</H1></Box>
                    </Menu>
                    <Contact >
                        <Icons>
                            <IconsLogo img={ifood} size="80%" />
                            <IconsLogo img={insta} size="60%" />
                        </Icons>
                        <WhatsContaner>
                            <Button>
                                <IconsLogo img={whats} size="60%" disabled={true} />
                                <H1 disabled={true} special={true}>Contato</H1>
                            </Button>
                        </WhatsContaner>
                    </Contact>
                </HeaderContent>
            </HeaderContainer>
            <TitleContainer>
                <TitleBox >
                    <H2>Uma nova experiência!</H2>
                </TitleBox>
                <TitleBox >
                    <H5>KING <span>BURGUER</span></H5>
                </TitleBox>
                <TitleBox >
                    <H3>Para quem tem <span>Apetide de um REI !</span></H3>
                </TitleBox>
                <TitleBox >
                    <BannerButton>
                        <H4>Comprar Agora</H4>
                    </BannerButton>
                </TitleBox>
            </TitleContainer>
        </BannerContainer>
    )
};