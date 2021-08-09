import React from "react";
import { AppBar, Box, Toolbar, Typography, IconButton, Popper, Paper, MenuList, MenuItem } from "@material-ui/core";
import { NavLink } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import theme from './theme';
import MenuIcon from '@material-ui/icons/Menu';


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
    width: "100%",
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
  const breakPoint = 1020;
  const isMobile = useMediaQuery(theme.breakpoints.down(breakPoint));
  const [open, setOpen] = React.useState(false);
  const anchorRef = React.useRef<HTMLButtonElement>(null);
  const handleMenuClick = () => {
    setOpen((prev) => !prev);
  }

  const navLinks = [
    <NavLink
      to="/"
      exact={true}
      className={classes.navlink}
      activeClassName="selected"
    >
      Teams
    </NavLink>,

    <NavLink
      to="/schedule"
      className={classes.navlink}
      activeClassName="selected"
    >
      Schedule
    </NavLink>,

    <a
      className={classes.navlink}
      href="https://www.eventbrite.ca/e/camosun-ics-capstone-symposium-2021-registration-164049940789"
      target="_blank"
    >
      Register
    </a>,

    <a
      className={classes.navlink}
      href="https://www.surveymonkey.ca/r/Capstone2021Award"
      target="_blank"
    >
      Voting
    </a>,

    <NavLink
      to="/donors"
      className={classes.navlink}
      activeClassName="selected"
    >
      Donors
    </NavLink>
  ];

  return (
    <AppBar position="fixed" ref={anchorRef}>
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
        {isMobile ? <div>
                      <IconButton onClick={handleMenuClick} >
                        <MenuIcon />
                      </IconButton>
                      <Popper  
                        style={{width:"100%"}} 
                        open={open} 
                        anchorEl={anchorRef.current} 
                        role={undefined} 
                        transition 
                        disablePortal
                      >                          
                        <Paper>
                          <MenuList autoFocusItem={open} >
                            {navLinks.map(link => 
                              <MenuItem style={{textAlign: 'center'}}>
                                {link}
                              </MenuItem>
                            )}
                          </MenuList>                            
                        </Paper>                         
                      </Popper> 
                    </div>
                  
                  : <Typography className={classes.links}>
                      {navLinks.map(link => link)} 
                    </Typography>}
      </Toolbar> 
    </AppBar>   
  );
};

export default Header;