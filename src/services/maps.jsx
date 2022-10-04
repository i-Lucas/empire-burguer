import React from "react";
import styled from "styled-components";

export default function Maps() {

    return (
        <Container>
            <div>
                {/* eslint-disable-next-line */}
                <iframe
                    width="100%"
                    height="207"
                    src="https://maps.google.com/maps?q=Rua%20Fran%C3%A7a%20Pinto%20S%C3%A3o%20Paulo&t=&z=19&ie=UTF8&iwloc=&output=embed"
                    frameBorder="0"
                    scrolling="no"
                    marginHeight="0"
                    marginWidth="0"
                ></iframe>
            </div>
        </Container>
    );
};

const Container = styled.section`

    width: 100%;
    height: 100%;
`;