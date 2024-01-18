import { FAQ } from "pages/user/board/FAQ"
import { Notice } from "pages/user/board/Notice"
import { Qna } from "pages/user/board/Qna"
import { Review } from "pages/user/board/Review"
import { Route, Routes } from "react-router-dom"

export const BoardRoutes = () => {
    return (
        <Routes>
            <Route path="review" element={<Review/>}/>
            <Route path="notice" element={<Notice/>}/>
            <Route path="faq" element={<FAQ/>}/>
            <Route path="qna" element={<Qna/>}/>
        </Routes>
    )
}