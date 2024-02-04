import { Main } from "pages/user/Main"
import { Route, Routes } from "react-router-dom"
import { CollectionList } from "pages/user/CollectionList"
import { ProductRoutes } from "./products.routes"
import { BoardRoutes } from "./boards.routes"
import { AboutRoutes } from "./about.routes"
import { EventList } from "pages/user/EventList"

export const UserRoutes = () => {
    return (
        <Routes>
            <Route index element={<Main/>}/>
            <Route path="products/*" element={<ProductRoutes />} />
            <Route path="events" element={<EventList/>} />
            <Route path="collections" element={<CollectionList/>} />
            <Route path="board/*" element={<BoardRoutes />} />
            <Route path="about/*" element={<AboutRoutes/>} />
        </Routes>
    )
}