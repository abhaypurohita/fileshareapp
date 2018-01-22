var mongoClient = require('mongodb').MongoClient;

//custom config
var config = require('./config');

var state = {
    db: null,
}

//connect to mongodb
exports.connect = function(url, done) {
    if(state.db) {
        return done();
    }

    mongoClient.connect(url, function(err, db) {
        if(err) {
            return done(err);
        }
        const mydb = db.db(config.mongodb.collection);
        state.db = mydb;
        done();
    });
}

//get db conn
exports.get = function() {
    return state.db;
}

//close db conn
exports.close = function(done) {
    if(state.db) {
        state.db.close(function(err, result) {
            state.db = null;
            state.mode = null;
            done(err);
        })
    }
}