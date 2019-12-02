const fs = require('fs');
const configFile = './config.json';
var conf = null;

const getConfig = (section) =>{
    if(fs.existsSync(configFile)){
        if(conf == null){
            var json =  fs.readFileSync(configFile);
            conf = JSON.parse(json);
          }
          return conf[section];
    } else {
        console.error('Could not find config file!');
    }
    return null;
}

module.exports = {
    getConfig
}