import { BrowserRouter, Route, Routes } from 'react-router'
import Landing from './views/Landing/Landing'
import About from './views/About'
import ErrorBoundary from './ErrorBoundary'
import { Navigation } from './components'
import Dashboard from './views/Dashboard'
import Home from './views/Dashboard/Home'
import Settings from './views/Dashboard/Settings'
import Footer from './components/Footer/Footer'

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

							{/* dashboard nested routes */}
							<Route path="dashboard" element={<Dashboard />}>
								<Route index element={<Home />} />
								<Route path="settings" element={<Settings />} />
							</Route>
						</Routes>

						<Footer />

					</BrowserRouter>
				</article>

			</>
		</ErrorBoundary>
	)
}
