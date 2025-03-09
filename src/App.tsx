import { Box, Typography } from '@mui/material';
import React from 'react';

const App: React.FC = () => {
  return <Box p={3}>
    <Typography variant='h3'>Hello, React with TypeScript and Webpack!</Typography>
    <Typography variant='body1' color='textSecondary'>
      This is a simple React application with TypeScript and Webpack. 
    </Typography>
  </Box>
};

export default App;