import React from "react";
import {NavLink} from "react-router-dom"
import {
  Typography,
  AppBar,
  //Card,
  //CardActions,
  //Button,
  //CardContent,
  //CardMedia,
  CssBaseline,
  //Grid,
  Toolbar,
 // Container,
  InputBase,
} from "@material-ui/core";
import PhotoCameraIcon from "@mui/icons-material/PhotoCamera";

//import Button from '@mui/material/Button';
//import ButtonGroup from '@mui/material/ButtonGroup';
import useStyles from "./styles";
//import { cardClasses } from "@mui/material";
import { styled, alpha } from "@mui/material/styles";
import SearchIcon from "@mui/icons-material/Search";

//const card = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const Search = styled("div")(({ theme }) => ({
  position: "relative",
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  "&:hover": {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginLeft: 0,
  width: "100%",
  [theme.breakpoints.up("sm")]: {
    marginLeft: theme.spacing(1),
    width: "auto",
  },
  "@media(min-width: 600px)":{
    marginLeft: "auto",
  }
}));

const SearchIconWrapper = styled("div")(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: "100%",
  position: "absolute",
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "inherit",
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      width: "12ch",
      "&:focus": {
        width: "20ch",
      },
    },
  },
}));

const Navbar = () => {
  const classes = useStyles();
  return (
    <>
      <CssBaseline />
      <AppBar position="relative">
        <Toolbar>
          <PhotoCameraIcon className={classes.icon} />
          <NavLink to="/"><Typography variant="h6">Photo Gallery</Typography></NavLink>
          <Search>
            <SearchIconWrapper>
              <SearchIcon />
            </SearchIconWrapper>
            <StyledInputBase
              placeholder="Search…"
              inputProps={{ "aria-label": "search" }}
            />
          </Search>
        </Toolbar>
      </AppBar>
     
      
    </>
  );
};
export default Navbar;
