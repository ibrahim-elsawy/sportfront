import { createSlice } from '@reduxjs/toolkit';


const initialState = [ 
    { id: '1', description: 'First Post!', url: 'Hello!', admin_id:"fkldjf", users_num:44 }, 
]

const challangesSlice = createSlice({ 
    name: 'challanges', 
    initialState, 
    reducers: {
        challangesAdded(state, action){
            state.push(action.payload)
        }
    }
})

export const {challangesAdded} = challangesSlice.actions;
export default challangesSlice.reducer;