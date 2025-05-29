import { BrowserRouter, Route, Routes } from 'react-router'
import { Box, ThemeProvider } from '@mui/material'
import { configureRoute, DASHBOARD_NESTED_ROUTES, MAIN_ROUTES } from './config/router.config'
import { theme } from './utils/theme.utils'
import ErrorBoundary from './ErrorBoundary'
import { Navigation } from './components'
import Footer from './components/Footer/Footer'
import DashboardLayout from './layout/DashboardLayout'

export default function Root() {
	return (
		<main>
			<BrowserRouter>
			<ThemeProvider theme={theme}>
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
			</ThemeProvider>
			</BrowserRouter>
		</main>
	)
}

