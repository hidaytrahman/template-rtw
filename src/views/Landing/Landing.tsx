import { FC } from 'react';
import { Box, Typography } from '@mui/material';
import StandardImageList from '../../components/StandardImageList/StandardImageList';

const Landing: FC = () => {
  return <Box p={3}>
    <Typography variant='h3'>Hello, React with TypeScript and Webpack!</Typography>
    <Typography variant='body1' color='textSecondary'>
      This is a simple React application with TypeScript and Webpack. 
    </Typography>

    <StandardImageList />
  </Box>
};

export default Landing;