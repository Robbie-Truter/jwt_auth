const model = require("../model/hardwareReview").OU;
const model2 = require("../model/newsManagement").OU;
const model3 = require("../model/opinionPublishing").OU;
const model4 = require("../model/softwareReview").OU;
const jwt = require('jsonwebtoken');


//find data in mongoDB when signing in
const getOneTest = (req, res) => {
    res.set('Access-Control-Allow-Origin', '*');
    //if OU equals hardware review, use hardware review model to check if data exists
    if(req.params.OU === "hardware review") {
        //check if data in db exists
        model.findOne({credential_repository: req.params.username, password: req.params.password}, (err, data) => {
            if (err || !data) {
                res.json("Some details doesn't exist");
                console.log("user not found");
            }
            //if data exists, sign user with Json Web Token
            else {
                //if user is default, sign jwt with default key
                model.findOne({credential_repository: req.params.username, password: req.params.password, admin: false, management: false}, (err, data) => {
                    if (data) {
                        jwt.sign({credential_repository: req.params.username, password: req.params.password}, 'default', {expiresIn: '10h'}, (err, token) => {
                            res.json(token);
                            console.log("Default user")
                        })
                    }
                    else if (!data) {
                        //if user is admin, sign jwt with admin key
                        model.findOne({credential_repository: req.params.username, password: req.params.password, admin: true, management: false}, (err, data) => {
                            if (data) {
                                jwt.sign({credential_repository: req.params.username, password: req.params.password}, 'admin', {expiresIn: '10h'}, (err, token) => {
                                    res.json(token);
                                    console.log("Admin user")
                                })
                            }
                            //if user is management, sign jwt with management key
                            else {
                                jwt.sign({credential_repository: req.params.username, password: req.params.password}, 'management', {expiresIn: '10h'}, (err, token) => {
                                    res.json(token);
                                    console.log("Management user")
                                })
                            }
                        })
                    }
                })
            }
        })
    }
    //if OU equals news management, use news management model to check if data exists
    else if(req.params.OU === "news management"){
        model2.findOne({credential_repository: req.params.username, password: req.params.password}, (err, data) => {
            if (err || !data) {
                res.json("Some details doesn't exist");
                console.log("user not found");
            }
            //if data exists, sign user with Json Web Token
            else {
                //if user is default, sign jwt with default key
                model2.findOne({credential_repository: req.params.username, password: req.params.password, admin: false, management: false}, (err, data) => {
                    if (data) {
                        jwt.sign({credential_repository: req.params.username, password: req.params.password}, 'default', {expiresIn: '10h'}, (err, token) => {
                            res.json(token);
                            console.log("Default user")
                        })
                    }
                    else if (!data) {
                        //if user is admin, sign jwt with admin key
                        model2.findOne({credential_repository: req.params.username, password: req.params.password, admin: true, management: false}, (err, data) => {
                            if (data) {
                                jwt.sign({credential_repository: req.params.username, password: req.params.password}, 'admin', {expiresIn: '10h'}, (err, token) => {
                                    res.json(token);
                                    console.log("Admin user")
                                })
                            }
                            else {
                                //if user is management, sign jwt with management key
                                jwt.sign({credential_repository: req.params.username, password: req.params.password}, 'management', {expiresIn: '10h'}, (err, token) => {
                                    res.json(token);
                                    console.log("Management user")
                                })
                            }
                        })
                    }
                })
            }
        })
    }
    //if OU equals opinion publishing, use opinion publishing model to check if data exists
    else if(req.params.OU === "opinion publishing"){
        model3.findOne({credential_repository: req.params.username, password: req.params.password}, (err, data) => {
            if (err || !data) {
                res.json("Some details doesn't exist");
                console.log("user not found");
            }
            //if data exists, sign user with Json Web Token
            else {
                //if user is default, sign jwt with default key
                model3.findOne({credential_repository: req.params.username, password: req.params.password, admin: false, management: false}, (err, data) => {
                    if (data) {
                        jwt.sign({credential_repository: req.params.username, password: req.params.password}, 'default', {expiresIn: '10h'}, (err, token) => {
                            res.json(token);
                            console.log("Default user")
                        })
                    }
                    else if (!data) {
                        //if user is admin, sign jwt with admin key
                        model3.findOne({credential_repository: req.params.username, password: req.params.password, admin: true, management: false}, (err, data) => {
                            if (data) {
                                jwt.sign({credential_repository: req.params.username, password: req.params.password}, 'admin', {expiresIn: '10h'}, (err, token) => {
                                    res.json(token);
                                    console.log("Admin user")
                                })
                            }
                            else {
                                //if user is management, sign jwt with management key
                                jwt.sign({credential_repository: req.params.username, password: req.params.password}, 'management', {expiresIn: '10h'}, (err, token) => {
                                    res.json(token);
                                    console.log("Management user")
                                })
                            }
                        })
                    }
                })
            }
        })
    }
    //if OU equals software review, use software review model to check if data exists
    else if(req.params.OU === "software review"){
        model4.findOne({credential_repository: req.params.username, password: req.params.password}, (err, data) => {
            if (err || !data) {
                res.json("Some details doesn't exist");
                console.log("user not found");
            }
            //if data exists, sign user with Json Web Token
            else {
                //if user is default, sign jwt with default key
                model4.findOne({credential_repository: req.params.username, password: req.params.password, admin: false, management: false}, (err, data) => {
                    if (data) {
                        jwt.sign({credential_repository: req.params.username, password: req.params.password}, 'default', {expiresIn: '10h'}, (err, token) => {
                            res.json(token);
                            console.log("Default user")
                        })
                    }
                    else if (!data) {
                        //if user is admin, sign jwt with admin key
                        model4.findOne({credential_repository: req.params.username, password: req.params.password, admin: true, management: false}, (err, data) => {
                            if (data) {
                                jwt.sign({credential_repository: req.params.username, password: req.params.password}, 'admin', {expiresIn: '10h'}, (err, token) => {
                                    res.json(token);
                                    console.log("Admin user")
                                })
                            }
                            else {
                                //if user is management, sign jwt with management key
                                jwt.sign({credential_repository: req.params.username, password: req.params.password}, 'management', {expiresIn: '10h'}, (err, token) => {
                                    res.json(token);
                                    console.log("Management user")
                                })
                            }
                        })
                    }
                })
            }
        })
    }
    //if OU does not exist, return error
    else{
        res.json("OU does not exist");
        console.log("OU does not exist");
    }
}




//Add data to mongodb when registering
const newTest = (req, res) => {
    res.set('Access-Control-Allow-Origin', '*');

    //if OU equals hardware review, use hardware review model to register user
    if(req.params.OU === "hardware review") {
        //check if data already exists in mongodb
        model.findOne({credential_repository: req.params.username, password: req.params.password}, (err, data) => {
            //if data not in mongodb, add it
            if (!data) {
                //create a new data object using the model and req.params
                const newTest = new model({
                    IT: 'sample data',
                    development: 'sample data ',
                    finances: 'sample data',
                    writing: 'sample data',
                    credential_repository: req.params.username,
                    password: req.params.password,
                    management: false,
                    admin: false
                })
                // save this object to database
                newTest.save((err, data) => {
                    if (err) return res.send("Some details already exists");
                    res.json("Registered successfully");
                    console.log("Registered successfully");
                })
            } else {
                res.json("Some details already exists");
                console.log("Some details already exists");
            }
        });
    }
    //if OU equals news management, use news management model to register user
    else if(req.params.OU === "news management"){
        //check if data already exists in mongodb
        model2.findOne({credential_repository: req.params.username, password: req.params.password}, (err, data) => {
            //if data not in mongodb, add it
            if (!data) {
                //create a new data object using the model and req.params
                const newTest = new model2({
                    IT: 'sample data',
                    development: 'sample data ',
                    finances: 'sample data',
                    writing: 'sample data',
                    credential_repository: req.params.username,
                    password: req.params.password,
                    management: false,
                    admin: false
                })
                // save this object to database
                newTest.save((err, data) => {
                    if (err) return res.send("Some details already exists");
                    res.json("Registered successfully");
                    console.log("Registered successfully");
                })
            } else {
                res.json("Some details already exists");
                console.log("Some details already exists");
            }
        });
    }
    //if OU equals opinion publishing, use opinion publishing model to register user
    else if(req.params.OU === "opinion publishing"){
        //check if data already exists in mongodb
        model3.findOne({credential_repository: req.params.username, password: req.params.password}, (err, data) => {
            //if data not in mongodb, add it
            if (!data) {
                //create a new data object using the model and req.params
                const newTest = new model3({
                    IT: 'sample data',
                    development: 'sample data ',
                    finances: 'sample data',
                    writing: 'sample data',
                    credential_repository: req.params.username,
                    password: req.params.password,
                    management: false,
                    admin: false
                })
                // save this object to database
                newTest.save((err, data) => {
                    if (err) return res.send("Some details already exists");
                    res.json("Registered successfully");
                    console.log("Registered successfully");
                })
            } else {
                res.json("Some details already exists");
                console.log("Some details already exists");
            }
        });
    }
    //if OU equals software review, use software review model to register user
    else if(req.params.OU === "software review"){
        //check if data already exists in mongodb
        model4.findOne({credential_repository: req.params.username, password: req.params.password}, (err, data) => {
            //if data not in mongodb, add it
            if (!data) {
                //create a new data object using the model and req.params
                const newTest = new model4({
                    IT: 'sample data',
                    development: 'sample data ',
                    finances: 'sample data',
                    writing: 'sample data',
                    credential_repository: req.params.username,
                    password: req.params.password,
                    management: false,
                    admin: false
                })
                // save this object to database
                newTest.save((err, data) => {
                    if (err) return res.send("Some details already exists");
                    res.json("Registered successfully");
                    console.log("Registered successfully");
                })
            } else {
                res.json("Some details already exists");
                console.log("Some details already exists");
            }
        });
    }
    //if OU does not exist, return error
    else{
        res.json("OU doesnt exist");
        console.log("OU doesnt exist");
    }
}



//export controller functions
module.exports = {
    getOneTest,
    newTest
};





