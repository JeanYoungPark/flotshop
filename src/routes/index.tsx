import { Routes, Route } from "react-router-dom";
import { UserRoutes } from "./user";
import { AdminRoutes } from "./admin";

export const RootRoutes = () => {
    return (
        <Routes>
            <Route path="/" element={<UserRoutes/>}/>
            <Route path="/admin/" element={<AdminRoutes/>} />
        </Routes>
    )
}