import { Introduce } from "pages/user/about/Introduce"
import { OffLine } from "pages/user/about/OffLine"
import { Video } from "pages/user/about/Video"
import { Route, Routes } from "react-router-dom"

export const AboutRoutes = () => {
    return (
        <Routes>
            <Route path="introduce" element={<Introduce/>}/>
            <Route path="videoIntroduce" element={<Video/>}/>
            <Route path="offline" element={<OffLine/>}/>
        </Routes>
    )
}