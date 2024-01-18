import { BrowserRouter } from 'react-router-dom';
import { RootRoutes } from 'routes';

export const App = () => {
    return (
        <BrowserRouter>
            <RootRoutes/>
        </BrowserRouter>
    )
}