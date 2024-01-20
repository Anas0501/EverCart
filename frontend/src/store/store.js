import { configureStore } from "@reduxjs/toolkit";

import auth from "./reducers/auth";

const store = configureStore({
	reducer: {
		auth
	},
	middleware: (getDefaultMiddleware) => getDefaultMiddleware(),
});

export default store;