import React from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import InputBase from "@material-ui/core/InputBase";
import { makeStyles } from "@material-ui/core/styles";
import MenuIcon from "@material-ui/icons/Menu";
import SearchIcon from "@material-ui/icons/Search";
import AccountCircle from "@material-ui/icons/AccountCircle";
import Logo_Gold from "..//../Logo_Gold_Trans.png";

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1
  },
  menuButton: {
    marginRight: theme.spacing(0)
  },
  title: {
    flexGrow: 1,
    display: "none",
    [theme.breakpoints.up("xs")]: {
      display: "block"
    }
  },
  logo: {
    width: theme.spacing(10),
    height: "75%",
    position: "flex",
    pointerEvents: "none",
    display: "flex",
    alignItems: "center",
    justifyContent: "center"
  },
  search: {
    position: "relative",
    borderRadius: theme.shape.borderRadius,
    color: "rgba(0, 0, 84, 1)",
    backgroundColor: "rgba(255, 215, 0, 1)",
    "&:hover": {
      backgroundColor: "rgba(255, 239, 150, 1)"
    },
    marginLeft: 60,
    width: "100%",
    [theme.breakpoints.up("xs")]: {
      marginLeft: theme.spacing(1),
      width: "auto"
    }
  },
  searchIcon: {
    width: theme.spacing(6),
    height: "100%",
    position: "absolute",
    pointerEvents: "none",
    display: "flex",
    alignItems: "center",
    justifyContent: "center"
  },
  inputRoot: {
    marginRight: theme.spacing(0),
    color: "inherit"
  },
  inputInput: {
    marginRight: theme.spacing(0),
    padding: theme.spacing(1, 1, 1, 6),
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      width: 120,
      "&:focus": {
        width: 200
      }
    }
  },
  accountCircle: {
    marginLeft: theme.spacing(0)
  }
}));

export default function SearchAppBar() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="static" color="primary">
        <Toolbar>
          <IconButton
            edge="start"
            className={classes.menuButton}
            color="secondary"
            aria-label="open drawer"
          >
            <MenuIcon />
          </IconButton>
          <div className={classes.logo}>
            <img src={Logo_Gold} alt="Logo" className={classes.logo} />
          </div>
          <div className={classes.search}>
            <div className={classes.searchIcon}>
              <SearchIcon />
            </div>
            <InputBase
              placeholder="..."
              classes={{
                root: classes.inputRoot,
                input: classes.inputInput
              }}
              inputProps={{ "aria-label": "search" }}
            />
          </div>

          <IconButton
            edge="start"
            className={classes.accountCircle}
            color="secondary"
            aria-label="open drawer"
          >
            <AccountCircle />
          </IconButton>
        </Toolbar>
      </AppBar>
    </div>
  );
}
