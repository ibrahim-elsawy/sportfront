import { configureStore } from '@reduxjs/toolkit'
import challangesReducer from './challangesSlice';
import routingReducer from './routingSlice';
import profileReducer from './profileSlice';

export default configureStore({ 
    reducer: { 
        challanges: challangesReducer,
        routing: routingReducer,
        profile: profileReducer,
    }
})