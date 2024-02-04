import React from 'react';
import ReactFullpage from "@fullpage/react-fullpage"
import { Footer } from 'components/Footer'
import { useDispatch, useSelector } from 'react-redux'
import { RootState } from 'store'
import { FirstSlideComponent } from './FirstSlideComponent'
import { SecondSlideComponent } from './SecondSlideComponent'
import { ThirdSlideComponent } from './ThirdSlideComponent'
import { FourthSlideComponent } from './FourthSlideComponent'
import { FifthSlideComponent } from './FifthSlideComponent'
import { SixthSlideComponent } from './SixthSlideComponent'
import { SeventhSlideComponent } from './SeventhSlideComponent'
import { EighthSlideComponent } from './EighthSlideComponent'

type Credits = {
    enabled?: boolean;
    position?: "left" | "right";
};

const credits: Credits = {
    enabled: true,
    position: "left",
};

export const MainComponent = () => {
    const popup = useSelector((state: RootState) => state.userHeader.popup)
    const dispatch = useDispatch();

    const leaveSection = (origin: any, destination: any, direction: any) => {
        if(destination.index === 0) {
            dispatch({type: 'setColor', color: true})
        }else{
            dispatch({type: 'setColor', color: false})
        }
    }
    
    return (
        <>
            <ReactFullpage
                licenseKey = {'YOUR_KEY_HERE'}
                credits={credits}
                navigation={popup === ""}
                onLeave={leaveSection}
                scrollOverflow = {false}
                fitToSection={true}
                render={({ state, fullpageApi }) => {
                    return (
                        <ReactFullpage.Wrapper>
                            <div className="section first">
                                <FirstSlideComponent />
                            </div>
                            <div className="section second">
                            <SecondSlideComponent />  
                            </div>
                            <div className="section third">
                                <ThirdSlideComponent />
                            </div>
                            <div className="section fourth">
                                <FourthSlideComponent />
                            </div>
                            <div className="section fifth">
                                <FifthSlideComponent />
                            </div>
                            <div className="section sixth">
                                <SixthSlideComponent />
                            </div>
                            <div className="section seventh">
                                <SeventhSlideComponent />
                            </div>
                            <div className="section eighth">
                                <EighthSlideComponent />
                            </div>
                            <div className="section footer">
                                <Footer />
                            </div>
                        </ReactFullpage.Wrapper>
                    )
                }}
            />
        </>
    )
}
