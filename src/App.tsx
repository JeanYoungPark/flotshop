import { Routes, Route } from 'react-router-dom';
import { Main } from 'pages/user/Main';
import { ProductList } from 'pages/user/ProductList';
import { ProductWrite } from 'pages/admin/ProductWrite';
import { ProductView } from 'pages/user/ProductView';
import { Login } from 'pages/admin/Login';
import { ProductList as AdminProductList } from 'pages/admin/ProductList';
import { Option } from 'pages/admin/Option';
import { QnAList } from 'pages/admin/QnAList';
import { ReviewList } from 'pages/admin/ReviewList';
import { QnAView } from 'pages/admin/QnAView';
import { ReviewView } from 'pages/admin/ReviewView';
import { EventList } from 'pages/user/EventList';
import { CollectionList } from 'pages/user/CollectionList';
import { Review } from 'pages/user/Review';
import { Notice } from 'pages/user/Notice';
import { FAQ } from 'pages/user/FAQ';
import { Qna } from 'pages/user/Qna';
import { Video } from 'pages/user/Video';
import { OffLine } from 'pages/user/OffLine';
import { AdminList } from 'pages/admin/AdminList';
import { AdminModify } from 'pages/admin/AdminModify';
import { Category } from 'pages/admin/Category';
import { Introduce } from 'pages/user/Introduce';
import { AdminLayout } from 'components/admin/AdminLayout';
import { AdminJoin } from 'pages/admin/AdminJoin';
import { ProductAdd } from 'pages/admin/ProductAdd';

function App() {
    return (
        <Routes>
            <Route path="/" element={<Main/>} />
            
            <Route path="/products">
                <Route path=":category">
                    <Route path="" element={<ProductList/>} />
                    <Route path=":num" element={<ProductView/>} />
                </Route>
            </Route>

            <Route path="/events" element={<EventList/>}/>
            <Route path="/collections" element={<CollectionList/>}/>

            <Route path="/board">
                <Route path="review" element={<Review/>}/>
                <Route path="notice" element={<Notice/>}/>
                <Route path="faq" element={<FAQ/>}/>
                <Route path="qna" element={<Qna/>}/>
            </Route>

            <Route path="/about">
                <Route path="introduce" element={<Introduce/>}/>
                <Route path="videoIntroduce" element={<Video/>}/>
                <Route path="offline" element={<OffLine/>}/>
            </Route>

            <Route path="/admin" element={<AdminLayout/>}>
                <Route path="login" element={<Login/>}/>
                <Route path="join" element={<AdminJoin/>} />
                <Route path="user">
                    <Route path="list" element={<AdminList/>} />
                    <Route path="modify/:id" element={<AdminModify/>} />
                </Route>
                <Route path="products">
                    <Route path=":categoryId" >
                        <Route path="" element={<AdminProductList/>}/>
                        <Route path="modify/:id" element={<ProductWrite/>} />
                    </Route>
                    <Route path="add" element={<ProductAdd/>} />
                </Route>
                <Route path="option" element={<Option/>} />
                <Route path="category" element={<Category/>} />
                <Route path="qna" >
                    <Route path="" element={<QnAList/>}/>
                    <Route path="view/:id" element={<QnAView/>}/>
                </Route>
                <Route path="review" >
                    <Route path="" element={<ReviewList/>}/>
                    <Route path="view/:id" element={<ReviewView/>}/>
                </Route>
            </Route>
        </Routes>
    );
}

export default App;
