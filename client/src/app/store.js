import { combineReducers, configureStore } from "@reduxjs/toolkit"; 
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

// Perhaps combine all reducers and persist? 
// even persist user so we don't save user data in localStorage?
// combineReducers from rootReducer
const rootReducer = combineReducers({
    auth: authReducer, 
    products: productsReducer, 
    cart: cartReducer, 
}); 

const persistConfig = {
    key: 'root',
    storage,
}
  
// const persistedReducer = persistReducer(persistConfig, cartReducer)
const persistedReducer = persistReducer(persistConfig, rootReducer)

export const store = configureStore({
    // reducer: {
    //     auth: authReducer, 
    //     products: productsReducer, 
    //     cart: persistedReducer, 
    // },
    reducer: persistedReducer, 
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: {
                ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
            },
        }),
}); 

export const persistor = persistStore(store) 