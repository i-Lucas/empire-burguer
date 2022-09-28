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

import scrollTo from "../../services/scroll";
import Modal from "../../components/modal";

export default function Banner({ modal }) {

    return (
        <BannerContainer id={"home"}>
            {modal.isOpen && <Modal props={modal} />}
            <HeaderContainer>
                <HeaderContent>
                    <Logo />
                    <Menu >
                        <Box><H1 onClick={() => scrollTo("home")}>Início</H1></Box>
                        <Box><H1 onClick={() => scrollTo("offers")}>Promoções</H1></Box>
                        <Box><H1 onClick={() => scrollTo("menu")}>Cardápio</H1></Box>
                        <Box><H1 onClick={() => scrollTo("publications")}>Comentários</H1></Box>
                        <Box><H1 onClick={() => scrollTo("location")}>Localização</H1></Box>
                    </Menu>
                    <Contact >
                        <Icons>
                            <IconsLogo img={ifood} size="80%" />
                            <IconsLogo img={insta} size="60%" />
                        </Icons>
                        <WhatsContaner>
                            <Button onClick={() => modal.setOpen(true)}>
                                <IconsLogo img={whats} size="60%" disabled={true} />
                                <H1 disabled={true} special={true}>Contato</H1>
                            </Button>
                        </WhatsContaner>
                    </Contact>
                </HeaderContent>
            </HeaderContainer>
            <RenderTitleContainer />
        </BannerContainer>
    )
};

function RenderTitleContainer() {

    return (
        <TitleContainer>
            <TitleBox ><H2>Uma nova experiência!</H2></TitleBox>
            <TitleBox ><H5>KING <span>BURGUER</span></H5></TitleBox>
            <TitleBox ><H3>Para quem tem <span>Apetite de um REI !</span></H3></TitleBox>
            <TitleBox >
                <BannerButton>
                    <H4>Comprar Agora</H4>
                </BannerButton>
            </TitleBox>
        </TitleContainer>
    )
};