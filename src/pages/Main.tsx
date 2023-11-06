import "assets/css/common.css";
import 'assets/css/main.css';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { MainComponent } from "components/main/MainComponent";
import { CommonProvider } from "contexts/CommonProvider";
import { MainProvider } from "contexts/MainProvider";
import { Header } from 'components/Header';
import { Search } from 'components/Search';
import { Menu } from 'components/Menu';


export const Main = () => {

    return (
        <CommonProvider>
            <MainProvider>
                <Header headerType='fixedTypeA'/>
                <Search/>
                <Menu/>
                <MainComponent />
            </MainProvider>
        </CommonProvider>
    )
}
