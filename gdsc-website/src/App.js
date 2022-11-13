// External
import * as React from "react";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";

// Internal
import ResponsiveAppBar from "./Components/ResponsiveAppBar";
import SwipeableTextMobileStepper from "./Components/SwipeableTextMobileStepper";
import StickyFooter from "./Components/StickyFooter";

export default function App() {
  return (
    <div>
      <ResponsiveAppBar />
      <Grid
        container
        direction="column"
        justifyContent="center"
        alignItems="center"
      >
        <Box sx={{ width: "100%", maxWidth: 1000, pt: 10, }}>
          <Typography variant="h1" gutterBottom>
            About
          </Typography>
          <Typography variant="body1" gutterBottom>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Quos blanditiis tenetur unde suscipit, quam beatae rerum inventore
            consectetur, neque doloribus, cupiditate numquam dignissimos laborum
            fugiat deleniti? Eum quasi quidem quibusdam. 
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Quos blanditiis tenetur unde suscipit, quam beatae rerum inventore
            consectetur, neque doloribus, cupiditate numquam dignissimos laborum
            fugiat deleniti? Eum quasi quidem quibusdam.
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Quos blanditiis tenetur unde suscipit, quam beatae rerum inventore
            consectetur, neque doloribus, cupiditate numquam dignissimos laborum
            fugiat deleniti? Eum quasi quidem quibusdam.
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Quos blanditiis tenetur unde suscipit, quam beatae rerum inventore
            consectetur, neque doloribus, cupiditate numquam dignissimos laborum
            fugiat deleniti? Eum quasi quidem quibusdam.
          </Typography>
        </Box>
        <SwipeableTextMobileStepper />
      </Grid>
      <StickyFooter />
    </div>
  );
}
