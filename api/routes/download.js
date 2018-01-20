var express = require('express');
var router = express.Router();
var path = require('path');

//get config
var config = require('../config');

//default route for download
router.get('/', function(req, res, next){
    return res.json({
        message: 'No file specified'
    });
});

//route for download file
router.get('/:name', function(req, res, next) {
    const filename = req.params.name;
    const filepath = path.join(config.uploadsettings.destination, filename);
    
    return res.download(filepath, filename, (err) => {
        if(err) {
            res.status(404).json({
                error: {
                    message: 'File not found'
                }
            });
        }
    });
});

module.exports = router;