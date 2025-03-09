
import { Box, Container, Typography, Link } from '@mui/material';

function Footer() {
	return (
		<Box
			component="footer"
			sx={{
				backgroundColor: (theme) =>
					theme.palette.mode === 'light'
						? theme.palette.grey[200]
						: theme.palette.grey[800],
				py: 3,
				mt: 'auto', // Push footer to the bottom of the page
			}}
		>
			<Container maxWidth="lg">
				<Typography variant="body1" align="center">
					&copy; {new Date().getFullYear()} Powered By: <a href="https://webtechpie.com/" target='_blank'>Webtechpie.com</a>
				</Typography>
			</Container>
		</Box>
	);
}

export default Footer;