import * as React from 'react';
import ResponsiveAppBar from './Components/ResponsiveAppBar';
import SwipeableTextMobileStepper from './Components/SwipeableTextMobileStepper';
import StickyFooter from './Components/StickyFooter';
export default function App() {
  return (
    <div> 
      <ResponsiveAppBar />
      <SwipeableTextMobileStepper />
      <SwipeableTextMobileStepper />
      <StickyFooter />
    </div>
  );
}