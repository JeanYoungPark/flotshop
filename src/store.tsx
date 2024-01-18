import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { adminMenuReducer } from "reducers/adminMenuReducer";
import { userReducer } from "reducers/userReducer";
import { persistStore } from "redux-persist";
import persistReducer from "redux-persist/es/persistReducer";
import storage from "redux-persist/lib/storage";

const rootReducer = combineReducers({
    adminMenu: adminMenuReducer,
    userInfo: userReducer
});

const persistConfig = {
    key: "root",
    storage, // 로컬 스토리지에 저장
    whitelist: ["adminMenu", "userInfo"],
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
    reducer: persistedReducer,
    middleware: (defaultMiddleware) =>
        defaultMiddleware({
            serializableCheck: false
        })
});

// useSelector로 스토어에 접근할 때 필요
export type RootState = ReturnType<typeof rootReducer>;

export const persistor = persistStore(store);