import { ROUTE } from "../types";
import About from "../views/About";
import { Home, Settings } from "../views/Dashboard";
import Landing from "../views/Landing/Landing";


export const MAIN_ROUTES: ROUTE[] = [
	{
		path: '/',
		index: true,
		name: 'landing',
		element: <Landing />,
	},
	{
		path: '/about',
		name: 'about',
		element: <About />,
	}
]


export const DASHBOARD_NESTED_ROUTES: ROUTE[] = [
	{
		index: true,
		name: 'Dashboard',
		element: <Home />,
	},
	{
		path: 'settings',
		name: 'settings',
		element: <Settings />,
	}
]