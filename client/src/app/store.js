import { configureStore } from "@reduxjs/toolkit"; 
import authReducer from "../redux/auth/authSlice"; 
import productsReducer from "../redux/products/productsSlice"; 
import cartReducer from "../redux/cart/cartSlice"; 
import {
    persistStore,
    persistReducer,
    FLUSH,
    REHYDRATE,
    PAUSE,
    PERSIST,
    PURGE,
    REGISTER,
} from 'redux-persist';
import storage from "redux-persist/lib/storage"; 

const persistConfig = {
    key: 'root',
    storage,
}
  
const persistedReducer = persistReducer(persistConfig, cartReducer)

export const store = configureStore({
    reducer: {
        auth: authReducer, 
        products: productsReducer, 
        cart: persistedReducer, 
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: {
                ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
            },
        }),
}); 

export const persistor = persistStore(store) 