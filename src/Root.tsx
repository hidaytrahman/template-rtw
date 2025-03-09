import { BrowserRouter, Link, NavLink, Outlet, Route, Routes } from 'react-router'
import Landing from './views/Landing/Landing'
import About from './views/About'
import { Box, Typography } from '@mui/material'
import ErrorBoundary from './ErrorBoundary'
import { Navigation } from './components'

export default function Root() {
	return (
		<ErrorBoundary>
			<>
				<article>
					<BrowserRouter>
						<Navigation />
						<Routes>
							<Route index element={<Landing />} />
							<Route path="about" element={<About />} />
						</Routes>
					</BrowserRouter>
				</article>

			</>
		</ErrorBoundary>
	)
}
