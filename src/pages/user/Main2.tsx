import ReactFullpage from '@fullpage/react-fullpage'
import { Header } from 'components/Header'
import { Menu } from 'components/Menu'
import { Search } from 'components/Search'
import { MainSection1 } from 'components/main/MainSection1'
import { CommonContext, CommonProvider } from 'contexts/CommonProvider'
import { MainProvider } from 'contexts/MainProvider'
import React, { useContext } from 'react'

type Credits = {
    enabled?: boolean;
    position?: "left" | "right";
};

const credits: Credits = {
    enabled: true,
    position: "left",
};

export const Main2 = () => {
    const commonData = useContext(CommonContext);

    const leaveSection = (origin: any, destination: any, direction: any) => {
        if(destination.index === 0) {
            commonData?.handleHeaderColor(true);
        }else{
            commonData?.handleHeaderColor(false);
        }
    }

    return (
        <CommonProvider>
            <MainProvider>
                <Header headerType='fixedTypeA'/>
                <Search/>
                <Menu/>
                <ReactFullpage
                    licenseKey = {'YOUR_KEY_HERE'}
                    credits={credits}
                    navigation={commonData?.commonPopup === ""}
                    onLeave={leaveSection}
                    render={({ state, fullpageApi }) => {
                        return (
                            <ReactFullpage.Wrapper>
                                <MainSection1 />
                            </ReactFullpage.Wrapper>
                        )
                    }} />
            </MainProvider>
        </CommonProvider>
    )
}
