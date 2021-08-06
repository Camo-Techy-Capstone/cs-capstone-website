import React from "react";
import { AppBar, Box, Typography, Button } from "@material-ui/core";
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
        <Box textAlign="center">
            <img src="/cosc/2021/images/Camosun_Logo.png" className={classes.logo}/>
        </Box>
        <Box textAlign="center">
            <Typography>
              Created by the Computer Science graduating class of 2021
            </Typography>
            <Typography>
              &copy; 2021 Camosun College
            </Typography>
            <Button
              variant="contained"
              color="secondary"
              href="https://capstone.camosun.bc.ca/"
            >
              Capstone Home
            </Button>
        </Box>
        
    </AppBar>
  );
};

export default Footer;