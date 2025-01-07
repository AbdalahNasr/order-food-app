
import { Environments } from '@/components/constants/enum';
import { configureStore} from '@reduxjs/toolkit'
import  createReducer from './features/cart/cartSlice'

export const store = configureStore({
    reducer: {
        cart: createReducer
    },
    devTools: process.env.NODE_ENV === Environments.DEV
})

export type RootState =  ReturnType< typeof store.getState>
export type  AppDispatch=   typeof store.dispatch ;