import { ProductAdd } from "pages/admin/product/ProductAdd"
import { ProductList } from "pages/admin/product/ProductList"
import { ProductWrite } from "pages/admin/product/ProductWrite"
import { Route, Routes } from "react-router-dom"

export const ProductRoutes = () => {
    return (
        <Routes>
            <Route path=":categoryId" >
                <Route path="" element={<ProductList/>}/>
                <Route path="modify/:id" element={<ProductWrite/>} />
            </Route>
            <Route path="add" element={<ProductAdd/>} />
        </Routes>
    )
}