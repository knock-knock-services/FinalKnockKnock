import React, { useState } from "react";
import {makeStyles} from "@material-ui/core/styles";
import { Typography } from '@material-ui/core';
import TextField from '@material-ui/core/TextField';
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import { fpassword } from "../../Utils/Api";

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
        height: "90%",
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




const Fpassword = (props) => {
    const classes = useStyles();
    const [fields, setFields] = useState({
        email: "",
       
    });

    const onChange = (e) => {
        setFields({...fields, [e.target.name]: e.target.value });
    };

    const onSubmit = async (e) => {
        e.preventDefault();
        try {
            alert('1');
            const loginInfo = await fpassword(fields);
            alert('2');
            if (loginInfo.status === 200) {
                alert(fields.email)
               window.location = "/fotp";
            } else {
                alert('f otp 2')
                console.log(loginInfo);
                alert(loginInfo.msg);
            }
        } catch (errors) {
            
            alert('errpor 1');
        }
    };


 


    return (
        <div className={classes.divContainer}>
            <Grid container className={classes.container}>
                <Typography className={classes.customerLoginText}>
                    Forgot Password
                </Typography>
                <form onSubmit={onSubmit}>
                    <Grid item xs={12} className={classes.gridItemText}>
                        <Typography className={classes.formTextField}>
                            Email
                        </Typography>
                        <TextField
                            id="email"
                            name="email"
                            placeholder="example@gmail.com"
                            variant="outlined"
                            size="small"
                            onChange={onChange}
                            className={classes.textField}
                        />
                    </Grid>
                   
                    <Grid item xs={12} className={classes.gridItem}>
                        <Button
                            variant="contained"
                            type="submit"
                            className={classes.button}
                        >
                            submit
                        </Button>
                    </Grid>
                </form>
              
            </Grid>
        </div>
    );
};

export default Fpassword;