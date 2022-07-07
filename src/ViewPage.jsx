import { Typography } from "@material-ui/core";
import React from "react";
import Footer from "./Footer";
import Navbar from "./Navbar";

const ViewPage = () => {
    return (
        <>
        <Navbar />
        <Typography variant="h3">This is View page!!!</Typography>
        <Footer />
        </>
    );
};
export default ViewPage;