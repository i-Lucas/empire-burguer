import React from "react";
import styled from "styled-components";

import { BannerButton, H4, H3 } from "../pages/banner/style";

export default function Modal({ props }) {

    const [text, setText] = React.useState("");

    return (
        <ModalContainer>
            <ModalBox>
                <Content>
                    <H1>Muito obrigado por visitar o <span>Empire Burguer</span> !</H1>
                    <br />
                    <H1>Desenvolvido por : <span>Lucas Emmanuel</span></H1>
                    <br />
                    <H1>Gostaria de dar seu feedback ?</H1>
                    <br />
                    <H1>Entre em contato:</H1>
                    <Link onClick={() => window.open("https://www.linkedin.com/in/hilucas/", '_blank')} >
                        <H3>Linkedin</H3>
                    </Link>
                    <br />
                    <H1 special={true}>Ou envie uma mensagem para meu Whatsapp !</H1>
                </Content>
                <TextContainer>
                    <TextArea onChange={(e) => setText(e.target.value)} />
                </TextContainer>
                <ButtonContainer>
                    <BannerButton onClick={() => props.setOpen(false)}>
                        <H4 >Voltar</H4>
                    </BannerButton>
                    <BannerButton onClick={() => sendMe(text)}>
                        <H4 >Enviar Mensagem</H4>
                    </BannerButton>
                </ButtonContainer>
            </ModalBox>
        </ModalContainer>
    )
};

function sendMe(message) {

    const number = 5571981572363;
    const encoded = encodeURIComponent(message ? message : "Olá, gostei muito do seu projeto !");

    const urlWhatsapp = `https://wa.me/${number}?text=${encoded}`;
    return window.open(urlWhatsapp, '_blank');
};

const ModalContainer = styled.section`

    z-index: 1;
    width: 100%;
    height: 500vh;
    position: absolute;
    backdrop-filter: blur(5px);
    background: rgba(59, 32, 11, 0.05);

    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
`;


const ModalBox = styled.section`

    width: 50%;
    height: 15%;
    margin-top: 5%;
    border-radius: 10px;
    background-color: #FFFFFF;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    @media screen and (max-width: 768px) {
        margin-top: 25%;
        width: 90%;
        height: 11%;
    }
`;

// ----------------------------->>

const Content = styled.section`

    width: 90%;
    height: 50%;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
`;

const Link = styled.a`

    cursor: pointer;
`;

// ------------------------------>>

const TextContainer = styled.section`

    width: 90%;
    height: 30%;
    
    display: flex;
    justify-content: flex-start;
    align-items: flex-start;
`;

const H1 = styled.h1`

    font-weight: 400;
    font-family: 'Lato';
    font-size: clamp(${props => props.special ? "1.2vw, 1.2vw, 1.2vw" : "1.5vw, 1.5vw, 1.5vw"});

    color: rgba(29, 6, 5, 0.69);
    opacity: ${props => props.special && "0.6"};

    span {
        font-weight: 700;
    }

    @media screen and (max-width: 768px) {
        font-size: clamp(${props => props.special ? "3vw, 3vw, 3vw" : "4vw, 4vw, 4vw"});
    }
`;

// ----------------------------->

const TextArea = styled.textarea`

    width: 100%;
    height: 60%;
    resize: none;
    font-family: 'Lato';
    color: rgba(29, 6, 5, 0.69);
`;

// ----------------------------->>

const ButtonContainer = styled.section`

    width: 90%;
    height: 10%;

    display: flex;
    justify-content: space-around;
    align-items: center;
`;