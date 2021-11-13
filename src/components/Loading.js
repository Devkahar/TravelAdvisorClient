import * as React from 'react';
import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';

export default function CircularIndeterminate() {
  return (
    <Box sx={{ display: 'flex' , width: '100%',height: '500px',alignItems: 'center',justifyContent: 'center'}} size="5rem">
      <CircularProgress />
    </Box>
  );
}