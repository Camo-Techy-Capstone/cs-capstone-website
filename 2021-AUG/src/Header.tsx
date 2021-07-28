import React from "react";
import { useHistory, Link as RouterLink } from "react-router-dom";
import { AppBar, Link, Toolbar, Typography } from "@material-ui/core";
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
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6" className={classes.title}>
          ICS Capstone Symposium
        </Typography>
        <Typography className={classes.links}>
          <Link href="#" style={{ color: "white" }}>
            Teams
          </Link>
          <Link href="/#/2021-schedule" style={{ color: "white" }}>
            Schedule
          </Link>
          <Link
            href="https://www.eventbrite.ca/e/camosun-ics-capstone-symposium-2021-registration-164049940789"
            target="_blank"
            style={{ color: "white" }}
          >
            Register
          </Link>
          <Link href="#" style={{ color: "white" }}>
            Donors
          </Link>
        </Typography>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
