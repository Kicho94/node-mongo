const mongoose = require('mongoose');

const User = mongoose.model(
    'users',
    new mongoose.Schema({
        first_name: String,
        last_name : String,
        email: String,
        password: String,
        confirm_hash: String,
        confirmed: Boolean
    })
);

const createUser = (data) => {
    return new Promise((success,fail) => {
        var user = new User(data);
        user.save(err =>{
            if(err){
                return fail(err);
            }
            return success()
        });
    });
}

const getUserPasswordByEmail = (email) => {
    return new Promise((success, fail) => {
        User.find({email: email}, {password: 1, first_name: 1, last_name: 1}, (err, data) => {
         if(err){
             return fail(err);
         }    
         return success(data[0]);
        });
    });
}

const confirmUserAccount = (hash) => {
    return new Promise((success, fail) => { 
        User.update({confirm_hash: hash}, {confirmed:true}, (err) => {
            if(err){
                return fail(err);
            }
            return success();
        })
    })
}

module.exports = {
    createUser,
    getUserPasswordByEmail,
    confirmUserAccount
}