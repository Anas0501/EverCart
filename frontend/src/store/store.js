import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit"

import auth from "./reducers/auth";

const store = configureStore({
	reducer: {
		auth
	},
	middleware: [...getDefaultMiddleware()],
});

export default store;