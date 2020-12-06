import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Typography } from '@material-ui/core';
import TextField from '@material-ui/core/TextField';
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import { Link } from "react-router-dom"
import { customerLogin, technicianLogin } from "../../Utils/Api";
import { UserContext } from "../../UserContext";
import { useHistory } from "react-router-dom"
const useStyles = makeStyles((theme) => ({
    gridItem: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        marginBottom: "1em",
    },
    gridItemText: {
        display: "flex",
        justifyContent: "flex-start",
        alignItems: "center",
        marginBottom: "0.8em",
    },
    container: {
        display: "block",
        width: "65%",
        backgroundColor: "#addfad",
        border: "2px solid #808080",
        padding: "1em"
    },
    divContainer: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "75%",
    },
    formTextField: {
        width: "30%",
        display: "flex",
    },
    customerLoginText: {
        margin: "1em 0",
    },
    button: {
        width: "45%",
    },
    input: {
        backgroundColor: "#f5f5f5",
    },
}));

const TechnicianLogin = (props) => {
    //change made varlock
    let history = useHistory();
    const classes = useStyles();
    const [bookings, setBookings] = useState();

    const [fields, setFields] = useState({
        userId: "",
        password: "",
    });

    const onChange = (e) => {
        setFields({ ...fields, [e.target.name]: e.target.value });
    };

    const onSubmit = async (e) => {
        e.preventDefault();
        console.log(fields);
        try {
            const loginInfo = await technicianLogin(fields);
            if (loginInfo.status === 200) {
                history.push("/techwall")
                //window.location = "/home";
            } else {
                console.log(loginInfo);
                alert(loginInfo.msg);
            }
        } catch (errors) {
            console.log(errors.response.data.errors[0].msg);
            alert(errors.response.data.errors[0].msg);
        }
    };

    return (
        <div className={classes.divContainer}>
            <Grid container className={classes.container}>
                <Typography className={classes.customerLoginText}>
                    Technician Login
                </Typography>
                <form onSubmit={onSubmit}>
                    <Grid item xs={12} className={classes.gridItemText}>
                        <Typography className={classes.formTextField}>
                            User Id
                        </Typography>
                        <TextField
                            id="userId"
                            name="userId"
                            placeholder="User Id"
                            variant="outlined"
                            size="small"
                            onChange={onChange}
                            fullWidth
                            InputProps={{
                                classes: { input: classes.input },
                            }}
                        />
                    </Grid>
                    <Grid item xs={12} className={classes.gridItemText}>
                        <Typography className={classes.formTextField}>
                            Password
                        </Typography>
                        <TextField
                            id="password"
                            placeholder="Placeholder"
                            name="password"
                            variant="outlined"
                            type="password"
                            onChange={onChange}
                            size="small"
                            fullWidth
                            InputProps={{
                                classes: { input: classes.input },
                            }}
                        />
                    </Grid>
                    <Grid item xs={12} className={classes.gridItem}>
                        <Button
                            variant="contained"
                            type="submit"
                            className={classes.button}
                        >
                            Login
                        </Button>
                    </Grid>
                </form>
                <Grid item xs={12} className={classes.gridItem}>
                    <Link to={"/"}>
                        Forgot Password
                    </Link>
                </Grid>
                <Grid item xs={12} className={classes.gridItem}>
                    <Link to={"/technician-registration"}>
                        Sign up
                    </Link>
                    <Typography>
                        &nbsp;if you are a new customer
                    </Typography>
                </Grid>
            </Grid>
        </div>
    );
};

export default TechnicianLogin;