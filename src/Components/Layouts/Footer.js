import React from "react";
import CssBaseline from "@material-ui/core/CssBaseline";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import Link from "@material-ui/core/Link";

function Kontakt() {
  return (
    <Typography variant="subtitle1" color="initial" display="inline">
      <Link color="inherit" href="https://reserviere.online/kontakt">
        Kontakt
      </Link>
      {"  --  "}
    </Typography>
  );
}

function Rechtliches() {
  return (
    <Typography variant="subtitle1" color="initial" display="inline">
      <Link color="inherit" href="https://reserviere.online/rechtliches">
        Rechtliches
      </Link>
      {"  --  "}
    </Typography>
  );
}

function CookieRichtlinien() {
  return (
    <Typography variant="subtitle1" color="initial" display="inline">
      <Link color="inherit" href="https://reserviere.online/cookies">
        Cookie Richtlinien
      </Link>
      {"  --  "}
    </Typography>
  );
}

function Datenschutzrichtlinie() {
  return (
    <Typography variant="subtitle1" color="initial" display="inline">
      <Link color="inherit" href="https://reserviere.online/datenschutz">
        Datenschutz
      </Link>
      {"  --  "}
    </Typography>
  );
}

function Impressum() {
  return (
    <Typography variant="subtitle1" color="initial" display="inline">
      <Link color="inherit" href="https://reserviere.online/impressum">
        Impressum
      </Link>{" "}
    </Typography>
  );
}

function Copyright() {
  return (
    <Typography variant="subtitle2" color="textSecondary" display="initial">
      {"Copyright © Reserviere.Online "}
      {new Date().getFullYear()}
    </Typography>
  );
}

const useStyles = makeStyles(theme => ({
  root: {
    display: "flex",
    flexDirection: "column",
    minHeight: "100vh"
  },
  main: {
    marginTop: theme.spacing(8),
    marginBottom: theme.spacing(2)
  },
  footer: {
    padding: "auto",
    color: "#rgba(255, 215, 0, 1)",
    backgroundColor: "rgb(48, 63, 159)",
    marginTop: "auto",
    textAlign: "center"
  }
}));

export default function StickyFooter() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <CssBaseline />
      <footer className={classes.footer}>
        <Container maxWidth="sm">
          <Kontakt />
          <Rechtliches />
          <CookieRichtlinien />
          <Datenschutzrichtlinie />
          <Impressum />
          <Copyright />
        </Container>
      </footer>
    </div>
  );
}
