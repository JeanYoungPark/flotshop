import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Main } from './pages/Main';

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" Component={Main} />
            </Routes>
        </BrowserRouter>
    );
}

export default App;
