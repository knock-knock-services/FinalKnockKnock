import React, { useEffect, useState, useContext } from "react";
import { makeStyles } from "@material-ui/core/styles";
import TextField from '@material-ui/core/TextField';
import { getAllUserListApi } from "../../Utils/Api";
import { Typography } from "@material-ui/core";
import Grid from "@material-ui/core/Grid";


function Allusers(props) {
    const[allUs, setAll] = useState();

    useEffect(() => {
        
        getAllUserList();
    }, []);

    const getAllUserList = async () => {
        const allUs = await getAllUserListApi();
        setAll(allUs);
    };

return (
    <div>
        <Grid container>
            <Grid item xs={12} >
                <Typography variant={"h4"}>
                    Users Registered With KnockKnock
                    </Typography>
                <div >
                    <br />
                    <br />
                    <table align="center">
                        <tr height="100%">
                            <td height="100%" width="100%" valign="middle" align="center">
                                <Typography variant={"h5"}>
                                    <table border="1">
                                        <tr>
                                            {/* <th>{user}</th> */}
                                            <th>Customer Id</th>
                                            <th>First Name</th>
                                            <th>Email</th>
                                            {/* <th>Password</th> */}
                                            <th>Mobile</th>
                                            <th>Address</th>
                                            <th>City</th>
                                            <th>Country</th>
                                            <th>Postal Code</th>
                                            
                                        </tr>

                                        {allUs && allUs.map((all, index) => (

                                            <tr id={index}>
                                                <td>{all.CustomerId}</td>
                                                <td>{all.FirstName}</td>
                                                <td>{all.Email}</td>
                                                {/* <td>{all.Password}</td> */}
                                                <td>{all.Mobile}</td>
                                                <td>{all.Address}</td>
                                                <td>{all.City}</td>
                                                <td>{all.Country}</td>
                                                <td>{all.Postalcode}</td>
                                                {/* <td><button>Edit</button></td> */}
                                            </tr>

                                        ))}


                                    </table>
                                </Typography>
                            </td>
                        </tr>
                    </table>
                </div>
            </Grid>
        </Grid>
    </div>
)
}
export default Allusers