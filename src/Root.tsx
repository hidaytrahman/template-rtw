import { BrowserRouter, Route, Routes } from 'react-router'
import ErrorBoundary from './ErrorBoundary'
import { Navigation } from './components'
import Footer from './components/Footer/Footer'
import DashboardLayout from './layout/DashboardLayout'
import { DASHBOARD_NESTED_ROUTES, MAIN_ROUTES } from './config/router.config'

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
						{
							MAIN_ROUTES.map((route) =>
								<Route key={route.name}
									{...(route.index && { index: true })}
									path={route.path}
									element={route.element} />)
						}

						{/* dashboard nested routes */}
						<Route path="dashboard" element={<DashboardLayout />}>
							{
								DASHBOARD_NESTED_ROUTES.map((route) =>
									<Route key={route.name}
										{...(route.index && { index: true })}
										path={route.path} element={route.element} />)
							}
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

