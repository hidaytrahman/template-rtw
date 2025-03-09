import { BrowserRouter, Link, NavLink, Outlet, Route, Routes } from 'react-router'
import Landing from './views/Landing/Landing'
import About from './views/About'
import { Typography } from '@mui/material'

export default function Root() {
	return (
		<div>
			{/* <NavLink
				to="/"
				className={({ isActive }) =>
					isActive ? "active" : ""
				}
			>
				Home
			</NavLink>

			<NavLink
				to="/"
				className={({ isActive }) =>
					isActive ? "active" : ""
				}
			>
				About
			</NavLink> */}
			
			<Typography>Welcome</Typography>

			<Outlet />

			<BrowserRouter>
				<Routes>
					<Route index element={<Landing />} />
					<Route path="about" element={<About />} />

				</Routes>
			</BrowserRouter>


		</div>
	)
}
