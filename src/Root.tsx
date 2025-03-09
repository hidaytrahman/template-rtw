import { BrowserRouter, Route, Routes } from 'react-router'
import ErrorBoundary from './ErrorBoundary'
import { Navigation } from './components'
import Footer from './components/Footer/Footer'
import DashboardLayout from './layout/DashboardLayout'
import { configureRoute, DASHBOARD_NESTED_ROUTES, MAIN_ROUTES } from './config/router.config'
import { Box } from '@mui/material'

export default function Root() {
	return (
		<main>
			<BrowserRouter>
				<ErrorBoundary>
					<Navigation />
				</ErrorBoundary>

				{/* Recommend to use  ErrorBoundary to the specific section*/}
				<ErrorBoundary>
					<Box component="section" minHeight="60vh">
						<Routes>
							{configureRoute(MAIN_ROUTES)}

							{/* dashboard nested routes */}
							<Route path="dashboard" element={<DashboardLayout />}>
								{configureRoute(DASHBOARD_NESTED_ROUTES)}
							</Route>
						</Routes>
					</Box>
				</ErrorBoundary>


				<ErrorBoundary>
					<Footer />
				</ErrorBoundary>
			</BrowserRouter>
		</main>
	)
}

