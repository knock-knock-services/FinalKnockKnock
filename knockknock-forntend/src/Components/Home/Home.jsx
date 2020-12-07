import React, { useState, useContext} from "react";
import SearchCategory from "../SearchCategory/SearchCategory";
import Grid from "@material-ui/core/Grid";
import {makeStyles} from "@material-ui/core/styles";
import { useHistory } from "react-router-dom"
import { UserContext } from "../../UserContext";

const useStyles = makeStyles((theme) => ({
    landingContainer: {
        flexGrow: 1,
    },
}));


const Home = (props) => {
    const classes = useStyles();
    let history = useHistory();
    const { user, setUser } = useContext(UserContext);
   
    return (
        <>
            <Grid container className={classes.landingContainer}>
                <Grid item xs={2}>
                   
                </Grid>
                <Grid item xs={8}>
                    <SearchCategory />
                </Grid>
                <Grid item xs={2}>
                  
                </Grid>
               
            </Grid>
        </>
    );
};

export default Home;