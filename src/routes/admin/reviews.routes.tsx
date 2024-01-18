import { ReviewList } from "pages/admin/review/ReviewList"
import { ReviewView } from "pages/admin/review/ReviewView"
import { Route, Routes } from "react-router-dom"

export const ReviewRoutes = () => {
    return (
        <Routes>
            <Route path="" element={<ReviewList/>}/>
            <Route path="view/:id" element={<ReviewView/>}/>
        </Routes>
    )
}