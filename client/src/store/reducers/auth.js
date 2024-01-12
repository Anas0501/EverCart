import { createSlice } from "@reduxjs/toolkit";

const authSlice = createSlice({
	name: "auth",
	initialState: {
		user: null,
		isAuthenticated: false,
		idToken: null,
		loading: true,
		error: null,
	},
	reducers: {

	}
});

export default authSlice.reducer;
export const authAction = authSlice.actions;