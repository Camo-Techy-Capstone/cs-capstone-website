import React from "react";
import { AppBar, Toolbar, Box, Typography, Button } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  logo: {
    height: 100,
    width: 180,
    objectFit: "scale-down", 
  },
  footer: {
      top: 'auto',
      bottom: 0,
  }
}));

const Footer = () => {
  const classes = useStyles();
  return (
    <AppBar position='static'>
      <Box display="flex" justifyContent="space-between" alignItems="center" ml={4} mr={4}>
        <Box textAlign="center">
            <img src="/cosc/2021/images/Camosun_Logo.png" className={classes.logo}/>
        </Box>
        <Box textAlign="center">
            <Typography>
              Created by the Computer Science Graduating Class of 2021
            </Typography>
            <Typography>
              &copy; 2021 Camosun College
            </Typography>
        </Box>
        <Box textAlign="center">
            <Button
              variant="contained"
              color="secondary"
              style={{marginBottom: '5px'}}
              href="https://capstone.camosun.bc.ca/"
            >
              Capstone Home
            </Button>
        </Box>
      </Box>
    </AppBar>
  );
};

export default Footer;
