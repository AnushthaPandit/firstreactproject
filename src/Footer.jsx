import React from "react";
import useStyles from "./styles";
import { Typography } from "@material-ui/core";

const Footer = () => {
    const classes = useStyles();
    return (
        <>
        <footer className={classes.footer}>
        <Typography variant="h6" align="center" gutterBottom>
          Footer
        </Typography>
        <Typography variant="subtitle1" align="center" color="textSecondary">
          contact through various CardMedia<br></br>
          do check our Blogs
        </Typography>
      </footer>
        </>
    );
};

export default Footer;