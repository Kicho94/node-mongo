const mongoose = require('mongoose');

const Filmovi = mongoose.model(
        'filmovi', 
        new mongoose.Schema(
            { 
                ime: String,
                godina: Date,
                zanr: [String],
                rezija: String,
                oskar: Boolean,
                akteri : [String]
               
            },
            {
                collection: 'filmovi'
            })
    );

    const getAll = () => {
        return new Promise((success, fail) => {
            Filmovi.find({}, (err, data) => {
                if(err){
                    return fail(err);
                }
                return success(data);
            })
        })
    };

    const getOne = (id) => {
        return new Promise((success, fail) => {
            Filmovi.findById(id, (err, data) => {
                if(err){
                 return fail(err);
                }
                return success(data);
            });
        });
    };

    const save = (data) => {
        return new Promise((success, fail) => {
            var f = new Filmovi(data);
            f.save(data, err => {
                if(err){
                 return fail(err);
                }
                return success();
            });
        });
    };


    module.exports = {
        getAll,
        getOne,
        save
    }