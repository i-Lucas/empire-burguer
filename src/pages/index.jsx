import React from "react";
import styled from "styled-components";

import Menu from "./menu";
import Offers from "./offers";
import Banner from "./banner";
import Location from "./location";
import Deliveries from "./delivery";
import Publications from "./publications";

export default function Main(modal) {

    return (
        <SuperWrapper>
            <Banner modal={modal} />
            <Offers />
            <Menu />
            <Publications />
            <Deliveries />
            <Location modal={modal} />
        </SuperWrapper>
    )
};

const SuperWrapper = styled.div`

    with: 100%;
    height: 500vh;
    display: grid;
    
    grid-template-rows: 11.2% 18.3% 25.2% 18% 17.5% 9.7%;

    @media screen and (max-width: 768px) {
        height: 700vh;
        grid-template-rows: 14% 22.1% 21.3% 10.4% 21.5% 10.8%;
    }
`;