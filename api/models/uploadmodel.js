var db = require('../database');
var _ = require('lodash');

class uploadModel {
    constructor() {
        //bind vars to document (table in db)
        this.model = {
            filename: null,
            originalname: null,
            mimetype: null,
            size: null,
            created: Date.now()
        }
    }

    initWithObject(object) {
        //fill model class vars with values
        this.model.filename = _.get(object, 'filename');
        this.model.originalname = _.get(object, 'originalname');
        this.model.mimetype = _.get(object, 'mimetype');
        this.model.size = _.get(object, 'size');
        this.model.created = Date.now();
    }

    save(data, cb){        
        const models = [];

        _.each(data, (file) => {
            this.initWithObject(file);            
            models.push(this.model);
        });
        
        if(models.length){
            const mdb = db.get();
            console.log(models);
            mdb.collection('fileshareapp').insertMany(models, (err, results) => {
                if(err) {                    
                    cb(err);
                }
            });
        }
    }
}

module.exports = uploadModel;