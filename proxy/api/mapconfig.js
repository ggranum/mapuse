'use strict';

let mapConfig = {
  'os': {
    id: 'os',
    extent: [-3276800, -3276800, 3276800, 3276800],
    resolutions: [1600, 800, 400, 200, 100, 50, 25, 10, 5, 2.5, 1, 0.5, 0.25, 0.125, 0.0625],
    center: [413674, 289141],
    crs: {
      code: 'EPSG:27700',
      proj4: `+proj=tmerc +lat_0=49 +lon_0=-2 +k=0.9996012717 +x_0=400000 +y_0=-100000
              +ellps=airy +towgs84=446.448,-125.157,542.06,0.15,0.247,0.842,-20.489
              +units=m +no_defs`,
    },
    layers: [{
      type: 'WMS',
      url: 'http://t0.ads.astuntechnology.com/open/osopen/service?',
      attributions: ['Astun Data Service &copy; Ordnance Survey.'],
      sublayers: ['osopen'],
      format: 'image/png',
      opacity: 1,
    }]
  },
  'os2': {
    id: 'os2',
    extent: [-3276800, -3276800, 3276800, 3276800],
    resolutions: [1600, 800, 400, 200, 100, 50, 25, 10, 5, 2.5, 1, 0.5, 0.25, 0.125, 0.0625],
    center: [413674, 289141],
    crs: {
      code: 'EPSG:27700',
      proj4: `+proj=tmerc +lat_0=49 +lon_0=-2 +k=0.9996012717 +x_0=400000 +y_0=-100000
              +ellps=airy +towgs84=446.448,-125.157,542.06,0.15,0.247,0.842,-20.489
              +units=m +no_defs`,
    },
    layers: [{
      type: 'WMS',
      url: 'http://t0.ads.astuntechnology.com/open/osopen/service?',
      attributions: ['Astun Data Service &copy; Ordnance Survey.'],
      sublayers: ['osopen'],
      format: 'image/png',
      opacity: 1,
    }],
  },
  'geology': {
    id: 'geology',
    extent: [0, 0, 700000, 1300000],
    resolutions: [1600, 800, 400, 200, 100, 50, 25, 10, 5, 2.5, 1, 0.5, 0.25, 0.125, 0.0625],
    center: [33600, 67500],
    crs: {
      code: 'EPSG:27700',
      proj4: `+proj=tmerc +lat_0=49 +lon_0=-2 +k=0.9996012717 +x_0=400000 +y_0=-100000
              +ellps=airy +towgs84=446.448,-125.157,542.06,0.15,0.247,0.842,-20.489
              +units=m +no_defs`,
    },
    layers: [{
      type: 'WMS',
      url: 'https://map.bgs.ac.uk/arcgis/services/UKSO/UKSO_BGS/MapServer/WMSServer',
      attributions: [
        '<p>©  <a href="http://bgs.ac.uk/data/services/soilwms.html">Contains British Geological Survey materials © NERC 2016</a></p>',
        ' <p>Some other attribution</p>',
      ],
      sublayers: ['Parent.Material.European.Soil.Bureau.Description.1km'],
      format: 'image/png',
      opacity: 1,
    }]
  },
  'historic': {
    is: 'historic',
    extent: [-3276800, -3276800, 3276800, 3276800],
    resolutions: [1600, 800, 400, 200, 100, 50, 25, 10, 5, 2.5, 1, 0.5, 0.25, 0.125, 0.0625],
    center: [413674, 289141],
    crs: {
      code: 'EPSG:27700',
      proj4: `+proj=tmerc +lat_0=49 +lon_0=-2 +k=0.9996012717 +x_0=400000 +y_0=-100000
              +ellps=airy +towgs84=446.448,-125.157,542.06,0.15,0.247,0.842,-20.489
              +units=m +no_defs`,
    },
    layers: [{
      type: 'WMS',
      url: 'http://t0.ads.astuntechnology.com/open/osopen/service?',
      attributions: ['Astun Data Service &copy; Ordnance Survey.'],
      sublayers: ['osopen'],
      format: 'image/png',
      opacity: 1,
    }],
  }
}

let getMapConfig = (req, res) =>{
  let mapId = req.params.mapId
  console.log('getMapConfig for: ' + mapId)
  let config = mapConfig[mapId]
  if (config !== undefined) {
    res.json(config)
  } else {
    res.status(400)
    res.json({
      message: `Unknown mapId (${mapId})`
    })
  }
}

module.exports = {
  getMapConfig
};
