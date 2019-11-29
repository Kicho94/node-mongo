const express = require('express');
const filmovi = require('../handlers/filmovi');
const bodyParser = require('body-parser');
var jwt = require('express-jwt');

const config = require('../config/index.js');
const DBConn = require('../db/connection');

var c = config.getConfig("db");


const api = express();
DBConn.init(c);
api.use(bodyParser.json());
api.use(
    jwt( { secret: config.getConfig('jwt').key} )
        
            );

api.get('/api/v1/filmovi', filmovi.getAll);
api.get('/api/v1/filmovi/:id', filmovi.getOne);
api.post('/api/v1/filmovi', filmovi.save);
api.put('/api/v1/filmovi/:id', filmovi.replace);
api.patch('/api/v1/filmovi/:id', filmovi.update);
api.delete('/api/v1/filmovi/:id', filmovi.remove);

api.listen(8080, err => {
    if(err){
        console.log('could not start server');
        console.log(err);
        return;
    }
    console.log('server started sucessfully on port 8080');
});

