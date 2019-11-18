const mongoose = require('mongoose');
const uri = 'mongodb+srv://{username}:{password}!@{host}/{dbname}?retryWrites=true&w=majority'

const init = (config) => {
mongoose.connect(parseCString(config), {useNewUrlParser: true, useUnifiedTopology: true})
.then(res=> {
    // console.log(res);
    
})
.catch(err => {
    console.log(err);
});
};
const parseCString = (config) =>{
 var cs= uri.replace('{username}', config.username);
 var cs= cs.replace('{password}', config.password);
 var cs= cs.replace('{host}', config.host);
 var cs= cs.replace('{dbname}', config.dbname);
 return cs
}

module.exports = {
    init
};