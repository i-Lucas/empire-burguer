import React from "react";

import screen from "../../services/screen";
import data from "./data";

import {

    PublicationsContainer,
    MainContent,
    CentralContainer,
    TitlesBox,
    Title,
    H1, H2,
    PublicationsContent,
    PublicationBox,
    ReportContent,
    UserProfile,
    Picture,
    UserData,
    UserName,
    ReportDate,
    PublicationsBanner,
    TitleContainer,
    BackgroundContainer,
    BannerTitle,
    SelectComponent,
    SelectButton

} from "./style";

export default function Publications() {

    const [selected, setSelected] = React.useState(0);
    const mobile = screen.mobile();

    function RenderPublications({ selected }) {

        const newdata = data.slice(selected, selected + 3);
        const result = mobile ? data : newdata;

        return result.map(({ report, name, picture, date }, index) =>

            <PublicationBox key={index}>
                <ReportContent>
                    <H2>“ {report} ”</H2>
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

    function RenderSelectPublication() {

        return (
            <SelectComponent>
                <SelectButton selected={selected === 0} onClick={() => setSelected(0)} />
                <SelectButton selected={selected === 3} onClick={() => setSelected(3)} />
                <SelectButton selected={selected === 6} onClick={() => setSelected(6)} />
                <SelectButton selected={selected === 9} onClick={() => setSelected(9)} />
            </SelectComponent>
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
                        <RenderPublications selected={selected} />
                    </PublicationsContent>
                </CentralContainer>
            </MainContent>

            <PublicationsBanner>
                <TitleContainer>
                    {!mobile && <RenderSelectPublication />}
                    <BannerTitle>
                        <H1>Publicações do instagram</H1><br />
                        <H2>Todos os nossos clientes são tratados como rei e rainha, com a nossa colunaria artesanal.</H2>
                    </BannerTitle>
                </TitleContainer>
                <BackgroundContainer />
            </PublicationsBanner>

        </PublicationsContainer>
    )
};