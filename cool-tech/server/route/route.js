const express = require('express');
const router  = express.Router();
const multer = require('multer');
const upload = multer();
const controller = require('../controller/log.controllers');

//Sign in and register endpoints
router.get("/signin/:OU/:username/:password", upload.none(), controller.getOneTest);
router.post("/register/:OU/:username/:password", upload.none(),controller.newTest);

module.exports = router;