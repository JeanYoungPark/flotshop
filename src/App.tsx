import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Main } from 'pages/Main';
import { ProductList } from 'pages/ProductList';
import { ProductWrite } from 'pages/admin/ProductWrite';
import { ProductView } from 'pages/ProductView';
import { Login } from 'pages/admin/Login';
import { ProductList as adminProductList } from 'pages/admin/ProductList';
import { Option } from 'pages/admin/Option';

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
                        <Route path=":category" >
                            <Route path="" Component={adminProductList}/>
                            <Route path=":num/modify" Component={ProductWrite} />
                        </Route>
                        <Route path="write" Component={ProductWrite} />
                    </Route>
                    <Route path='option' Component={Option} />
                </Route>
            </Routes>
        </BrowserRouter>
    );
}

export default App;
