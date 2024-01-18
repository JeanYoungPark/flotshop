import { Join } from "pages/admin/Join"
import { Login } from "pages/admin/Login"
import { Route, Routes } from "react-router-dom"
import { ProductRoutes } from "./products.routes"
import { Option } from "pages/admin/Option"
import { QnaRoutes } from "./qna.routes"
import { ReviewRoutes } from "./reviews.routes"
import { UserRoutes } from "routes/user"
import { Category } from "pages/admin/Category"

export const AdminRoutes = () => {
    return (
        <Routes>
            <Route path="login" element={<Login/>} />
            <Route path="join" element={<Join/>} />
            <Route path="user" element={<UserRoutes/>} />
            <Route path="products" element={<ProductRoutes/>}/>
            <Route path="option" element={<Option/>} />
            <Route path="category" element={<Category/>} />
            <Route path="qna" element={<QnaRoutes/>} />
            <Route path="review" element={<ReviewRoutes/>} />
        </Routes>
    )
}