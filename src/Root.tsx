import { BrowserRouter, Route, Routes } from 'react-router'
import ErrorBoundary from './ErrorBoundary'
import { Navigation } from './components'
import Footer from './components/Footer/Footer'
import DashboardLayout from './layout/DashboardLayout'
import { configureRoute, DASHBOARD_NESTED_ROUTES, MAIN_ROUTES } from './config/router.config'

export default function Root() {
	return (
		<main>
			<BrowserRouter>
				<ErrorBoundary>
					<Navigation />
				</ErrorBoundary>

				{/* Recommend to use  ErrorBoundary to the specific section*/}
				<ErrorBoundary>
					<Routes>
						{configureRoute(MAIN_ROUTES)}

						{/* dashboard nested routes */}
						<Route path="dashboard" element={<DashboardLayout />}>
							{configureRoute(DASHBOARD_NESTED_ROUTES)}
						</Route>
					</Routes>
				</ErrorBoundary>


				<ErrorBoundary>
					<Footer />
				</ErrorBoundary>
			</BrowserRouter>
		</main>
	)
}

