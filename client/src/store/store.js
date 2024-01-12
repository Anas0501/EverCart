import { configureStore, getDefaultMiddleware,  } from "@reduxjs/toolkit"

// All the reducers
import auth from './reducers/auth';

export const store = configureStore({
	reducer: {
		auth,
	},
	middleware: (getDefaultMiddleware) => [...getDefaultMiddleware()],
});

export default store;