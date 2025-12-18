var APP_DATA = {
  "scenes": [
    {
      "id": "0-passage",
      "name": "PASSAGE",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "yaw": -0.06222333715123618,
        "pitch": 0.0031660707735508,
        "fov": 1.325599857056214
      },
      "linkHotspots": [
        {
          "yaw": -1.10270816078601,
          "pitch": 0.1135751800266327,
          "rotation": 4.71238898038469,
          "target": "1-living"
        },
        {
          "yaw": 0.2722275124694544,
          "pitch": 0.05083326152071166,
          "rotation": 1.5707963267948966,
          "target": "2-dining"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "1-living",
      "name": "LIVING",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "yaw": 0.0026182529406479915,
        "pitch": 0.014470567585235017,
        "fov": 0.8724850729105058
      },
      "linkHotspots": [
        {
          "yaw": 0.8128573394669374,
          "pitch": 0.15984117528974728,
          "rotation": 3.141592653589793,
          "target": "0-passage"
        },
        {
          "yaw": 0.8700555914440002,
          "pitch": 0.012805305648416976,
          "rotation": 1.5707963267948966,
          "target": "2-dining"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "2-dining",
      "name": "DINING",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "yaw": 0.05351512152205551,
        "pitch": 0.007761533098655349,
        "fov": 0.793214570973787
      },
      "linkHotspots": [
        {
          "yaw": 1.5947451674442918,
          "pitch": 0.013784275966845172,
          "rotation": 3.141592653589793,
          "target": "0-passage"
        },
        {
          "yaw": 2.377195059174192,
          "pitch": 0.08619720601567948,
          "rotation": 1.5707963267948966,
          "target": "1-living"
        }
      ],
      "infoHotspots": []
    }
  ],
  "name": "SIGNATURE BUILDERS AND INTERIORS 360",
  "settings": {
    "mouseViewMode": "drag",
    "autorotateEnabled": true,
    "fullscreenButton": true,
    "viewControlButtons": true
  }
};
