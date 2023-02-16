import {configureStore} from '@reduxjs/toolkit'
import { combineReducers } from '@reduxjs/toolkit'
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'

import cartSlice from './cartSlice'
import { productsCoreApi } from './product-sevices'
const persistConfig = {
    key: 'root',
    storage,
    blacklist: ['productCoreAPI', "shoppingCart"]
}

const reducer = combineReducers({
    shoppingCart: cartSlice.reducer,
    [productsCoreApi.reducerPath]: productsCoreApi.reducer
})

const persistedReducer = persistReducer(persistConfig, reducer)

const store = configureStore({
    reducer: persistedReducer,
    middleware: (getDefaultMiddleware) => {
        return getDefaultMiddleware().concat(productsCoreApi.middleware)
    }
    
})

export const persistor = persistStore(store)
export default store