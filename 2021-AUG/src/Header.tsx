import React from "react";
import { AppBar, Box, Toolbar, Typography } from "@material-ui/core";
import { NavLink } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import theme from './theme';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
    color: theme.palette.primary.dark,
    textDecoration: `none`,
  },
  navlink: {
    color: theme.palette.primary.dark,
    textDecoration: `none`,
    "&:active": {
      color: theme.palette.secondary.main,
      fontWeight: 'bold',
    },
    "&.selected": {
      color: theme.palette.secondary.main,
      fontWeight: 'bold',
    },
  },
  links: {
    "& > * + *": {
      marginLeft: theme.spacing(2),
    },
    textDecoration: `none`,
  },
}));

const Header = () => {
  const classes = useStyles();
  return (
    <AppBar position="fixed">
      <Toolbar>
        <Typography variant="h6" className={classes.title}>
          <a
            className={classes.links}
            style={{ color: `inherit` }}
            href="https://capstone.camosun.bc.ca/cosc/2021/"
          >
            Computer Science Capstone Symposium 2021
          </a>
        </Typography>
        <Typography className={classes.links}>
          <NavLink
            to="/"
            exact={true}
            className={classes.navlink}
            activeClassName="selected"
          >
            Teams
          </NavLink>
          <NavLink
            to="/schedule"
            className={classes.navlink}
            activeClassName="selected"
          >
            Schedule
          </NavLink>
          <a
            className={classes.navlink}
            href="https://www.eventbrite.ca/e/camosun-ics-capstone-symposium-2021-registration-164049940789"
            target="_blank"
          >
            Register
          </a>
          <a
            className={classes.navlink}
            href="https://www.surveymonkey.ca/r/Capstone2021Award"
            target="_blank"
          >
            Voting
          </a>
          <NavLink
            to="/donors"
            className={classes.navlink}
            activeClassName="selected"
          >
            Donors
          </NavLink>
        </Typography>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
