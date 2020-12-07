import React, { useEffect, useState,useContext } from "react";
import { makeStyles } from "@material-ui/core/styles";
import TextField from '@material-ui/core/TextField';
import { getTechnicianCategories, getBookingDetailsForTechnition } from "../../Utils/Api";
import { Typography } from "@material-ui/core";
import Grid from "@material-ui/core/Grid";
import zIndex from "@material-ui/core/styles/zIndex";
import {UserContext} from "../../UserContext";
const useStyles = makeStyles((theme) => ({
    landingContainer: {
        flexGrow: 1,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
    },
    loginContainer: {
        width: "40%",
        border: "2px solid #A8A8A8",
        padding: "1em"
    },
    gridItemText: {
        marginBottom: "0.8em",
        display: "flex",
        justifyContent: "space-between"
    },
    gridItemButton: {
        marginBottom: "0.8em",
        display: "flex",
        justifyContent: "center"
    },
    formTextField: {
        float: "left",
        width: "100%",
        display: "flex",
    },
    containerDiv: {
        width: "48%",
    },
    formTitle: {
        marginBottom: "1em",
    },
    textField: {
        width: "100%",
    },
    button: {
        width: "45%",
        backgroundColor: "#2B4257",
        color: "white",
        '&:hover': {
            backgroundColor: "#88A9C3",
            color: "white",
        }
    },
}));


function Techwall() {
    const classes = useStyles();
    const [technicianCategories, setTechnicianCategories] = useState();
    const [bookings, setBookings] = useState();
    const { user, setUser } = useContext(UserContext);
    
//changes here===================================================================================
    //const { user, setUser } = useContext(UserContext);
   // const [user, setUser] = useState(UserContext)

    useEffect(() => {

        getCategoriesTechnician();
        
        // setUser('varun');
        searchBooking(user);
       
    }, []);

    const getCategoriesTechnician = async () => {
        const technicianCategories = await getTechnicianCategories();
        setTechnicianCategories(technicianCategories);
    };

    const searchBooking = async (search) => {
        const searchValue = { searchValue: search };
        const bookings = await getBookingDetailsForTechnition(searchValue);
        setBookings(bookings);
    };

    return (
        <div>
            <Grid container>
                <Grid item xs={12} >
                    <Typography variant={"h5"}>
                        Booking Details{user}
                    </Typography>
                </Grid>

                <table>
                    <tr>
                        {/* <th>{user}</th> */}
                        <th>Booking Id</th>
                        <th>Customer Id</th>
                        <th>Date Of Booking</th>
                        <th>Status</th>
                        <th>Response</th>
                    </tr>

                    {bookings && bookings.map((book, index) => (
                        
                        <tr id={index}>
                            <td>{book.BookingID}</td>
                            <td>{book.CustomerID}</td>
                            <td>{book.Dateofbook}</td>
                            <td>{book.Stat}</td>
                            <td><button>Accept Booking</button></td>  
                        </tr>
                        
                    ))}
                    
                    
                </table>

                {/* {bookings && bookings.map((book, index) => (
                    <Typography display={"inline"} key={index}>
                        {book.BookingID}{book.CustomerID}{book.Dateofbook}{book.stat}
                    </Typography>
                ))} */}
            </Grid>
        </div>
    )
}

export default Techwall
