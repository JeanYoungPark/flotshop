import "../assets/css/common.css";
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { CommonProvider } from "../context/CommonProvider";
import { MainComponent } from "../components/Main/MainComponent";
import { MainProvider } from "../context/MainProvider";


export const Main = () => {

    return (
        <CommonProvider>
            <MainProvider>
                <MainComponent />
            </MainProvider>
        </CommonProvider>
    )
}
