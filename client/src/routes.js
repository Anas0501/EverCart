import { createBrowserRouter } from "react-router-dom";
import routes from "./config/routes";

// All the Pages in the App
import HomePage from "./Pages/HomePage";
import LoginUserPage from "./Pages/LoginUserPage";
import RegisterUserPage from "./Pages/RegisterUserPage";

// Router
const router = createBrowserRouter([
	{
		path: routes.HOMEPAGE,
		element: <HomePage />,
	},
	{
		path: routes.LOGIN_PAGE,
		element: <LoginUserPage />,
	},
	{
		path: routes.REGISTER_PAGE,
		element: <RegisterUserPage />,
	},
])

export default router;