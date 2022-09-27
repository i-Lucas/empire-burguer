import React from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";

import banner from "../../assets/img/banners/burguer-mobile.png";
import { H1 } from "../delivery/style";

export default function NotFound() {

    const navigate = useNavigate();
    const [count, setCount] = React.useState(6);

    React.useEffect(() => {

        setTimeout(() => setCount(count - 1), 1000);
        if (count === 0) return navigate("/");
    });

    return (

        <Container>
            <H1>Sorry</H1><br />
            <H1>this page does not exist !</H1><br />
            <H1>you will be redirected to the main page in {count}</H1>
        </Container>
    )
};

const Container = styled.section`

    width: 100%;
    height: 100vh;

    background-size: cover;
    background-position: center;
    background-image: url(${banner});

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
`;