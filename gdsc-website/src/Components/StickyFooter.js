import * as React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";

export default function StickyFooter() {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        minHeight: "100vh",
      }}
    >
      <Box
        component="footer"
        sx={{
          py: 3,
          px: 2,
          mt: "auto",
          backgroundColor: (theme) =>
            theme.palette.mode === "light"
              ? theme.palette.grey[200]
              : theme.palette.grey[800],
        }}
      >
        <Grid container direction="row">
          <Grid xs={3}>
            <Typography variant="body1" align="left">
              University of California Berkeley
            </Typography>
          </Grid>
          <Grid xs={6}></Grid>
          <Grid xs={3}>
            <Typography variant="body1" align="right">
              Fall 2022
            </Typography>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
}
