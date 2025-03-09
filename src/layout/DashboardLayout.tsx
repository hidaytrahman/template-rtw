import { Box, Container, Grid2 as Grid, Typography } from "@mui/material";
import { NavLink, Outlet } from "react-router";
import { DASHBOARD_NESTED_ROUTES } from "../config/router.config";

export default function DashboardLayout() {
	return (
		<Container maxWidth="lg">
			<Box p={2}>
				<Typography variant="h1">Dashboard</Typography>
			</Box>

			<Grid container spacing={2}>
				<Grid size={4} sx={{ background: "#f3f3f3" }} p={2} minHeight={400}>
					{/* Navigation for the dashboard */}
					<Box display={"flex"} flexDirection={"column"}>

						{DASHBOARD_NESTED_ROUTES.map(({ name, title, path }) => (
							<NavLink key={name} to={path}>
								{title}
							</NavLink>
						))}
					</Box>
				</Grid>
				<Grid size={8} sx={{ background: "#f3f3f3" }} p={2}>
					{/* will either be <Home/> or <Settings/> */}
					<Outlet />
				</Grid>

			</Grid>
		</Container>
	);
}
