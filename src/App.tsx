import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Main } from 'pages/Main';
import { ProductList } from 'pages/ProductList';
import { ProductSetting } from 'pages/admin/ProductSetting';
import { ProductView } from 'pages/ProductView';
import { Login } from 'pages/admin/Login';
import { ProductList as adminProductList } from 'pages/admin/ProductList';

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" Component={Main} />
                
                <Route path="/products">
                    <Route path=":category">
                        <Route path="" Component={ProductList} />
                        <Route path=":num" Component={ProductView} />
                    </Route>
                </Route>

                <Route path="/admin">
                    <Route path="login" Component={Login}/>
                    <Route path="products">
                        <Route path="list" Component={adminProductList} />
                        <Route path="setting" Component={ProductSetting} />
                    </Route>
                </Route>
            </Routes>
        </BrowserRouter>
    );
}

export default App;
