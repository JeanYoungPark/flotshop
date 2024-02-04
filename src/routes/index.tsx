import { Routes, Route } from "react-router-dom"
import { UserRoutes } from "./user"

export const RootRoutes = () => {
    return (
        <Routes>
            <Route path="*" element={<UserRoutes/>}/>
        </Routes>
    )
}