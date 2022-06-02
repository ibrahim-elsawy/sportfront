import { createSlice } from '@reduxjs/toolkit';


const initialState = {}

const profileSlice = createSlice({
	name: 'profile',
	initialState,
	reducers: {
		profileAdded(state, action) {
			state.current = action.payload;
		}
	}
})

export const {profileAdded} = profileSlice.actions;
export default profileSlice.reducer;