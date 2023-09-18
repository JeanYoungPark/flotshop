import "../assets/css/common.css";
import ReactFullpage from "@fullpage/react-fullpage";

export const Main = () => {
    type Credits = {
        enabled?: boolean;
        label?: string;
        position?: "left" | "right";
    };

    const credits: Credits = {
        enabled: true,
        label: "my custom",
        position: "left",
    };

    return (
        <>
            <nav id="header">
                <h1>logo</h1>
                <ul>
                    <li><span>의류</span></li>
                    <li><span>산책</span></li>
                    <li><span>리빙</span></li>
                    <li><span>EVENT</span></li>
                    <li><span>COLLECTION</span></li>
                    <li><span>COMMUNITY</span></li>
                    <li><span>ABOUT</span></li>
                </ul>
                <div>
                    <span>돋보기</span>
                    <span>장바구니</span>
                    <span>메뉴</span>
                </div>
            </nav>
            <ReactFullpage
                credits={credits}
                render={(comp: any) => (
                    <ReactFullpage.Wrapper>
                        <div className="section">
                            <h1>1</h1>
                        </div>
                        <div className="section">
                            <h1>2</h1>
                        </div>
                        <div className="section">
                            <h1>3</h1>
                        </div>
                    </ReactFullpage.Wrapper>
                )}
            />
        </>
    )
}
