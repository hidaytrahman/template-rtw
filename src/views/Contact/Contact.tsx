import { Container, Typography } from "@mui/material"

function Contact() {
  return (
	<Container maxWidth="md" sx={{ py: 4 }}>
	<Typography variant="h3" component="h1" align="center" gutterBottom>
	  Contact Us
	</Typography>
	<Typography variant="body1">
	  Welcome to our company! We are dedicated to providing the best services and
	  solutions to our customers. Our team of experts is passionate about what
	  we do, and we strive to make a positive impact in everything we create.
	</Typography>
	<Typography variant="body1">
	  Our mission is to innovate and deliver high-quality products that meet the
	  needs of our clients. We believe in collaboration, creativity, and
	  continuous improvement.
	</Typography>
	</Container>
  )
}

export default Contact