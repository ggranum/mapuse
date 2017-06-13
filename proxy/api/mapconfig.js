'use strict';

let fs = require('fs');

let getMapConfig = (req, res) =>{
  let mapId = req.params.mapId
  let configFile = __dirname + '/mapper-config/' + mapId + '-map.json'
  console.log('getMapConfig for: ' + mapId + ' from file ' + configFile)
  try {
    let config = JSON.parse(fs.readFileSync(configFile, { encoding: 'utf8' }))
    res.json(config)
  } catch (e) {
    res.status(400)
    res.json({
      message: `Unknown mapId ${mapId} or problem parsing the config file`
    })
  }
}

module.exports = {
  getMapConfig
};
