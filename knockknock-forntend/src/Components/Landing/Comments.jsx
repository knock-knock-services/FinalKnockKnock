import React, {useEffect, useState} from "react";
import {makeStyles} from "@material-ui/core/styles";
import TextField from '@material-ui/core/TextField';
import { getComments } from "../../Utils/Api";
import { Typography } from "@material-ui/core";
import {Link} from "react-router-dom";
import Grid from "@material-ui/core/Grid";
import { Button } from 'react-bootstrap';
import * as bootstrap from 'react-bootstrap';
import Rating from '@material-ui/lab/Rating';


const useStyles = makeStyles((theme) => ({
    container: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
    },
   
    techniciansContainer: {
        width: "75%",
        height: "25%",
        display: "flex",
        justifyContent: "flex-start",
        flexWrap: "wrap",
    },
    technicianCategoriesText: {
        paddingTop: "0.8em",
        width: "100%"
    },
}));

const SearchCategory = ({ match },props) => {

    const classes = useStyles();
    const [comments, setComments] = useState();
   
    
    useEffect( () => {

        getComment();
        
    },[]);

    const getComment = async () => {
      
        const searchId = {id : match.params.id};
       
        const comments = await getComments(searchId);
       
        setComments(comments);
    };

    const render=(comment,index)=>{
        return(
            <tr key={index}>
        <td>{comment.CustomerName}</td>
        <td>  <Rating name="read-only" value={comment.Ratting} readOnly /></td>
        <td>{comment.Comment}</td>
      
        </tr>
        )
    }

    

    return (
        <>
        
  
        <Grid container className={classes.landingContainer}>
        <Grid item xs={3}>
            </Grid>
        <Grid item xs={6}>
        <bootstrap.Table striped bordered hover>
  <thead class="thead-dark">
    <tr>
   
      <th>Customer Name</th>
      <th>Ratting</th>
      <th>Comment</th>
    </tr>
  </thead>
            <tbody>
    {comments && comments.map(render)}
                    
            </tbody>
</bootstrap.Table>
<Link  to={'/tech-page/'+ match.params.id} className={classes.title}>
                            
                            back to technicians
                            </Link>
</Grid>
<Grid item xs={3}>
            </Grid>
            </Grid>
          
           
           
           
 
      
    
   

        </>
    );
};

export default SearchCategory;