const mFilmovi = require('../models/filmovi');

const getAll = (req, res) => {
    
    console.log(req.query);
    let q = {user_id : req.user.id };
            
    let sort = {};
    
    
    if(req.query.oskar != undefined){
        q.oskar = req.query.oskar === 'true' ? true : false;
        
    }
    if(req.query.ime != undefined){
            q.ime = req.query.ime 
      
        }
    if(req.query.godina_from != undefined){
        if(q.godina == undefined){
            q.godina = {};
        }
        q.godina.$gte = new Date(Number (req.query.godina_from));

    }

    if(req.query.godina_to != undefined){
        if(q.godina == undefined){
            q.godina = {};
        }
        q.godina.$lt = new Date(Number(req.query.godina_to));
        
    }

    if(req.query.sort != undefined){
      let sortable = ['godina', 'ime']
      let sq = req.query.sort.split(":")
      if(sortable.indexOf(sq[0]) > -1){
          sort[sq[0]] = sq[1] =='desc' ? -1 : 1;
      }

    }

    

    mFilmovi.getAll(q, sort)
    .then(data => {
    res.status(200).send(data);
    console.log(data)
    })
    .catch(err => {
        res.status(500).send(err);
    });
  };

const getOne = (req, res) => {
        mFilmovi.getOne(req.params.id, req.user.id)
    .then(data => {
        res.status(200).send(data)
    })
    .catch(err => {
        res.status(500).send(err);
    });

};

const save = (req, res) => {
    var data = req.body;
    let er = 0;
    if(data.ime == undefined || data.ime.length == 0){er++;};
    if(data.zanr == undefined || data.zanr.length == 0){er++;};
    if(data.akteri == undefined || data.akteri.length == 0){er++;};
    if(data.godina == undefined || data.godina.length == 0){er++;};
    if(data.rezija == undefined || data.rezija.length == 0){er++;};
    if(data.oskar == undefined){er++;};
    if(er == 0){
    mFilmovi.save({...data, user_id: req.user.id})
    .then( () => {
        res.status(201).send('Created')
    })
    .catch(err => {
        res.status(500).send(err);
    });
} else {
    res.status(400).send('Bad request')
}

};

const replace = (req, res) => {
    var data = req.body;
    let er = 0;
    if(data.ime == undefined || data.ime.length == 0){er++;};
    if(data.zanr == undefined || data.zanr.length == 0){er++;};
    if(data.akteri == undefined || data.akteri.length == 0){er++;};
    if(data.godina == undefined || data.godina.length == 0){er++;};
    if(data.rezija == undefined || data.rezija.length == 0){er++;};
    if(data.oskar == undefined){er++;};
   if(er == 0){
    mFilmovi.replace(req.params.id, req.body)
   .then(()=> {
    res.status(204).send();
   })
   .catch(err=>{
res.status(500).send(err);
   });
} else {
    res.status(400).send('Bad Request')
}
};

const update = (req, res) => {
    mFilmovi.update(req.params.id, req.body)
    .then(()=> {
        res.status(204).send();
    })
    .catch(err =>{
        res.status(500).send(err)
    });
};

const remove = (req, res) => {
   mFilmovi.remove(req.params.id)
   .then(()=> {
    res.status(204).send();
   })
   .catch(err=>{
res.status(500).send(err);
   });
}






module.exports = {
    getAll,
    getOne,
    save,
    replace,
    update,
    remove 
}

