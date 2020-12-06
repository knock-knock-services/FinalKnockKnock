import React from "react";
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import { makeStyles } from "@material-ui/core/styles"
import {Link} from "react-router-dom";

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    menuButton: {
        marginRight: theme.spacing(2),
    },
    title: {
        paddingRight: "1em",
        textDecoration: "none",
        color: "white",
    },
}));


const LandingToolbar = (props) => {
  const classes = useStyles();

  return (
      <div>
          <AppBar position="relative">
              <Toolbar>
                  <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
                      <MenuIcon />
                  </IconButton>
                  <Link to={"/"} className={classes.title}>
                      Customer Login
                  </Link>
                  <Link to={"/technician-login"} className={classes.title}>
                      Technician Login
                  </Link>
              </Toolbar>
          </AppBar>
      </div>
  );
};

export default LandingToolbar;