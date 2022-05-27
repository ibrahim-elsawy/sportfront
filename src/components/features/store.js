import { configureStore } from '@reduxjs/toolkit'
import challangesReducer from './challangesSlice'

export default configureStore({ 
    reducer: { 
        challanges: challangesReducer 
    }
})