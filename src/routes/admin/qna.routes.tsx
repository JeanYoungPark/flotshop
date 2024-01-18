import { QnaList } from "pages/admin/qna/QnaList"
import { QnaView } from "pages/admin/qna/QnaView"
import { Route, Routes } from "react-router-dom"

export const QnaRoutes = () => {
    return (
        <Routes>
            <Route path="" element={<QnaList/>}/>
            <Route path="view/:id" element={<QnaView/>}/>
        </Routes>
    )
}