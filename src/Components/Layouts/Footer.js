import React from "react";
import { Grid, Paper, Container } from "@material-ui/core";

export default function Footer() {
  return (
    <Container maxWidth="sm">
      <Grid container direction="row" justify="center" alignItems="stretch">
        <Grid item xs={12}>
          <Paper elevation={3}> Hallo </Paper>
        </Grid>
      </Grid>
    </Container>
  );
}
