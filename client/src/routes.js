import { createBrowserRouter } from "react-router-dom";
import routes from "./config/routes";

// All the Pages in the App
import HomePage from "./Pages/HomePage";
import LoginUserPage from "./Pages/LoginUserPage";
import RegisterUserPage from "./Pages/RegisterUserPage";

const router = createBrowserRouter([
	{
		path: routes.HOMEPAGE_PAGE,
		component: <HomePage />,
	},
	{
		path: routes.LOGIN_PAGE,
		component: <LoginUserPage />,
	},
	{
		path: routes.REGISTER_PAGE,
		component: <RegisterUserPage />,
	},
])

export default router;