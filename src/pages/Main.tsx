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
                <h1 className="logo">logo</h1>
                <ul className="menu">
                    <li>
                        <span>의류</span>
                        <dl className="subMenu">
                            <dt><span>전체상품</span></dt>
                            <dt><span>민소매/나시</span></dt>
                            <dt><span>티셔츠</span></dt>
                            <dt><span>후드</span></dt>
                            <dt><span>아우터</span></dt>
                            <dt><span>악세사리</span></dt>
                        </dl>
                    </li>
                    <li><span>산책</span></li>
                    <li><span>리빙</span></li>
                    <li><span>EVENT</span></li>
                    <li><span>COLLECTION</span></li>
                    <li>
                        <span>COMMUNITY</span>
                        <dl className="subMenu">
                            <dt><span>공지사항</span></dt>
                            <dt><span>자주묻는질문</span></dt>
                            <dt><span>협업문의</span></dt>
                            <dt><span>상품후기</span></dt>
                            <dt><span>문의하기</span></dt>
                        </dl>
                    </li>
                    <li>
                        <span>ABOUT</span>
                        <dl className="subMenu">
                            <dt><span>회사소개</span></dt>
                            <dt><span>영상소개</span></dt>
                            <dt><span>오프라인 스토어</span></dt>
                        </dl>
                    </li>
                </ul>
                <div className="icons">
                    <span>돋보기</span>
                    <span>장바구니</span>
                    <span>메뉴</span>
                </div>
            </nav>
            <ReactFullpage
                licenseKey = {'YOUR_KEY_HERE'}
                credits={credits}
                render={({ state, fullpageApi }) => (
                    <ReactFullpage.Wrapper>
                         <div className="section">
                            <p>Section 1 (welcome to fullpage.js)</p>
                            <button onClick={() => fullpageApi.moveSectionDown()}>
                            Click me to move down
                            </button>
                        </div>
                        <div className="section">
                            <p>Section 2</p>
                        </div>
                    </ReactFullpage.Wrapper>
                )}
            />
        </>
    )
}