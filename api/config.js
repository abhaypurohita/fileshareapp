var path = require('path');
//empty object
var config = {};

config.mongodb = {};
config.uploadsettings = {};

//mongo db details
config.mongodb.protocol = 'mongodb://';
config.mongodb.host = 'localhost';
config.mongodb.port = ':27017';
config.mongodb.collection = 'fileshareapp';
config.mongodb.url = config.mongodb.protocol+config.mongodb.host+config.mongodb.port+'/'+config.mongodb.collection;

//file upload settings
config.uploadsettings.destination = path.join(__dirname, '.', 'uploadedfiles');

module.exports = config;
