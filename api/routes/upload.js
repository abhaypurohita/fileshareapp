var express = require('express');
var router = express.Router();
var path = require('path');
//get config
var config = require('../config');
//set mutler
var multer = require('multer');

//set storage options
var storage = multer.diskStorage({
    destination: function(req, file, cb){
        cb(null, config.uploadsettings.destination);
    },
    filename: function(req, file, cb){
        cb(null, Date.now()+path.extname(file.originalname));
    }
});

var fileupload = multer({
    storage: storage
});

//route for upload file
router.post('/', fileupload.array('files'), function(req, res, next) {    
    //console.log('Received file upload request', req.files);
    const files = req.files;
    return res.json({
        files: files
    });
});

module.exports = router;