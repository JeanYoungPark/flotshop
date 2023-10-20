import "assets/css/common.css";
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { MainComponent } from "components/Main/MainComponent";
import { CommonProvider } from "contexts/CommonProvider";
import { MainProvider } from "contexts/MainProvider";


export const Main = () => {

    return (
        <CommonProvider>
            <MainProvider>
                <MainComponent />
            </MainProvider>
        </CommonProvider>
    )
}
