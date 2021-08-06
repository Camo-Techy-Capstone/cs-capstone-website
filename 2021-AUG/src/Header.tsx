import React from "react";
import { AppBar, Box, Toolbar, Typography } from "@material-ui/core";
import { NavLink } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
    color: "white",
  },
  links: {
    "& > * + *": {
      marginLeft: theme.spacing(2),
    },
  },
}));

const Header = () => {
  const classes = useStyles();
  return (
    <AppBar position="fixed">
      <Toolbar>
        <Typography variant="h6" className={classes.title}>
          <a
            href="https://capstone.camosun.bc.ca/cosc/2021/"
            style={{ color: "white", textDecoration: "none" }}
          >
            Computer Science Capstone Symposium 2021
          </a>
        </Typography>
        <Typography className={classes.links}>
          <NavLink
            to="/"
            style={{ color: "white", textDecoration: "none" }}
            activeStyle={{ fontWeight: "bold", textDecoration: "underline" }}
          >
            Teams
          </NavLink>
          <NavLink
            to="/schedule"
            style={{ color: "white", textDecoration: "none" }}
            activeStyle={{ fontWeight: "bold", textDecoration: "underline" }}
          >
            Schedule
          </NavLink>
          <a
            href="https://www.eventbrite.ca/e/camosun-ics-capstone-symposium-2021-registration-164049940789"
            target="_blank"
            style={{ color: "white", textDecoration: "none" }}
          >
            Register
          </a>
          <a
            href="https://www.surveymonkey.ca/r/Capstone2021Award"
            target="_blank"
            style={{ color: "white", textDecoration: "none" }}
          >
            Voting
          </a>
          <NavLink
            to="/donors"
            style={{ color: "white", textDecoration: "none" }}
            activeStyle={{ fontWeight: "bold", textDecoration: "underline" }}
          >
            Donors
          </NavLink>
        </Typography>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
