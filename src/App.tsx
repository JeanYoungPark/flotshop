import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Main } from 'pages/Main';
import { ProductList } from 'pages/ProductList';
import { ProductWrite } from 'pages/admin/ProductWrite';
import { ProductView } from 'pages/ProductView';
import { Login } from 'pages/admin/Login';
import { ProductList as AdminProductList } from 'pages/admin/ProductList';
import { Option } from 'pages/admin/Option';
import { AdminLayout } from 'components/admin/AdminLayout';
import { QnAList } from 'pages/admin/QnAList';
import { ReviewList } from 'pages/admin/ReviewList';
import { QnAView } from 'pages/admin/QnAView';
import { ReviewView } from 'pages/admin/ReviewView';
import { EventList } from 'pages/EventList';
import { CollectionList } from 'pages/CollectionList';
import { Review } from 'pages/Review';
import { Notice } from 'pages/Notice';
import { FAQ } from 'pages/FAQ';
import { Qna } from 'pages/Qna';
import { Introduce } from 'pages/Introduce';
import { Video } from 'pages/Video';
import { OffLine } from 'pages/OffLine';

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
                    <Route path="products">
                        <Route path=":category" >
                            <Route path="" element={<AdminProductList/>}/>
                            <Route path="modify/:id" element={<ProductWrite/>} />
                        </Route>
                        <Route path="write" element={<ProductWrite/>} />
                    </Route>
                    <Route path="option" element={<Option/>} />
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
        </BrowserRouter>
    );
}

export default App;
