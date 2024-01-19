import { Main } from "pages/user/Main"
import { Route, Routes } from "react-router-dom"
import { EventList } from "pages/user/EventList"
import { CollectionList } from "pages/user/CollectionList"
import { ProductRoutes } from "./products.routes"
import { BoardRoutes } from "./boards.routes"
import { AboutRoutes } from "./about.routes"
import { Main2 } from "pages/user/Main2"

export const UserRoutes = () => {
    return (
        <Routes>
            {/* <Route path="/" element={<Main/>}/> */}
            <Route path="/" element={<Main2/>}/>
            <Route path="/products/" element={<ProductRoutes />} />
            <Route path="/events" element={<EventList/>} />
            <Route path="/collections" element={<CollectionList/>} />
            <Route path="/board/" element={<BoardRoutes />} />
            <Route path="/about/" element={<AboutRoutes/>} />
        </Routes>
    )
}