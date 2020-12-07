var mysqlConnectionObject = require("../mysqlconnection");
const { validationResult } = require("express-validator");
const { sendRegMail } = require('../emails/account');

var ran=parseInt(((Math.random() * 100000) + 99));
console.log(ran);
const otpv=ran.toString();
exports.technicianRegistration = (req, res) => {
    if (req.body) {
       
        // let SQLQuery = `INSERT INTO technician (FirstName,Email,Password,Mobile,TechnicianCategoryId,LicenceNo,Address,City,Country,Postalcode) VALUES (${req.body.userId},${req.body.email},${req.body.password},${req.body.mobile},${req.body.technicalCategory},${req.body.licenceNumber},${req.body.address},${req.body.city},${req.body.country},${req.body.postalCode})`
        let SQLQuery = `INSERT INTO technician (FirstName,Email,Password,Mobile,TechnicianCategoryId,LicenceNo,Address,City,Country,Postalcode) VALUES (?,?,?,?,?,?,?,?,?,?)`;
        let fillSQL = [req.body.userId,req.body.email,req.body.password,req.body.mobile,req.body.technicalCategory,req.body.licenceNumber,req.body.address,req.body.city,req.body.country,req.body.postalCode]
        mysqlConnectionObject.query(SQLQuery, fillSQL, (err, result) => {
            if (err) {console.log(err);}
            else {
                res.status(200).json({msg: "Registration Successfull"});
               
            }
        });
    } else {
        res.status(404).json({msg: "Form data not found."});
    }
};

exports.customerRegistration = (req, res) => {
    if (req.body) {
        let SQLQuery = `INSERT INTO customer (FirstName,Email,Password,Mobile,Address,City,Country,Postalcode) VALUES (?,?,?,?,?,?,?,?)`;
        let fillSQL = [req.body.userId,req.body.email,req.body.password,req.body.mobile,req.body.address,req.body.city,req.body.country,req.body.postalCode]
        mysqlConnectionObject.query(SQLQuery, fillSQL, (err, result) => {
            if (err) {console.log(err);}
            else {
                res.status(200).json({msg: "Registration Successfull"});
                console.log(req.body.email);
              //  sendRegMail(req.body.email);
            }
        });
    } else {
        res.status(404).json({msg: "Form data not found."});
    }
};

exports.customerLogin = (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({errors: errors.array()});
    }
    if (req.body) {
        let SQLQuery = `SELECT * FROM customer WHERE FirstName='${req.body.userId}' LIMIT 1`;
        mysqlConnectionObject.query(SQLQuery, (err, result) => {
            if (err || result.length===0) {
                console.log(err);
                errors.errors[0] ={msg: `User with UserId ${req.body.userId} does not exist.`}
                res.status(401).json(errors);
            }
            else {
                console.log(result[0]);
                if (req.body.password === result[0].Password) {
                    console.log("login Successful");
                    sendRegMail(result[0].Email,"Welcome Back");
                   console.log(result[0].Email)
                console.log(result[0]);
                    console.log('finish otp')
                    res.status(200).json(result);
                } else {
                    errors.errors[0] ={msg: "UserId or Password incorrect."}
                    res.status(401).json(errors);
                }
            }
        });
    } else {
        errors.errors[0] ={msg: "Form data not found."}
        res.status(404).json(errors);
    };
};

exports.technicianLogin = (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({errors: errors.array()});
    }
    if (req.body) {
        let SQLQuery = `SELECT * FROM technician WHERE FirstName='${req.body.userId}' LIMIT 1`;
        mysqlConnectionObject.query(SQLQuery, (err, result) => {
            if (err || result.length===0) {
                console.log(err);
                errors.errors[0] ={msg: `User with UserId ${req.body.userId} does not exist.`}
                res.status(401).json(errors);
            }
            else {
                console.log(result[0]);
                if (req.body.password === result[0].Password) {
                    console.log("login Successful");
                    res.status(200).json(result);
                } else {
                    errors.errors[0] ={msg: "UserId or Password incorrect."}
                    res.status(401).json(errors);
                }
            }
        });
    } else {
        errors.errors[0] ={msg: "Form data not found."}
        res.status(404).json(errors);
    };
};


exports.userOtp = (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({errors: errors.array()});
    }
    if (req.body) {
         console.log('printing response');
           console.log(req.body);
           console.log(Math.floor((Math.random() * 100) + 99));
           if(req.body.otp==otpv){
               console.log('otp sucess');
               res.status(200).json({msg: "Otp Successfull"});
            
           }
           else{
            errors.errors[0] ={msg: "wrong otp"}
           res.status(404).json(errors);
           }
            }
       
    } 




    exports.forgotPassword = (req, res) => {
        const errors = validationResult(req);
        console.log('w 1');
        if (!errors.isEmpty()) {
            return res.status(400).json({errors: errors.array()});
        }
        if (req.body) {
            let SQLQuery = `SELECT * FROM customer WHERE Email='${req.body.email}' LIMIT 1`;
            mysqlConnectionObject.query(SQLQuery, (err, result) => {
                if (err || result.length===0) {
                    console.log(err);
                    errors.errors[0] ={msg: `User with UserId ${req.body.email} does not exist.`}
                    res.status(401).json(errors);
                }
                else {
                   
                 
                        console.log("Email Successful");
                        sendRegMail(req.body.email,otpv);
                       
                    
                        console.log('finish otp')
                        res.status(200).json(result);
                    
                }
            });
        } else {
            errors.errors[0] ={msg: "Form data not found."}
            res.status(404).json(errors);
        };
    };
    exports.userFOtp = (req, res) => {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({errors: errors.array()});
        }
        if (req.body) {
             console.log('printing response');
               console.log(req.body);
               console.log(Math.floor((Math.random() * 100) + 99));
               if(req.body.otp==otpv){
                   console.log('otp sucess');
                   res.status(200).json({msg: "Otp Successfull"});
                
               }
               else{
                errors.errors[0] ={msg: "wrong otp"}
               res.status(404).json(errors);
               }
                }
           
        }

exports.allUserList = (req, res) => {

    console.log("inside router user all list")
    let SQLQuery = `SELECT * FROM knockknock.customer;`;
    mysqlConnectionObject.query(SQLQuery, (err, result) => {
        if (err) { console.log(err); }
        else {
            res.status(200).json(result);
        }
    });
};
    
    