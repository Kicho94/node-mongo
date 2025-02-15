const mongoose = require('mongoose');

mongoose.connect('mongodb+srv://dev:DEV123!@cluster0-hldqz.mongodb.net/videoteka?retryWrites=true&w=majority', {useNewUrlParser: true, useUnifiedTopology: true})
.then(res=> {
    console.log(res);
    
})
.catch(err => {
    console.log(err);
});

const Klient = mongoose.model(
    'klient', new mongoose.Schema(
        {
            ime : String, 
            prezime : String, 
            telefon : String, 
            email : String, 
            lozinka : String, 
            lokacija : {
                ulica : String, 
                broj: String, 
                stan : String, 
                grad : String, 
                drzava : String, 
                zip : String, 
            },
                gps : {
                    lon : Number, 
                    lat : Number
                },
             zanrovi : [String],
             _created : Date,
             _modified: Date
        },
       
        {
            collection: 'klienti'
        }
    )
);

var k = new Klient ({
    
        ime : "Janko", 
        prezime : "Stanko", 
        telefon : "0038970223305", 
        email : "janko@gmail.com", 
        lozinka : "qwerty", 
        lokacija : {
            ulica : "rajko zinzifov", 
            broj: "36", 
            stan : "1a", 
            grad : "Kumanovo", 
            drzava : "Makedonija", 
            zip : "1000", 
                  },
            gps : {
                lon : 14.4, 
                lat : 14.4
            },
         zanrovi : ["komedija", "akcija", "ljubaven"],
         _created : new Date (),
         _modified: new Date ()
    },
)

// k.save(err=> {
//        if (err){
//         console.log('could not save record');
//         return;
//       }
//       console.log('save successfull')
//       })

Klient.find({ "lokacija.grad": "Kumanovo", "zanrovi" : "akcija" }, (err, data) => {
    if(err){
        console.log("could not read data");
        return;
    }
   data.forEach( (k, i) => {
       console.log(k.ime, ' ', k.prezime, ' ', k.email)
   })
})


// const Filmovi = mongoose.model(
//     'filmovi', new mongoose.Schema(
//         { 
//             ime: String,
//             godina: Date,
//             zanr: [String],
//             rezija: String,
//             oskar: Boolean,
//             akteri : [String]
           
//         },
//         {
//             collection: 'filmovi'
//         })
//         );
     
//         var f = new Filmovi({
//         ime: 'AAA',
//         godina: new Date('2019-11-11t19:30:00Z'),
//         zanr: ['BBB'],
//         rezija: 'test',
//         oskar: false,
//         akteri : ['aaaa bbb']
       
//      })

//      f.save(err=> {
//          if (err){
//              console.log('could not save record')
//          }
//      })

//     Filmovi.find({}, (err, data) => {
//         if(err){
//             console.log('ERROR!')
//         }
//         console.log(data)
//     })


// console.log('end!');


