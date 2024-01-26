import { ProductList } from "pages/user/product/ProductList"
import { ProductView } from "pages/user/product/ProductView"
import { Route, Routes } from "react-router-dom"

export const ProductRoutes = () => {
    return (
        <Routes>
            <Route path=":categoryId">
                <Route path="" element={<ProductList/>} />
                <Route path="view/productId" element={<ProductView/>} />
                <Route path=":subCategoryId" element={<ProductList/>}>
                    <Route path="view/productId" element={<ProductView/>} />
                </Route>
            </Route>
        </Routes>
    )
}