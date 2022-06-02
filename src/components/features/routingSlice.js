import { createSlice } from '@reduxjs/toolkit';


const initialState = {
	"0": "dashboard",
	"1": "challanges",
	"2": "statistics",
	"3": "saved",
	"4": "settings",
	"5": "profile",
	"current": "0",
}

const routingSlice = createSlice({
	name: 'routing',
	initialState,
	reducers: {
		routingAdded(state, action) {
			state.current = action.payload;
		}
	}
})

export const {routingAdded} = routingSlice.actions;
export default routingSlice.reducer;