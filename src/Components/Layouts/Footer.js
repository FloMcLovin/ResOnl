import React from "react";
import { Grid, Paper, Container, Link } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(theme => ({
  root: {
    display: "bottom",
    height: "100%",
    backgroundColor: "yellow"
  },
  container: {
    position: "absolute",
    bottom: "0",
    width: "100%"
  }
}));

export default function Footer() {
  const classes = useStyles();

  return (
    <Container className={classes.container}>
      <Grid container>
        <Grid item xs={12}>
          <Paper elevation={3}>
            <Link> Impressum </Link>
          </Paper>
        </Grid>
      </Grid>
    </Container>
  );
}
