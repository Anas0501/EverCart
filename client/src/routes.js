import { createBrowserRouter } from "react-router-dom";
import routes from "./config/routes";

// All the Pages in the App
import HomePage from "./Pages/HomePage";
import LoginUserPage from "./Pages/LoginUserPage";
import RegisterUserPage from "./Pages/RegisterUserPage";
import BlogsPage from "./Pages/BlogsPage";
import AboutPage from "./Pages/AboutPage";
import ContactUsPage from "./Pages/ContactUsPage";
import FaqsPage from "./Pages/FaqsPage";
import CartPage from "./Pages/CartPage";
import ProfilePage from "./Pages/ProfilePage";
import SettingsPage from "./Pages/SettingsPage";

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
	{
		path: routes.BOLGS,
		element: <BlogsPage />
	},
	{
		path: routes.ABOUT,
		element: <AboutPage />
	},
	{
		path: routes.CONTACT_US,
		element: <ContactUsPage />
	},
	{
		path: routes.FAQS,
		element: <FaqsPage />
	},
	{
		path: routes.CART,
		element: <CartPage />
	},
	{
		path: routes.PROFILE,
		element: <ProfilePage />
	},
	{
		path: routes.SETTINGS,
		element: <SettingsPage />
	},
])

export default router;