import React from "react";
import styled from "styled-components";

export default function Publications() {

    const report = `Lorem ipsum dolor sit amet consectetur adipisicing elit. 
    Debitis alias enim atque laboriosam, nemo consequatur ipsa eaque. 
    Asperiores distinctio facere dicta cumque eius laudantium ipsa, tempora, 
    consectetur incidunt, voluptas quis.`;

    const picture = "https://avatars.githubusercontent.com/u/93502599?s=400&u=42f1ba18e5c845b3e49b7fbdb7bbc06bfdf1af4b&v=4";

    const data = [
        { name: "Nélia Melo", picture, date: "23/07/22", report },
        { name: "Lucas Emmanuel", picture, date: "23/07/22", report },
        { name: "Rafaela Alves", picture, date: "23/07/22", report }
    ];

    function RenderPublications() {
        return data.map(({ report, name, picture, date }, index) =>
            <PublicationBox key={index}>
                <ReportContent>
                    <H2>“{report}”</H2>
                </ReportContent>
                <UserProfile>
                    <Picture>
                        <img src={picture} alt={name} />
                    </Picture>
                    <UserData>
                        <UserName>
                            <H1 small={true}>{name}</H1>
                        </UserName>
                        <ReportDate>
                            <H2>{date}</H2>
                        </ReportDate>
                    </UserData>
                </UserProfile>
            </PublicationBox>
        )
    };

    return (
        <PublicationsContainer>
            <MainContent>
                <CentralContainer>

                    <TitlesBox>
                        <Title><H1>Nossa realeza</H1></Title>
                        <Title><H2>A satisfação dos nossos clientes em primeiro lugar!</H2></Title>
                    </TitlesBox>

                    <PublicationsContent>
                        <RenderPublications />
                    </PublicationsContent>

                </CentralContainer>
            </MainContent>
            <PublicationsBanner>

            </PublicationsBanner>
        </PublicationsContainer>
    )
};

const PublicationsContainer = styled.section``;

// ------------------------------>> 

const MainContent = styled.section`

    width: 100%;
    height: 50%;

    @media screen and (max-width: 768px) {
        height: 60%;
    }
`;

const CentralContainer = styled.section`

    width: 65%;
    height: 100%;
    margin: auto;

    @media screen and (max-width: 768px) {
        width: 100%;
    }
`;

const TitlesBox = styled.section`

    width: 100%;
    height: 40%;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;

    @media screen and (max-width: 768px) {
        height: 30%;
    }
`;

const Title = styled.section`

    width: 95%;
    height: 20%;
    display: flex;
    margin: 0 auto;
    align-items: center;

    @media screen and (max-width: 768px) {
        width: 90%;
        height: 25%;
    }
`;

const H1 = styled.h1`

    font-weight: 400;
    font-family: 'Lilita One';
    text-transform: uppercase;
    color: rgba(29, 6, 5, 0.9);
    font-size: clamp(${props => props.small ? "1vw, 1vw, 1vw" : "2vw, 2vw, 2vw"});

    @media screen and (max-width: 768px) {
        font-size: clamp(${props => props.small ? "4vw, 4vw, 4vw" : "6vw, 6vw, 6vw"});
    }
`;

const H2 = styled.h2`

    font-weight: 400;
    font-family: 'Lato';
    color: rgba(29, 6, 5, 0.69);
    font-size: clamp(2vh, 2vh, 2vh);

    @media screen and (max-width: 768px) {
        font-size: clamp(4vw, 4vw, 4vw);
    }
`;

const PublicationsContent = styled.section`

    width: 100%;
    height: 60%;

    display: flex;
    align-items: center;

    @media screen and (max-width: 768px) {
        height: 70%;
        flex-wrap: wrap;
        overflow-x: scroll;
        padding: 0 12px 0 5px;
        flex-direction: column;
        justify-content: center;
    }
`;

const PublicationBox = styled.section`

    width: 31%;
    height: 80%;
    margin: 0 auto;
    border-radius: 5px;
    background-color: #FFFFFF;
    box-shadow: 0px 4px 25px rgba(60, 35, 13, 0.1);

    @media screen and (max-width: 768px) {
        margin-left: 2%;
        height: 85%;
        width: 85%;
    }
`;

const ReportContent = styled.section`

    width: 100%;
    height: 65%;
    display: flex;
    align-items: center;
    padding: 0 10px 0 10px;
    justify-content: center;
`;

const UserProfile = styled.section`

    width: 100%;
    height: 35%;
    display: flex;
`;

const Picture = styled.section`

    width: 35%;
    height: 100%;

    display: flex;
    justify-content: center;
    align-items: center;

    img {
        width: 70%;
        height: 90%;
        border-radius: 50%;
    }
`;

const UserData = styled.section`

    width: 65%;
    height: 100%;
`;

const UserName = styled.section`

    width: 100%;
    height: 50%;
    display: flex;
    align-items: flex-end;
    justify-content: flex-start;
`;

const ReportDate = styled.section`

    width: 100%;
    height: 50%;
    display: flex;
    align-items: center;
    justify-content: flex-start;
`;

// ------------------------------>>

const PublicationsBanner = styled.section`

    width: 100%;
    height: 50%;
    border: 1px solid red;

    @media screen and (max-width: 768px) {
        height: 40%;
    }
`;