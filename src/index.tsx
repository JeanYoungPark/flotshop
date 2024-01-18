import React from 'react';
import ReactDOM from 'react-dom/client';
import App from 'App';
import reportWebVitals from 'reportWebVitals';
import 'index.css';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { persistor, store } from 'store';
import { PersistGate } from 'redux-persist/integration/react';
import { CookiesProvider } from 'react-cookie';
import { QueryClient, QueryClientProvider } from 'react-query';

const root = ReactDOM.createRoot(
    document.getElementById('root') as HTMLElement
);

const queryClient = new QueryClient();

root.render(
    <Provider store={store}>
        <CookiesProvider>
            <PersistGate loading={null} persistor={persistor}>
                <QueryClientProvider client={queryClient}>
                    <BrowserRouter>
                    {/* <React.StrictMode> */}
                        <App />
                    {/* </React.StrictMode> */}
                    </BrowserRouter>
                </QueryClientProvider>
            </PersistGate>
        </CookiesProvider>
    </Provider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
