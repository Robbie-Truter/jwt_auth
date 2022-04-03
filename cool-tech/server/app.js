require('dotenv').config({ path: '/.env' });
const express = require('express')
const app = express()
const port = 3001
const cors = require('cors')
const mongoose = require('mongoose')
const route = require('./route/route')
const bodyParser = require('body-parser');
const jwt = require('jsonwebtoken');
const helmet = require("helmet");

//importing all models for different OU's
const model = require("./model/hardwareReview").OU;
const model2 = require("./model/newsManagement").OU;
const model3 = require("./model/opinionPublishing").OU;
const model4 = require("./model/softwareReview").OU;

app.use(cors());
app.use(express.json());
app.use(bodyParser.json());
app.use(helmet());
app.use('/', route);



//establish connection to database
//No need to hide connection string, this is a mock database
mongoose.connect(
    'mongodb+srv://Robert:bmwM6@myfirstcluster.mihu2.mongodb.net/OU?retryWrites=true&w=majority' ,
    (err) => {
        if (err) return console.log("Error: ", err);
        console.log("MongoDB Connection -- Ready state is:", mongoose.connection.readyState);
    }
);



//find data in db api
app.get("/findData/:OU/:username",verifyToken,(req, res) => {
    //if OU equals hardware review, use hardware review model to find data
    if(req.params.OU === "hardware review"){
        //check if data exists in db
        model.findOne({credential_repository:req.params.username}, (err, data) => {
            if(data){
                //if data exists,and you are logged in, return data (checking if you are default,management or admin)
                jwt.verify(req.token, 'default', (err) => {
                    if(!err){
                        res.json(data);
                        console.log(data);
                    }
                    else if(err){
                        jwt.verify(req.token, 'management', (err) => {
                            if(!err){
                                res.json(data);
                                console.log(data);
                            }
                            else if(err){
                                jwt.verify(req.token, 'admin', (err) => {
                                    if(!err){
                                        res.json(data);
                                        console.log(data);
                                    }
                                    //if not logged in, return error
                                    else if(err){
                                        res.json("Must be signed in");
                                        console.log("Must be signed in");
                                    }
                                })
                            }
                        })
                    }
                })
            }
            //if data not found in db, return error
            else{
                console.log("Some details does not exist");
                res.json("Some details does not exist")
            }
        })
    }
    //if OU equals news management,use news management model to find data
    else if(req.params.OU === "news management"){
        //check if data exists in db
        model2.findOne({credential_repository:req.params.username}, (err, data) => {
            //if data exists,and you are logged in, return data (checking if you are default,management or admin)
            if(data){
                jwt.verify(req.token, 'default', (err) => {
                    if(!err){
                        res.json(data);
                        console.log(data);
                    }
                    else if(err){
                        jwt.verify(req.token, 'management', (err) => {
                            if(!err){
                                res.json(data);
                                console.log(data);
                            }
                            else if(err){
                                jwt.verify(req.token, 'admin', (err) => {
                                    if(!err){
                                        res.json(data);
                                        console.log(data);
                                    }
                                    //if not logged in, return error
                                    else if(err){
                                        res.json("Must be signed in");
                                        console.log("Must be signed in");
                                    }
                                })
                            }
                        })
                    }
                })
            }
            //if data not found in db, return error
            else{
                console.log("Some details does not exist");
                res.json("Some details does not exist")
            }
        })
    }
    //if OU equals opinion publishing, use opinion publishing model to find data
    else if(req.params.OU === "opinion publishing"){
        //check if data exists in db
        model3.findOne({credential_repository:req.params.username}, (err, data) => {
            //if data exists,and you are logged in, return data (checking if you are default,management or admin)
            if(data){
                jwt.verify(req.token, 'default', (err) => {
                    if(!err){
                        res.json(data);
                        console.log(data);
                    }
                    else if(err){
                        jwt.verify(req.token, 'management', (err) => {
                            if(!err){
                                res.json(data);
                                console.log(data);
                            }
                            else if(err){
                                jwt.verify(req.token, 'admin', (err) => {
                                    if(!err){
                                        res.json(data);
                                        console.log(data);
                                    }
                                    //if not logged in, return error
                                    else if(err){
                                        res.json("Must be signed in");
                                        console.log("Must be signed in");
                                    }
                                })
                            }
                        })
                    }
                })
            }
            //if data not found in db, return error
            else{
                console.log("Some details does not exist");
                res.json("Some details does not exist")
            }
        })
    }
    //if OU equals software review, use software review model to find data
    else if(req.params.OU === "software review"){
        //check if data exists in db
        model4.findOne({credential_repository:req.params.username}, (err, data) => {
            //if data exists,and you are logged in, return data (checking if you are default,management or admin)
            if(data){
                jwt.verify(req.token, 'default', (err) => {
                    if(!err){
                        res.json(data);
                        console.log(data);
                    }
                    else if(err){
                        jwt.verify(req.token, 'management', (err) => {
                            if(!err){
                                res.json(data);
                                console.log(data);
                            }
                            else if(err){
                                jwt.verify(req.token, 'admin', (err) => {
                                    if(!err){
                                        res.json(data);
                                        console.log(data);
                                    }
                                    //if not logged in, return error
                                    else if(err){
                                        res.json("Must be signed in");
                                        console.log("Must be signed in");
                                    }
                                })
                            }
                        })
                    }
                })
            }
            //if data not found in db, return error
            else{
                console.log("Some details does not exist");
                res.json("Some details does not exist")
            }
        })
    }
    //if OU not found, return error
    else{
        res.json("OU does not exist");
    }
})



//add data to db api
app.get("/addData/:OU/:username/:password",verifyToken,(req, res) => {
    //if OU equals hardware review, use hardware review model to add data
    if(req.params.OU === "hardware review"){
        //check if data in db already exists
        model.findOne({credential_repository: req.params.username,password:req.params.password}, (err, data) => {
            if(err || data){
                res.json("Some details already exists");
                console.log("Some details already exists");
            }
            else{
                //if data does not exist, check if logged in as default, management or admin
                //if logged in, add data
                jwt.verify(req.token, 'default', (err) => {
                    if(!err){
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
                        newTest.save((err) => {
                            if (err) return res.send("Some details already exists");
                            res.json("Added successfully");
                            console.log("Added successfully");
                        })
                    }
                    else if(err){
                        jwt.verify(req.token, 'management', (err) => {
                            if(!err){
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
                                newTest.save((err) => {
                                    if (err) return res.send("Some details already exists");
                                    res.json("Added successfully");
                                    console.log("Added successfully");
                                })
                            }
                            else if(err){
                                jwt.verify(req.token, 'admin', (err) => {
                                    if(!err){
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
                                        newTest.save((err) => {
                                            if (err) return res.send("Some details already exists");
                                            res.json("Added successfully");
                                            console.log("Added successfully");
                                        })
                                    }
                                    //if not logged in, return error
                                    else if(err){
                                        res.json("Must be signed in");
                                        console.log("Must be signed in");
                                    }
                                })
                            }
                        })
                    }
                })
            }
        })
    }
    //if OU equals news management, use news management model to add data
    else if(req.params.OU === "news management"){
        //check if data already exists in db
        model2.findOne({credential_repository: req.params.username,password:req.params.password}, (err, data) => {
            if(err || data){
                res.json("Some details already exists");
                console.log("Some details already exists");
            }
            //if data does not exist, check if logged in as default, management or admin
            //if logged in, add data
            else{
                jwt.verify(req.token, 'default', (err) => {
                    if(!err){
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
                        newTest.save((err) => {
                            if (err) return res.send("Some details already exists");
                            res.json("Added successfully");
                            console.log("Added successfully");
                        })
                    }
                    else if(err){
                        jwt.verify(req.token, 'management', (err) => {
                            if(!err){
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
                                newTest.save((err) => {
                                    if (err) return res.send("Some details already exists");
                                    res.json("Added successfully");
                                    console.log("Added successfully");
                                })
                            }
                            else if(err){
                                jwt.verify(req.token, 'admin', (err) => {
                                    if(!err){
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
                                        newTest.save((err) => {
                                            if (err) return res.send("Some details already exists");
                                            res.json("Added successfully");
                                            console.log("Added successfully");
                                        })
                                    }
                                    //if not signed in, return error
                                    else if(err){
                                        res.json("Must be signed in");
                                        console.log("Must be signed in");
                                    }
                                })
                            }
                        })
                    }
                })
            }
        })
    }
    //if OU equals opinion publishing, use opinion publishing model to add data
    else if(req.params.OU === "opinion publishing"){
        //check if data already exists in db
        model3.findOne({credential_repository: req.params.username,password:req.params.password}, (err, data) => {
            if(err || data){
                res.json("Some details already exists");
                console.log("Some details already exists");
            }
            else{
                //if data does not exist, check if logged in as default, management or admin
                //if logged in, add data
                jwt.verify(req.token, 'default', (err) => {
                    if(!err){
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
                        newTest.save((err) => {
                            if (err) return res.send("Some details already exists");
                            res.json("Added successfully");
                            console.log("Added successfully");
                        })
                    }
                    else if(err){
                        jwt.verify(req.token, 'management', (err) => {
                            if(!err){
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
                                newTest.save((err) => {
                                    if (err) return res.send("Some details already exists");
                                    res.json("Added successfully");
                                    console.log("Added successfully");
                                })
                            }
                            else if(err){
                                jwt.verify(req.token, 'admin', (err) => {
                                    if(!err){
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
                                        newTest.save((err) => {
                                            if (err) return res.send("Some details already exists");
                                            res.json("Added successfully");
                                            console.log("Added successfully");
                                        })
                                    }
                                    //if not signed in, return error
                                    else if(err){
                                        res.json("Must be signed in");
                                        console.log("Must be signed in");
                                    }
                                })
                            }
                        })
                    }
                })
            }
        })
    }
    //if OU equals software review, use software review model to add data
    else if(req.params.OU === "software review"){
        //check if data already exists in db
        model4.findOne({credential_repository: req.params.username,password:req.params.password}, (err, data) => {
            if(err || data){
                res.json("Some details already exists");
                console.log("Some details already exists");
            }
            else{
                //if data does not exist, check if logged in as default, management or admin
                //if logged in, add data
                jwt.verify(req.token, 'default', (err) => {
                    if(!err){
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
                        newTest.save((err) => {
                            if (err) return res.send("Some details already exists");
                            res.json("Added successfully");
                            console.log("Added successfully");
                        })
                    }
                    else if(err){
                        jwt.verify(req.token, 'management', (err) => {
                            if(!err){
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
                                newTest.save((err) => {
                                    if (err) return res.send("Some details already exists");
                                    res.json("Added successfully");
                                    console.log("Added successfully .");
                                })
                            }
                            else if(err){
                                jwt.verify(req.token, 'admin', (err) => {
                                    if(!err){
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
                                        newTest.save((err) => {
                                            if (err) return res.send("Some details already exists");
                                            res.json("Added successfully");
                                            console.log("Added successfully");
                                        })
                                    }
                                    //if not signed in, return error
                                    else if(err){
                                        res.json("Must be signed in");
                                        console.log("Must be signed in");
                                    }
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
})



//update data in db api
app.get('/updateData/:OU/:selected/:username/:password',verifyToken,(req, res) => {
    //if OU equals hardware review, use hardware review model to update data
    if(req.params.OU === "hardware review"){
        //Check if data exists
        model.findOne({credential_repository: req.params.selected}, (err, data) => {
            if(err || !data){
                res.json("Selected username does not exist")
                console.log("Selected username does not exist")
            }
            else{
                //if data exists, check if logged in as default, management or admin
                //if logged in as default, return error
                jwt.verify(req.token, 'default', (err) => {
                    if(!err){
                        res.json("Must be admin or management user to update");
                        console.log("Must be admin or management user to update");
                    }
                    else if(err){
                        //if logged in as management or admin, update data
                        jwt.verify(req.token, 'management', (err) => {
                            if(!err){
                                //update selected document else send error
                                let conditions = {credential_repository:req.params.selected}
                                    , update = { $set:{credential_repository: req.params.username, password:req.params.password}}

                                model.updateOne(conditions, update, {multi: true}).then(()=>{
                                    res.json(update)
                                    console.log(update)
                                }).catch(err=>{
                                    console.log(err)
                                })
                            }
                            else if(err){
                                jwt.verify(req.token, 'admin', (err) => {
                                    if(!err){
                                        //update selected document else send error
                                        let conditions = {credential_repository:req.params.selected}
                                            , update = { $set:{credential_repository: req.params.username, password:req.params.password}}

                                        model.updateOne(conditions, update, {multi: true}).then(()=>{
                                            res.json(update)
                                            console.log(update)
                                        }).catch(err=>{
                                            console.log(err)
                                        })
                                    }
                                    //if not signed, return error
                                    if(err){
                                        res.json("Must be signed in as management or admin user")
                                    }
                                })
                            }
                        })
                    }
                })
            }
        })

    }
    //if OU equals news management, use news management model to update data
    else if(req.params.OU === "news management"){
        //check if data exists in db
        model2.findOne({credential_repository: req.params.selected}, (err, data) => {
            if(err || !data){
                res.json("Selected username does not exist");
                console.log("Selected username does not exist");
            }
            else{
                //if data exists, check if logged in as default, management or admin
                //if logged in as default, return error
                jwt.verify(req.token, 'default', (err) => {
                    if(!err){
                        res.json("Must be admin or management user to update");
                        console.log("Must be admin or management user to update");
                    }
                    else if(err){
                        //if logged in as management or admin, update data
                        jwt.verify(req.token, 'management', (err) => {
                            if(!err){
                                //update selected document else send error
                                let conditions = {credential_repository:req.params.selected}
                                    , update = { $set:{credential_repository: req.params.username, password:req.params.password}}

                                model2.updateOne(conditions, update, {multi: true}).then(()=>{
                                    res.json(update)
                                    console.log(update)
                                }).catch(err=>{
                                    console.log(err)
                                })
                            }
                            else if(err){
                                jwt.verify(req.token, 'admin', (err) => {
                                    if(!err){
                                        //update selected document else send error
                                        let conditions = {credential_repository:req.params.selected}
                                            , update = { $set:{credential_repository: req.params.username, password:req.params.password}}

                                        model2.updateOne(conditions, update, {multi: true}).then(()=>{
                                            res.json(update)
                                            console.log(update)
                                        }).catch(err=>{
                                            console.log(err)
                                        })
                                    }
                                    //if not signed in, return error
                                    if(err){
                                        res.json("Must be signed in as management or admin user")
                                    }
                                })
                            }
                        })
                    }
                })
            }
        })
    }
    //if OU equals opinion publishing, use opinion publishing model to update data
    else if(req.params.OU === "opinion publishing"){
        //check if data in db exists
        model3.findOne({credential_repository: req.params.selected}, (err, data) => {
            if(err || !data){
                res.json("Selected username does not exist");
                console.log("Selected username does not exist");
            }
            else{
                //if data exists, check if logged in as default, management or admin
                //if logged in as default, return error
                jwt.verify(req.token, 'default', (err) => {
                    if(!err){
                        res.json("Must be admin or management user to update");
                        console.log("Must be admin or management user to update");
                    }
                    //if logged in as management or admin, update data
                    else if(err){
                        jwt.verify(req.token, 'management', (err) => {
                            if(!err){
                                //update selected document else send error
                                let conditions = {credential_repository:req.params.selected}
                                    , update = { $set:{credential_repository: req.params.username, password:req.params.password}}

                                model3.updateOne(conditions, update, {multi: true}).then(()=>{
                                    res.json(update)
                                    console.log(update)
                                }).catch(err=>{
                                    console.log(err)
                                })
                            }
                            else if(err){
                                jwt.verify(req.token, 'admin', (err) => {
                                    if(!err){
                                        //update selected document else send error
                                        let conditions = {credential_repository:req.params.selected}
                                            , update = { $set:{credential_repository: req.params.username, password:req.params.password}}

                                        model3.updateOne(conditions, update, {multi: true}).then(()=>{
                                            res.json(update)
                                            console.log(update)
                                        }).catch(err=>{
                                            console.log(err)
                                        })
                                    }
                                    //if data does not exist, return error
                                    if(err){
                                        res.json("Must be signed in as management or admin user")
                                    }
                                })
                            }
                        })
                    }
                })
            }
        })
    }
    //if OU equals software review, use software review model to update data
    else if(req.params.OU === "software review"){
        //check if data in db exists
        model4.findOne({credential_repository: req.params.selected}, (err, data) => {
            if(err || !data){
                res.json("Selected username does not exist");
                console.log("Selected username does not exist");
            }
            else{
                //if data exists, check if logged in as default, management or admin
                //if logged in as default, return error
                jwt.verify(req.token, 'default', (err) => {
                    if(!err){
                        res.json("Must be admin or management user to update");
                        console.log("Must be admin or management user to update");
                    }
                    //if logged in as management or admin, update data
                    else if(err){
                        jwt.verify(req.token, 'management', (err) => {
                            if(!err){
                                //update selected document else send error
                                let conditions = {credential_repository:req.params.selected}
                                    , update = { $set:{credential_repository: req.params.username, password:req.params.password}}

                                model4.updateOne(conditions, update, {multi: true}).then(()=>{
                                    res.json(update)
                                    console.log(update)
                                }).catch(err=>{
                                    console.log(err)
                                })
                            }
                            else if(err){
                                jwt.verify(req.token, 'admin', (err) => {
                                    if(!err){
                                        //update selected document else send error
                                        let conditions = {credential_repository:req.params.selected}
                                            , update = { $set:{credential_repository: req.params.username, password:req.params.password}}

                                        model4.updateOne(conditions, update, {multi: true}).then(()=>{
                                            res.json(update)
                                            console.log(update)
                                        }).catch(err=>{
                                            console.log(err)
                                        })
                                    }
                                    //if data does not exist, return error
                                    if(err){
                                        res.json("Must be signed in as management or admin user")
                                    }
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
})



//delete data in db api
app.get("/deleteData/:OU/:username/:password",verifyToken,(req, res) => {
    //if OU equals hardware review, use hardware review model to delete data
    if(req.params.OU === "hardware review"){
        //check if data in db exists
        model.findOne({credential_repository: req.params.username, password: req.params.password}, (err, data) => {
            if (err || !data) {
                res.json("Some details doesn't exist");
                console.log("user not found");
            }
            //if logged in as admin user, delete data, else return error
            else{
                jwt.verify(req.token, 'admin', (err) => {
                    if(!err){
                        model.deleteOne({ credential_repository:req.params.username, password:req.params.password}, function (err) {
                            if (!err) {
                                res.json("Deleted user");
                                console.log("Deleted user");
                            } else {
                                res.json("Error occurred");
                                console.log(err);
                            }
                        })
                    }
                    else{
                        res.json("Must be a admin user");
                        console.log("Must be a admin user");
                    }
                })
            }
        })
    }
    //if OU equals news management, use news management model to delete data
    else if(req.params.OU === "news management"){
        //check if data in db exists
        model2.findOne({credential_repository: req.params.username, password: req.params.password}, (err, data) => {
            if(err || !data){
                res.json("Some details does not exist");
                console.log("Some details does not exist");
            }
            //if logged in as admin user, delete data, else return error
            else{
                jwt.verify(req.token, 'admin', (err) => {
                    if(!err){
                        model2.deleteOne({ credential_repository:req.params.username, password:req.params.password}, function (err) {
                            if (!err) {
                                res.json("Deleted user");
                                console.log("Deleted user");
                            } else {
                                res.json("Error occurred");
                                console.log(err);
                            }
                        })
                    }
                    else{
                        res.json("Must be a admin user");
                        console.log("Must be a admin user");
                    }
                })
            }
        })
    }
    //if OU equals opinion publishing, use opinion publishing model to delete data
    else if(req.params.OU === "opinion publishing"){
        //check if data in db exists
        model3.findOne({credential_repository: req.params.username, password: req.params.password}, (err, data) => {
            if(err || !data){
                res.json("Some details does not exist");
                console.log("Some details does not exist");
            }
            //if logged in as admin user, delete data, else return error
            else{
                jwt.verify(req.token, 'admin', (err) => {
                    if(!err){
                        model3.deleteOne({ credential_repository:req.params.username, password:req.params.password}, function (err) {
                            if (!err) {
                                res.json("Deleted user");
                                console.log("Deleted user");
                            } else {
                                res.json("Error occurred");
                                console.log(err);
                            }
                        })
                    }
                    else{
                        res.json("Must be a admin user");
                        console.log("Must be a admin user");
                    }
                })
            }
        })
    }
    //if OU equals software review, use software review model to delete data
    else if(req.params.OU === "software review"){
        //check if data in db exists
        model4.findOne({credential_repository: req.params.username, password: req.params.password}, (err, data) => {
            if(err || !data){
                res.json("Some details does not exist");
                console.log("Some details does not exist");
            }
            //if logged in as admin user, delete data, else return error
            else{
                jwt.verify(req.token, 'admin', (err) => {
                    if(!err){
                        model4.deleteOne({ credential_repository:req.params.username, password:req.params.password}, function (err) {
                            if (!err) {
                                res.json("Deleted user");
                                console.log("Deleted user");
                            } else {
                                res.json("Error occurred");
                                console.log(err);
                            }
                        })
                    }
                    else{
                        res.json("Must be a admin user");
                        console.log("Must be a admin user");
                    }
                })
            }
        })
    }
    //if OU does not exist, return error
    else{
        res.json("OU does not exist");
    }
})



app.get('/', (req, res) => {
    res.json('Welcome to my server!')
})



//Checks if token is verified function
function verifyToken(req, res, next) {
    // Get auth header value
    const bearerHeader = req.headers['authorization'];
    // Check if bearer is undefined
    if(typeof bearerHeader !== 'undefined') {
        // Split at the space
        const bearer = bearerHeader.split(' ');
        // Get token from array
        const bearerToken = bearer[1];
        // Set the token
        req.token = bearerToken;
        // Next middleware
        next();
    } else {
        // Forbidden
        res.sendStatus(403);
    }
}



app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})
