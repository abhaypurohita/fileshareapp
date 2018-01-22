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

//get model class
const UploadModel = require('../models/uploadmodel');

//route for upload file
router.post('/', fileupload.array('files'), function(req, res, next) {            
    modelupload = new UploadModel();

    //save to db
    modelupload.save(req.files, (err) => {
        //@todo - remove uploaded files if db error
       if(err) {
           res.status(503).json({
               error: {
                   message: 'Error uploading files'
               }
           });
       } else {
           res.status(200).json({
               message: 'Files uploaded successfully'
           });
       }
    });

    const files = req.files;
    return res.json({
        files: files
    });
});

module.exports = router;