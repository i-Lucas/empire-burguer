import React from "react";
import styled from "styled-components";

import mobile from "../assets/img/dev/mobile.png";
import desktop from "../assets/img/dev/desktop.png";

import Offers from "./offers";
import Banner from "./banner";
import Menu from "./menu";

export default function Main () {

    return (
        <Background>
            <Banner />
            <Offers />
            <Menu />
            <Publications />
            <Deliveries />
            <Location />
        </Background>
    )
};

const Background = styled.div`

    with: 100%;
    height: 500vh;

    // background-image: url(${desktop});
    background-size: 100% 100%;
    background-repeat: no-repeat;

    @media screen and (max-width: 768px) {
        height: 700vh;
        // background-image: url(${mobile});
    }

    display: grid;
    grid-template-rows: 11.2% 18.3% 25.2% 18% 17.5% 9.7%;

    @media screen and (max-width: 768px) {
        grid-template-rows: 14% 22.1% 21.3% 10.4% 21.5% 10.8%;
    }
`;

const Publications = styled.section`

    border: 1px solid black;
`;

const Deliveries = styled.section`

    border: 1px solid red;
`;

const Location = styled.section`

    border: 1px solid blue;
`;