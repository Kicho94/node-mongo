const fs = require('fs');
const configFile = './config.json';
var conf = null;

const getConfig = (section) =>{
    if(conf == null && fs.existsSync(configFile)){
      var json =  fs.readFileSync(configFile);
      conf = JSON.parse(json);
    } else {
        console.error('Could not find congif file!');
    }
    return conf[section];
}

module.exports = {
    getConfig
}