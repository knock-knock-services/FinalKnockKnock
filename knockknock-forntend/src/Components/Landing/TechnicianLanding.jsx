import React from "react";
import Grid from "@material-ui/core/Grid";
import SearchCategory from "../SearchCategory/SearchCategory";
import TechnicianLogin from "../Login/TechnicianLogin";
import {makeStyles} from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
    landingContainer: {
        flexGrow: 1,
    },
}));

const TechnicianLanding = (props) => {
    const classes = useStyles();

    return (
        <>
            <Grid container className={classes.landingContainer}>
                <Grid item xs={3}>
                    </Grid>
                <Grid item xs={6}>
                    <TechnicianLogin />
                </Grid>
                <Grid item xs={3}>
                    </Grid>
            </Grid>
        </>
    );
};

export default TechnicianLanding;