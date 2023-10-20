import React, { ReactNode, createContext, useState } from 'react'

interface contextTypes {
    headerColor: boolean;
    commonPopup: String;
    handleHeaderColor: Function;
    handleCommonPopup: Function;
}

export const CommonContext = createContext<contextTypes | undefined>(undefined);

export const CommonProvider = ({children}: { children: ReactNode }) => {

    const [headerColor, setHeaderColor] = useState<boolean>(true);
    const [commonPopup, setCommonPopup] = useState<String>("");

    /* 헤더 색상 변경 */
    const handleHeaderColor = (bool: boolean) => {
        setHeaderColor(bool);
    }

    /* 공통 팝업 노출 설정 */
    const handleCommonPopup = (type: String) => {
        setCommonPopup(type);
    };

    const contextValue = {
        headerColor : headerColor,
        commonPopup : commonPopup,
        handleHeaderColor : handleHeaderColor,
        handleCommonPopup : handleCommonPopup
      };
      
    return (
        <CommonContext.Provider value={contextValue}>{children}</CommonContext.Provider>
    )
}
