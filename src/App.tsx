import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Main } from 'pages/Main';
import { ProductList } from 'pages/ProductList';
import { ProductWrite } from 'pages/admin/ProductWrite';
import { ProductView } from 'pages/ProductView';
import { Login } from 'pages/admin/Login';
import { ProductList as AdminProductList } from 'pages/admin/ProductList';
import { Option } from 'pages/admin/Option';
import { AdminLayout } from 'components/admin/AdminLayout';

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Main/>} />
                
                <Route path="/products">
                    <Route path=":category">
                        <Route path="" element={<ProductList/>} />
                        <Route path=":num" element={<ProductView/>} />
                    </Route>
                </Route>

                <Route path="/admin" element={<AdminLayout/>}>
                    <Route path="login" element={<Login/>}/>
                    <Route path="products">
                        <Route path=":category" >
                            <Route path="" element={<AdminProductList/>}/>
                            <Route path=":num/modify" element={<ProductWrite/>} />
                        </Route>
                        <Route path="write" element={<ProductWrite/>} />
                    </Route>
                    <Route path='option' element={<Option/>} />
                </Route>
            </Routes>
        </BrowserRouter>
    );
}

export default App;
