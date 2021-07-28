import React from "react";
import {
  AppBar,
  Button,
  IconButton,
  Link,
  Toolbar,
  Typography,
} from "@material-ui/core";
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
    <AppBar position="fixed">
      <Toolbar>
        <Typography variant="h6" className={classes.title}>
          ICS Capstone Symposium 2021
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
          <Link href="/#/donors" style={{ color: "white" }}>
            Donors
          </Link>
        </Typography>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
