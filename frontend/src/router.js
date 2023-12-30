import { createBrowserRouter } from "react-router-dom";
import routes from "./config/routes";

import HomePage from './Pages/HomePage';
import SignUpPage from './Pages/SignUpPage';
import SignInPage from './Pages/SignInPage';
import ResetPasswordPage from './Pages/ResetPasswordPage';
import LogoutPage from "./Pages/LogoutPage";

const router = createBrowserRouter([
	{
		path: routes.HOMEPAGE,
		element: <HomePage />
	},
	{
		path: routes.SIGNUP,
		element: <SignUpPage />,
	},
	{
		path: routes.SIGNIN,
		element: <SignInPage />
	},
	{
		path: routes.RESETPASSWORD,
		element: <ResetPasswordPage />
	},
	{
		path: routes.LOGOUT,
		element: <LogoutPage />
	},
]);

export default router