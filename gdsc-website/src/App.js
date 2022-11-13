// External
import * as React from 'react';
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';

// Internal
import ResponsiveAppBar from './Components/ResponsiveAppBar';
import SwipeableTextMobileStepper from './Components/SwipeableTextMobileStepper';
import StickyFooter from './Components/StickyFooter';

export default function App() {
  return (
    <div> 
      <ResponsiveAppBar />
      <Container>
        <Grid 
          container
          direction="column"
          justifyContent="center"
          alignItems="center">
          <SwipeableTextMobileStepper />
          
        </Grid>
      </Container>
      <StickyFooter />
    </div>
  );
}