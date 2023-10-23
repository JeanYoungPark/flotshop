import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Main } from 'pages/Main';
import { Product } from 'pages/Product';

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" Component={Main} />
                <Route path="/products/:category" Component={Product} />
            </Routes>
        </BrowserRouter>
    );
}

export default App;
