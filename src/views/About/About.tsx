import { Box, Container, Typography, Paper, Avatar, Grid } from '@mui/material';

function About() {
  return (
    <Container maxWidth="md" sx={{ py: 4 }}>
      <Typography variant="h3" component="h1" align="center" gutterBottom>
        About Us
      </Typography>
      <Typography variant="body1" paragraph>
        Welcome to our company! We are dedicated to providing the best services and
        solutions to our customers. Our team of experts is passionate about what
        we do, and we strive to make a positive impact in everything we create.
      </Typography>
      <Typography variant="body1" paragraph>
        Our mission is to innovate and deliver high-quality products that meet the
        needs of our clients. We believe in collaboration, creativity, and
        continuous improvement.
      </Typography>

      <Box sx={{ mt: 4 }}>
        <Typography variant="h4" component="h2" align="center" gutterBottom>
          Meet Our Team
        </Typography>
        <Grid container spacing={3}>
          <Grid item xs={12} sm={6} md={4}>
            <Paper elevation={3} sx={{ p: 2, textAlign: 'center' }}>
              <Avatar
                alt="John Doe"
                src="https://via.placeholder.com/150"
                sx={{ width: 80, height: 80, margin: '0 auto 16px' }}
              />
              <Typography variant="h6" component="h3">
                John Doe
              </Typography>
              <Typography variant="body2" color="text.secondary">
                CEO & Founder
              </Typography>
            </Paper>
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <Paper elevation={3} sx={{ p: 2, textAlign: 'center' }}>
              <Avatar
                alt="Jane Smith"
                src="https://via.placeholder.com/150"
                sx={{ width: 80, height: 80, margin: '0 auto 16px' }}
              />
              <Typography variant="h6" component="h3">
                Jane Smith
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Lead Developer
              </Typography>
            </Paper>
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <Paper elevation={3} sx={{ p: 2, textAlign: 'center' }}>
              <Avatar
                alt="Alice Johnson"
                src="https://via.placeholder.com/150"
                sx={{ width: 80, height: 80, margin: '0 auto 16px' }}
              />
              <Typography variant="h6" component="h3">
                Alice Johnson
              </Typography>
              <Typography variant="body2" color="text.secondary">
                UX Designer
              </Typography>
            </Paper>
          </Grid>
        </Grid>
      </Box>
    </Container>
  );
}

export default About;