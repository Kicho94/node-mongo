const mongoose = require('mongoose');

mongoose.connect('mongodb://dev:****!cluster0-hldqz.mongodb.net:27017/videoteka', {useNewUrlParser: true, useUnifiedTopology: true})
.then(res=> {
    console.log(res);
    
})
.catch(err => {
    console.log(err);
});

const Filmovi = mongoose.model(
    'Filmovi',
     { 
         ime: String,
         godina: Date,
         zanr: [String],
         rezija: String,
         oskar: Boolean,
         akteri : [String]
        
        });

    Filmovi.find((err, data) => {
        if(err){
            console.log('ERROR!')
        }
        console.log(data)
    })


console.log('end!');
