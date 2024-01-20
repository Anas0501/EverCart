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
		requestStart(state, action) {
			state.loading = true;
		},
		loadUser(state, action) {
			state.user = action.payload.user;
			state.idToken = action.payload.idToken;
			state.isAuthenticated = true;
			state.loading = false;
		},
		logout(state, action) {
			state.user = null;
			state.isAuthenticated = false;
			state.idToken = null;
			state.loading = false;
			state.error = null;
		},
		resetAuth(state, action) {
			state.user = null;
			state.isAuthenticated = false;
			state.idToken = null;
			state.loading = false;
			state.error = null;
		},
		requestFail(state, action) {
			state.loading = false;
			state.error = action.payload;
		}
	},
});

export default authSlice.reducer;
export const authActions = authSlice.actions;