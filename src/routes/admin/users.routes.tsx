import { List } from "pages/admin/user/list"
import { Modify } from "pages/admin/user/Modify"
import { Route, Routes } from "react-router-dom"

export const UserRoutes = () => {
    return (
        <Routes>
            <Route path="list" element={<List/>} />
            <Route path="modify/:id" element={<Modify/>} />
        </Routes>
    )
}