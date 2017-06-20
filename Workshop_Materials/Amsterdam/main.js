var style_object = {
  "version": 8,
  "name": "basiskaart",
  "sources": {
    "wm_vector":{
      "type": "vector",
      "tiles": [
        "https://t1.data.amsterdam.nl/wm/{z}/{x}/{y}.pbf",
        "https://t2.data.amsterdam.nl/wm/{z}/{x}/{y}.pbf",
        "https://t3.data.amsterdam.nl/wm/{z}/{x}/{y}.pbf",
        "https://t4.data.amsterdam.nl/wm/{z}/{x}/{y}.pbf"]
    }
  },
  "layers":[
    {
      "id":  "background",
      "type": "background",
      "paint": {
        "background-color":"#FFFFFF"
      }
    },
    {
      "id": "water",
      "type": "fill",
      "source": "wm_vector",
      "source-layer": "water",
      "maxzoom": 21,
      "minzoom": 0,
      "paint": {
        "fill-color" : "#95c6d5",
        "fill-outline-color": "#95c6d5"
      }
    },
    { 
      "id": "haven",
      "type": "fill",
      "source": "wm_vector",
      "source-layer": "haven",
      "maxzoom": 21,
      "minzoom": 0,
      "paint":{
        "fill-color": "#95c6d5",
        "fill-outline-color": "#95c6d5"
      }
    },
    { 
      "id": "terein_aanlegsteiger",
      "type": "fill",
      "source": "wm_vector",
      "source-layer": "terein_aanlegsteiger",
      "maxzoom": 21,
      "minzoom": 0,
      "paint":{
        "fill-color": "#f6f6f4",
        "fill-outline-color": "#acacac"
      }
    },
    { 
      "id": "terein_basaltblokken_steenglooiing",
      "type": "fill",
      "source": "wm_vector",
      "source-layer": "terein_basaltblokken_steenglooiing",
      "maxzoom": 21,
      "minzoom": 0,
      "paint":{
        "fill-color": "#f6f6f4",
        "fill-outline-color": "#f6f6f4"
      }
    },
    { 
      "id": "terein_grasland",
      "type": "fill",
      "source": "wm_vector",
      "source-layer": "terein_grasland",
      "maxzoom": 21,
      "minzoom": 0,
      "paint":{
        "fill-color": "#dceacf",
        "fill-outline-color": "#dceacf"
      }
    },
    { 
      "id": "terein_akkerland",
      "type": "fill",
      "source": "wm_vector",
      "source-layer": "terein_akkerland",
      "maxzoom": 21,
      "minzoom": 0,
      "paint":{
        "fill-color": "#dceacf",
        "fill-outline-color": "#dceacf"
      }
    },
    { 
      "id": "terein_openbaar_groen",
      "type": "fill",
      "source": "wm_vector",
      "source-layer": "terein_openbaar_groen",
      "maxzoom": 21,
      "minzoom": 0,
      "paint":{
        "fill-color": "#f9f9e7",
        "fill-outline-color": "#f9f9e7"
      }
    },
    {
      "id": "terein_bos_groen_sport",
      "type": "fill",
      "source": "wm_vector",
      "source-layer": "terein_bos_groen_sport",
      "maxzoom": 21,
      "minzoom": 0,
      "paint": {
        "fill-color" : "#cbe0b8",
        "fill-outline-color": "#cbe0b8"
      }
    },
    { 
      "id": "terein_spoorbaanlichaam",
      "type": "fill",
      "source": "wm_vector",
      "source-layer": "terein_spoorbaanlichaam",
      "maxzoom": 21,
      "minzoom": 0,
      "paint":{
        "fill-color": "#fff",
        "fill-outline-color": "#fff"
      }
    },
    { 
      "id": "terein_bos-loofbos",
      "type": "fill",
      "source": "wm_vector",
      "source-layer": "terein_bos-loofbos",
      "maxzoom": 21,
      "minzoom": 0,
      "paint":{
        "fill-color": "#cbe0b8",
        "fill-outline-color": "#cbe0b8"
      }
    },
    { 
      "id": "terein_bos-gemengd_bos",
      "type": "fill",
      "source": "wm_vector",
      "source-layer": "terein_bos-gemengd_bos",
      "maxzoom": 21,
      "minzoom": 0,
      "paint":{
        "fill-color": "#cbe0b8",
        "fill-outline-color": "#cbe0b8"
      }
    },
    { 
      "id": "terein_bos-griend",
      "type": "fill",
      "source": "wm_vector",
      "source-layer": "terein_bos-griend",
      "maxzoom": 21,
      "minzoom": 0,
      "paint":{
        "fill-color": "#cbe0b8",
        "fill-outline-color": "#cbe0b8"
      }
    },
    { 
      "id": "terein_boomgaard",
      "type": "fill",
      "source": "wm_vector",
      "source-layer": "terein_boomgaard",
      "maxzoom": 21,
      "minzoom": 0,
      "paint":{
        "fill-color": "#d4e5c4",
        "fill-outline-color": "#d4e5c4"
      }
    },
    { 
      "id": "terein_boomkwekerij",
      "type": "fill",
      "source": "wm_vector",
      "source-layer": "terein_boomkwekerij",
      "maxzoom": 21,
      "minzoom": 0,
      "paint":{
        "fill-color": "#d4e5c4",
        "fill-outline-color": "#d4e5c4"
      }
    },
    { 
      "id": "terein_dodenakker",
      "type": "fill",
      "source": "wm_vector",
      "source-layer": "terein_dodenakker",
      "maxzoom": 21,
      "minzoom": 0,
      "paint":{
        "fill-color": "#d4e5c4",
        "fill-outline-color": "#d4e5c4"
      }
    },
    { 
      "id": "terein_dodenakker_met_bos",
      "type": "fill",
      "source": "wm_vector",
      "source-layer": "terein_dodenakker_met_bos",
      "maxzoom": 21,
      "minzoom": 0,
      "paint":{
        "fill-color": "#d4e5c4",
        "fill-outline-color": "#d4e5c4"
      }
    },
    { 
      "id": "terein_fruitkwekerij",
      "type": "fill",
      "source": "wm_vector",
      "source-layer": "terein_fruitkwekerij",
      "maxzoom": 21,
      "minzoom": 0,
      "paint":{
        "fill-color": "#d4e5c4",
        "fill-outline-color": "#d4e5c4"
      }
    },
    {
      "id": "terein_agrarisch",
      "type": "fill",
      "source": "wm_vector",
      "source-layer": "terein_agrarisch",
      "maxzoom": 21,
      "minzoom": 0,
      "paint": {
        "fill-color" : "#dceacf",
        "fill-outline-color": "#dceacf"
      }
    },
    {
      "id": "terein_overig",
      "type": "fill",
      "source": "wm_vector",
      "source-layer": "terein_overig",
      "maxzoom": 21,
      "minzoom": 0,
      "paint": {
        "fill-color" : "#f2ecee",
        "fill-outline-color": "#f2ecee"
      }
    },
    {
      "id": "terein_zand",
      "type": "fill",
      "source": "wm_vector",
      "source-layer": "terein_zand",
      "maxzoom": 21,
      "minzoom": 0,
      "paint": {
        "fill-color" : "#fbf0de",
        "fill-outline-color": "#fbf0de"
      }
    },
    {
      "id": "water_breed",
      "type": "line",
      "source": "wm_vector",
      "source-layer": "water_breed",
      "maxzoom": 21,
      "minzoom": 0,
      "paint": {
        "line-color" : "#95c6d5",
        "line-width": {
          "type": "exponential",
          "stops": [
            [0, 0.1],
            [11, 0.1],
            [12, 0.1],
            [13, 0.1],
            [14, 0.1],
            [15, 0.1]
          ]
        }
      }
    },
    {
      "id": "water_smal",
      "type": "line",
      "source": "wm_vector",
      "source-layer": "water_smal",
      "maxzoom": 21,
      "minzoom": 0,
      "paint": {
        "line-color" : "#95c6d5",
        "line-width": {
          "type": "exponential",
          "stops": [
            [0, 0.1],
            [11, 0.1],
            [12, 0.1],
            [13, 0.2],
            [14, 0.2],
            [15, 0.2]
          ]
        }
      }
    },
    { 
      "id": "waterbassin",
      "type": "fill",
      "source": "wm_vector",
      "source-layer": "waterbassin",
      "maxzoom": 21,
      "minzoom": 0,
      "paint":{
        "fill-color": "#95c6d5",
        "fill-outline-color": "#95c6d5"
      }
    },
    {
      "id": "terein_bedrijfsterein",
      "type": "fill",
      "source": "wm_vector",
      "source-layer": "terein_bedrijfsterein",
      "maxzoom": 21,
      "minzoom": 0,
      "paint": {
        "fill-color" : "#f6f6f4",
        "fill-outline-color": "#c9c8c4"
      }
    },
    {
      "id": "gebouwen",
      "type": "fill",
      "source": "wm_vector",
      "source-layer": "gebouwen",
      "maxzoom": 21,
      "minzoom": 0,
      "paint": {
        "fill-color" : "#EBEAE6",
        "fill-outline-color": {
          "type": "interval",
          "stops": [
            [0, "rgba(0,0,0,0)"],
            [12, "rgba(0,0,0,0)"],
            [13, "rgba(0,0,0,0)"],
            [14,"#C9C7C2"],
            [15,"#C9C7C2" ]
          ]
        }
      }
    },
    { 
      "id": "gebouwen_overdekt",
      "type": "fill",
      "source": "wm_vector",
      "source-layer": "gebouwen_overdekt",
      "maxzoom": 21,
      "minzoom": 0,
      "paint": {
        "fill-color" : "#EBEAE6",
        "fill-outline-color": {
          "type": "interval",
          "stops": [
            [0, "rgba(0,0,0,0)"],
            [12, "rgba(0,0,0,0)"],
            [13, "rgba(0,0,0,0)"],
            [14,"#C9C7C2"],
            [15,"#C9C7C2" ]
          ]
        }
      }
    },
    { 
      "id": "gebouwen_hoogbouw",
      "type": "fill",
      "source": "wm_vector",
      "source-layer": "gebouwen_hoogbouw",
      "maxzoom": 21,
      "minzoom": 0,
      "paint": {
        "fill-color" : "#e6e5e0",
        "fill-outline-color": {
          "type": "interval",
          "stops": [
            [0, "rgba(0,0,0,0)"],
            [12, "rgba(0,0,0,0)"],
            [13, "rgba(0,0,0,0)"],
            [14,"#C9C7C2"],
            [15,"#C9C7C2" ]
          ]
        }
      }
    },
    {
      "id": "gebouwen_kassen",
      "type": "fill",
      "source": "wm_vector",
      "source-layer": "gebouwen_kassen",
      "maxzoom": 21,
      "minzoom": 0,
      "paint": {
        "fill-color" : "#e3dbd3",
        "fill-outline-color": "#c9c7c2"
      }
    },
    { 
      "id": "terein_binnentuin",
      "type": "fill",
      "source": "wm_vector",
      "source-layer": "terein_binnentuin",
      "maxzoom": 21,
      "minzoom": 15,
      "paint":{
        "fill-color": "#f9f9e7",
        "fill-outline-color": "#c9c7c2"
      }
    },
    { 
      "id": "weg_startbaan_landingsbaan",
      "type": "fill",
      "source": "wm_vector",
      "source-layer": "weg_startbaan_landingsbaan",
      "maxzoom": 21,
      "minzoom": 0,
      "paint":{
        "fill-color": "#fff",
        "fill-outline-color": "#fff"
      }
    },
    {
      "id": "weg_straat_in_tunnel",
      "type": "line",
      "source": "wm_vector",
      "source-layer": "weg_straat_in_tunnel",
      "maxzoom": 21,
      "minzoom": 0,
      "paint": {
        "line-color" : "#ffffff",
        "line-width": {
          "stops": [
            [14, 0.75],
            [15, 2]
          ]
        },
        "line-dasharray": {
          "stops": [
            [14, [2,3]],
            [15, [2,3]]
          ]
        }
      }
    },
    {
      "id": "weg_hoofdweg_in_tunnel",
      "type": "line",
      "source": "wm_vector",
      "source-layer": "weg_hoofdweg_in_tunnel",
      "maxzoom": 21,
      "minzoom": 0,
      "paint": {
        "line-color" : "#fefafa",
        "line-width": {
          "stops": [
            [11, 1],
            [12, 2],
            [13, 2],
            [14, 3],
            [15, 4]
            
            
          ]
        },
        "line-dasharray": [2,3]
      }
    },
    {
      "id": "weg_regionale_weg_in_tunnel",
      "type": "line",
      "source": "wm_vector",
      "source-layer": "weg_regionale_weg_in_tunnel",
      "maxzoom": 21,
      "minzoom": 0,
      "paint": {
        "line-color" : "#acacac",
        "line-width": {
          "stops": [
            [11, 1],
            [12, 2],
            [13, 2],
            [14, 4],
            [15, 5]
          ]
        },
        "line-dasharray": [4,3]
      }
    },
    {
      "id": "weg_autosnelweg_in_tunnel-case",
      "type": "line",
      "source": "wm_vector",
      "source-layer": "weg_autosnelweg_in_tunnel",
      "maxzoom": 21,
      "minzoom": 0,
      "paint": {
        "line-color" : "#fa0000",
        "line-width": {
          "stops": [
            [11, 1],
            [12, 2],
            [13, 2],
            [14, 2],
            [15, 2]
          ]
        },
        "line-dasharray": {
          "stops": [
            [11, [1,3]],
            [12, [1,3]],
            [13, [1,3]],
            [14, [3,3]],
            [15, [4,3]]
          ]
        }
      }
    },
    {
      "id": "weg_regionale_weg_in_tunnel_fill",
      "type": "line",
      "source": "wm_vector",
      "source-layer": "weg_regionale_weg_in_tunnel",
      "maxzoom": 21,
      "minzoom": 0,
      "paint": {
        "line-color" : "#ffffff",
        "line-width": {
          "stops": [
            [11, 0.5],
            [12, 1],
            [13, 1],
            [14, 2],
            [15, 3]
          ]
        }
      }
    },
    {
      "id": "weg_autosnelweg_in_tunnel-fill",
      "type": "line",
      "source": "wm_vector",
      "source-layer": "weg_autosnelweg_in_tunnel",
      "maxzoom": 21,
      "minzoom": 0,
      "paint": {
        "line-color" : "#fefafa",
        "line-width": {
          "stops": [
            [11, 1],
            [12, 1],
            [13, 1.5],
            [14, 2],
            [15, 3]
          ]
        }
      }
    },
    {
      "id": "weg_hoofdweg-case",
      "type": "line",
      "source": "wm_vector",
      "source-layer": "weg_hoofdweg",
      "maxzoom": 21,
      "minzoom": 0,
      "paint": {
        "line-color" : "#acacac",
        "line-width": {
          "type":"exponential",
          "stops": [
            [8, 1],
            [12, 6],
            [13, 8],
            [14, 10]
          ]
        }
      }
    },
    {
      "id": "weg_hoofdweg-fill",
      "type": "line",
      "source": "wm_vector",
      "source-layer": "weg_hoofdweg",
      "maxzoom": 21,
      "minzoom": 0,
      "paint": {
        "line-color" : "#ffffff",
        "line-width": {
          "type":"exponential",
          "stops": [
            [8, 0.1],
            [12, 4],
            [13, 5],
            [14, 6]
            
          ]
        }
      }
    },
    {
      "id": "weg_regionale_weg-case",
      "type": "line",
      "source": "wm_vector",
      "source-layer": "weg_regionale_weg",
      "maxzoom": 21,
      "minzoom": 0,
      "paint": {
        "line-color" : "#acacac",
        "line-width": {
          "type":"exponential",
          "stops": [
            [8, 1],
            [11, 3],
            [12, 3],
            [13, 4],
            [14, 5]
            
          ]
        }
      }
    },
    {
      "id": "weg_regionale_weg-fill",
      "type": "line",
      "source": "wm_vector",
      "source-layer": "weg_regionale_weg",
      "maxzoom": 21,
      "minzoom": 0,
      "paint": {
        "line-color" : "#ffffff",
        "line-width": {
          "type":"exponential",
          "stops": [
            [8, 0.1],
            [11, 2],
            [12, 2],
            [13, 3],
            [14, 4]
            
          ]
        }
      }
    },
    {
      "id": "weg_straat-case",
      "type": "line",
      "source": "wm_vector",
      "source-layer": "weg_straat",
      "maxzoom": 21,
      "minzoom": 0,
      "paint": {
        "line-color" : "#ebeae6",
        "line-width": {
          "type":"exponential",
          "stops": [
            [0,0],
            [8, 0],
            [11,1],
            [12, 2],
            [13, 1.75],
            [14, 1.75]
          ]
        }
      }
    },
    {
      "id": "weg_straat-fill",
      "type": "line",
      "source": "wm_vector",
      "source-layer": "weg_straat",
      "maxzoom": 21,
      "minzoom": 0,
      "paint": {
        "line-color" : "#ffffff",
        "line-width": {
          "type":"exponential",
          "stops": [
            [8, 0.1],
            [11,0.5],
            [12, 1],
            [13, 0.75],
            [14, 0.75]
            
          ]
        }
      }
    },
    { 
      "id": "terein0_erf",
      "type":"fill",
      "source": "wm_vector",
      "source-layer": "terrein0",
      "maxzoom": 21,
      "minzoom": 0,
      "filter":["in", "bgt_fysiekvoorkomen", "erf", "zand", "onverhard", "houtwal", "duin", "rietland", "oever", "slootkant"],
      "paint":{
        "fill-color": "#F9F9E7",
        "fill-outline-color":{
          "stops":[
            [0,"rgba(0,0,0,0)"],
            [17,"rgba(0,0,0,0)"],
            [18,"#C9C7C2"]
          ]
        }
      }
    },
    { 
      "id": "terein0_groen",
      "type":"fill",
      "source": "wm_vector",
      "source-layer": "terrein0",
      "maxzoom": 21,
      "minzoom": 0,
      "filter":["in", "bgt_fysiekvoorkomen", "groenvoorziening", "struiken", "grasland agrarisch", "grasland overig"],
      "paint":{
        "fill-outline-color": "rgba(0,0,0,0)",
        "fill-color": "#DCEACF"
      }
    },
    { 
      "id": "terein0_verharding",
      "type":"fill",
      "source": "wm_vector",
      "source-layer": "terrein0",
      "maxzoom": 21,
      "minzoom": 0,
      "filter":["in", "bgt_fysiekvoorkomen", "gesloten verharding", "half verhard", "perron"],
      "paint":{
        "fill-outline-color": "rgba(0,0,0,0)",
        "fill-color": "#FFFFFF"
      }
    },
    { 
      "id": "terein0_harlf_verharding",
      "type":"fill",
      "source": "wm_vector",
      "source-layer": "terrein0",
      "maxzoom": 21,
      "minzoom": 0,
      "filter":["in", "bgt_fysiekvoorkomen", "open verharding", "transitie", "perron"],
      "paint":{
        "fill-outline-color": "rgba(0,0,0,0)",
        "fill-color": "#F4F6F6"
      }
    },
    { 
      "id": "terein0_bos",
      "type": "fill",
      "source": "wm_vector",
      "source-layer": "terrein0",
      "maxzoom": 21,
      "minzoom": 0,
      "filter":["in", "bgt_fysiekvoorkomen", "naaldbos", "fruitteelt", "loofbos", "bouwland", "gemengd bos","moeras", "boomteelt" ],
      "paint":{
        "fill-outline-color": "rgba(0,0,0,0)",
        "fill-color": "#cbe0b8"
      }
    },
      
    { 
      "id": "overbruggingsdeel",
      "type":"fill",
      "source": "wm_vector",
      "source-layer": "overbruggingsdeel",
      "maxzoom": 21,
      "minzoom": 0,
      "paint": {
        "fill-color": "#ffffff",
        "fill-outline-color": "#ffffff"
      }
    },
    
    { 
      "id" : "wegdeel_rijbanen_case",
      "type": "line",
      "source": "wm_vector",
      "source-layer": "wegdeel_vlak0",
      "maxzoom": 21,
      "minzoom": 17,
      "filter": ["in", "bgt_functie", "inrit","OV-baan","rijbaan autoweg", "rijbaan lokale weg", "rijbaan regionale weg", "transitie", "fietspad", "baan voor vliegverkeer"],
      "paint": {
        "line-width" : 3,
        "line-color" : "#C9C7C2"
      }
    },
    {
      "id" : "wegdeel_rijbanen_fill",
      "type": "fill",
      "source": "wm_vector",
      "source-layer": "wegdeel_vlak0",
      "maxzoom": 21,
      "minzoom": 0,
      "filter": ["in", "bgt_functie", "inrit","OV-baan","rijbaan autoweg", "rijbaan lokale weg", "rijbaan regionale weg", "transitie", "fietspad", "baan voor vliegverkeer"],
      "paint": {
        "fill-color" : "#FFFFFF"
      }
    },
    
    { 
      "id" : "wegdeel_voetgangers_case",
      "type": "line",
      "source": "wm_vector",
      "source-layer": "wegdeel_vlak0",
      "maxzoom": 21,
      "minzoom": 17,
      "filter": ["in", "bgt_functie", "parkeervlak","ruiterpad","voetgangersgebied", "voetpad", "woonerf", "verkeerseiland"],
      "paint": {
        "line-width" : 3,
        "line-color" : "#C9C7C2"
      }
    },
    { 
      "id" : "wegdeel_voetgangers_fill",
      "type": "fill",
      "source": "wm_vector",
      "source-layer": "wegdeel_vlak0",
      "maxzoom": 21,
      "minzoom": 0,
      "filter": ["in", "bgt_functie", "parkeervlak","ruiterpad","voetgangersgebied", "voetpad", "woonerf", "verkeerseiland"],
      "paint": {
        "fill-color" : "#F2ECEE"
      }
    },
    { 
      "id" : "wegdeel_berm_case",
      "type": "line",
      "source": "wm_vector",
      "source-layer": "wegdeel_vlak0",
      "maxzoom": 21,
      "minzoom": 17,
      "filter": ["in", "bgt_functie", "berm"],
      "paint": {
        "line-width" : 3,
        "line-color" : "#C9C7C2"
      }
    },
    { 
      "id" : "wegdeel_berm_fill",
      "type": "fill",
      "source": "wm_vector",
      "source-layer": "wegdeel_vlak0",
      "maxzoom": 21,
      "minzoom": 0,
      "filter": [
        "all",
        ["in", "bgt_functie", "berm"],
        ["in", "bgt_fysiekvoorkomen" , "gesloten verharding","half verhard","open verharding","transitie"]
      ],
      "paint": {
        "fill-color" : "#F2ECEE"
      }
    },
    { 
      "id" : "wegdeel_berm_fill2",
      "type": "fill",
      "source": "wm_vector",
      "source-layer": "wegdeel_vlak0",
      "maxzoom": 21,
      "minzoom": 0,
      "filter": [
        "all",
        ["in", "bgt_functie", "berm"],
        ["in", "bgt_fysiekvoorkomen" , "groenvoorziening","onverhard"]
      ],
      "paint": {
        "fill-color" : "#DCEACF"
      }
    },
    { 
      "id": "inrichtingselement_vlak0",
      "type":"fill",
      "source": "wm_vector",
      "source-layer": "inrichtingselement_vlak0",
      "maxzoom": 21,
      "minzoom": 0,
      "paint":{
        "fill-outline-color": "#C9C7C2",
        "fill-color": {
          "property": "bgt_type",
          "type": "categorical",
          "stops": [
            ["steiger",   "#F2F1EE"],
            ["sluis",     "#C9C7C2"],
            ["gemaal",    "#C9C7C2"],
            ["stuw",      "#C9C7C2"],
            ["muur",      "#E0DED8"]
          ],
          "default": "#E0DED8"
        }
      }
    },
    { 
      "id" : "wegdeel_autosnelweg_case",
      "type": "line",
      "source": "wm_vector",
      "source-layer": "wegdeel_vlak0",
      "maxzoom": 21,
      "minzoom": 0,
      "filter": ["==", "bgt_functie", "rijbaan autosnelweg"],
      "paint": {
        "line-width" : 4,
        "line-color" : "#FA0000"
      }
    },
    { 
      "id" : "wegdeel_autosnelweg_case1",
      "type": "line",
      "source": "wm_vector",
      "source-layer": "wegdeel_vlak1",
      "maxzoom": 21,
      "minzoom": 0,
      "filter": ["==", "bgt_functie", "rijbaan autosnelweg"],
      "paint": {
        "line-width" : 4,
        "line-color" : "#FA0000"
      }
    },
    {
      "id" : "wegdeel_autosnelweg_fill",
      "type": "fill",
      "source": "wm_vector",
      "source-layer": "wegdeel_vlak0",
      "maxzoom": 21,
      "minzoom": 0,
      "filter": ["==", "bgt_functie", "rijbaan autosnelweg"],
      "paint": {
        "fill-color" : "#FEFAFA"
      }
    },
    
    {
      "id" : "wegdeel_autosnelweg_fill1",
      "type": "fill",
      "source": "wm_vector",
      "source-layer": "wegdeel_vlak1",
      "maxzoom": 21,
      "minzoom": 0,
      "filter": ["==", "bgt_functie", "rijbaan autosnelweg"],
      "paint": {
        "fill-color" : "#FEFAFA"
      }
    },
    {
      "id": "gebouwen_achter",
      "type":"line",
      "source": "wm_vector",
      "source-layer": "gebouwen0",
      "maxzoom": 17,
      "minzoom": 16,
      "paint":{
        "line-color": "#C9C7C2",
        "line-width": 2
      }
    },
    { 
      "id": "gebouwen0",
      "type":"fill",
      "source": "wm_vector",
      "source-layer": "gebouwen0",
      "maxzoom": 21,
      "minzoom": 0,
      "paint":{
        "fill-outline-color": {
          "type": "interval",
          "stops": [
            [0,   "#EBEAE6"],
            [16,   "rgba(201, 199, 194, 0.3)"],
            [17,  "#C9C7C2"]
          ],
          "default": "#C9C7C2"
        },
        "fill-color": {
          "property": "bgt_type",
          "type": "categorical",
          "stops": [
            [ "bassin",     "#E0DED8"],
            [ "bezinkbak",    "#E0DED8"],
            [ "lage trafo",   "#E0DED8"],
            [ "niet-wm_vector", "#E0DED8"],
            [ "open loods",   "#E0DED8"],
            [ "opslagtank",   "#E0DED8"],
            [ "overkapping",  "#E0DED8"],
            [ "transitie",    "#E0DED8"],
            [ "windturbine",  "#E0DED8"]
          ],
        "default": "#EBEAE6"
        }
      }
    },

    { 
      "id": "terein1_erf",
      "type":"fill",
      "source": "wm_vector",
      "source-layer": "terrein1",
      "maxzoom": 21,
      "minzoom": 0,
      "filter":["in", "bgt_fysiekvoorkomen", "erf", "zand", "onverhard", "houtwal", "duin", "rietland", "oever", "slootkant"],
      "paint":{
        "fill-color": "#F9F9E7",
        "fill-outline-color":{
          "stops":[
            [0,"rgba(0,0,0,0)"],
            [17,"rgba(0,0,0,0)"],
            [18,"#C9C7C2"]
          ]
        }
      }
    },
    { 
      "id": "terein1_groen",
      "type":"fill",
      "source": "wm_vector",
      "source-layer": "terrein1",
      "maxzoom": 21,
      "minzoom": 0,
      "filter":["in", "bgt_fysiekvoorkomen", "groenvoorziening", "struiken", "grasland agrarisch", "grasland overig"],
      "paint":{
        "fill-outline-color": "rgba(0,0,0,0)",
        "fill-color": "#DCEACF"
      }
    },
    { 
      "id": "terein1_verharding",
      "type":"fill",
      "source": "wm_vector",
      "source-layer": "terrein1",
      "maxzoom": 21,
      "minzoom": 0,
      "filter":["in", "bgt_fysiekvoorkomen", "gesloten verharding", "half verhard", "perron"],
      "paint":{
        "fill-outline-color": "rgba(0,0,0,0)",
        "fill-color": "#FFFFFF"
      }
    },
    { 
      "id": "terein1_harlf_verharding",
      "type":"fill",
      "source": "wm_vector",
      "source-layer": "terrein1",
      "maxzoom": 21,
      "minzoom": 0,
      "filter":["in", "bgt_fysiekvoorkomen", "open verharding", "transitie", "perron"],
      "paint":{
        "fill-outline-color": "rgba(0,0,0,0)",
        "fill-color": "#F4F6F6"
      }
    },
    { 
      "id": "terein1_bos",
      "type": "fill",
      "source": "wm_vector",
      "source-layer": "terrein1",
      "maxzoom": 21,
      "minzoom": 0,
      "filter":["in", "bgt_fysiekvoorkomen", "naaldbos", "fruitteelt", "loofbos", "bouwland", "gemengd bos","moeras", "boomteelt" ],
      "paint":{
        "fill-outline-color": "rgba(0,0,0,0)",
        "fill-color": "#cbe0b8"
      }
    },
    { 
      "id" : "wegdeel1_rijbanen_case",
      "type": "line",
      "source": "wm_vector",
      "source-layer": "wegdeel_vlak1",
      "maxzoom": 21,
      "minzoom": 17,
      "filter": ["in", "bgt_functie", "inrit","OV-baan","rijbaan autoweg", "rijbaan lokale weg", "rijbaan regionale weg", "transitie", "fietspad", "baan voor vliegverkeer"],
      "paint": {
        "line-width" : 3,
        "line-color" : "#C9C7C2"
      }
    },
    {
      "id" : "wegdeel1_rijbanen_fill",
      "type": "fill",
      "source": "wm_vector",
      "source-layer": "wegdeel_vlak1",
      "maxzoom": 21,
      "minzoom": 0,
      "filter": ["in", "bgt_functie", "inrit","OV-baan","rijbaan autoweg", "rijbaan lokale weg", "rijbaan regionale weg", "transitie", "fietspad", "baan voor vliegverkeer"],
      "paint": {
        "fill-color" : "#FFFFFF"
      }
    },
    { 
      "id" : "wegdeel1_voetgangers_case",
      "type": "line",
      "source": "wm_vector",
      "source-layer": "wegdeel_vlak1",
      "maxzoom": 21,
      "minzoom": 17,
      "filter": ["in", "bgt_functie", "parkeervlak","ruiterpad","voetgangersgebied", "voetpad", "woonerf", "verkeerseiland"],
      "paint": {
        "line-width" : 3,
        "line-color" : "#C9C7C2"
      }
    },
    { 
      "id" : "wegdeel1_voetgangers_fill",
      "type": "fill",
      "source": "wm_vector",
      "source-layer": "wegdeel_vlak1",
      "maxzoom": 21,
      "minzoom": 0,
      "filter": ["in", "bgt_functie", "parkeervlak","ruiterpad","voetgangersgebied", "voetpad op trap", "voetpad", "woonerf", "verkeerseiland"],
      "paint": {
        "fill-color" : "#F2ECEE"
      }
    },
    { 
      "id" : "wegdeel1_berm_case",
      "type": "line",
      "source": "wm_vector",
      "source-layer": "wegdeel_vlak1",
      "maxzoom": 21,
      "minzoom": 17,
      "filter": ["in", "bgt_functie", "berm"],
      "paint": {
        "line-width" : 3,
        "line-color" : "#C9C7C2"
      }
    },
    { 
      "id" : "wegdeel_berm1_fill",
      "type": "fill",
      "source": "wm_vector",
      "source-layer": "wegdeel_vlak1",
      "maxzoom": 21,
      "minzoom": 0,
      "filter": [
        "all",
        ["in", "bgt_functie", "berm"],
        ["in", "bgt_fysiekvoorkomen" , "gesloten verharding","half verhard","open verharding","transitie"]
      ],
      "paint": {
        "fill-color" : "#F2ECEE"
      }
    },
    { 
      "id" : "wegdeel_berm1_fill2",
      "type": "fill",
      "source": "wm_vector",
      "source-layer": "wegdeel_vlak1",
      "maxzoom": 21,
      "minzoom": 0,
      "filter": [
        "all",
        ["in", "bgt_functie", "berm"],
        ["in", "bgt_fysiekvoorkomen" , "groenvoorziening","onverhard"]
      ],
      "paint": {
        "fill-color" : "#DCEACF"
      }
    },
    { 
      "id": "inrichtingselement_vlak1 ",
      "type":"fill",
      "source": "wm_vector",
      "source-layer": "inrichtingselement_vlak1",
      "maxzoom": 21,
      "minzoom": 0,
      "paint":{
        "fill-outline-color": "#C9C7C2",
        "fill-color": {
          "property": "bgt_type",
          "type": "categorical",
          "stops": [
            ["steiger",   "#F2F1EE"],
            ["sluis",     "#C9C7C2"],
            ["gemaal",    "#C9C7C2"],
            ["stuw",      "#C9C7C2"],
            ["muur",      "#E0DED8"]
          ],
          "default" : "#E0DED8"
        }
      }
    },
    {
      "id": "gebouwen_achter1",
      "type":"line",
      "source": "wm_vector",
      "source-layer": "gebouwen1",
      "maxzoom": 17,
      "minzoom": 16,
      "paint":{
        "line-color": "#C9C7C2",
        "line-width": 3
      }
    },
    { 
      "id": "gebouwen1 ",
      "type":"fill",
      "source": "wm_vector",
      "source-layer": "gebouwen1",
      "maxzoom": 21,
      "minzoom": 0,
      "paint":{
        "fill-outline-color": {
          "type": "interval",
          "stops": [
            [0, "#EBEAE6"],
            [16, "#EBEAE6"],
            [17,"#C9C7C2"]
          ],
          "default": "#C9C7C2"
        },
        "fill-color": {
          "property": "bgt_type",
          "type": "categorical",
          "stops": [
            [ "bassin",     "#E0DED8"],
            [ "bezinkbak",    "#E0DED8"],
            [ "lage trafo",   "#E0DED8"],
            [ "niet-wm_vector", "#E0DED8"],
            [ "open loods",   "#E0DED8"],
            [ "opslagtank",   "#E0DED8"],
            [ "overkapping",  "#E0DED8"],
            [ "transitie",    "#E0DED8"],
            [ "windturbine",  "#E0DED8"]
          ],
        "default": "#EBEAE6"
        }
      }
    },
    { 
      "id": "terein2",
      "type":"fill",
      "source": "wm_vector",
      "source-layer": "terrein2",
      "maxzoom": 21,
      "minzoom": 0,
      "paint":{
        "fill-outline-color" : "#C9C7C2",
        "fill-color": {
          "property": "bgt_fysiekvoorkomen",
          "type": "categorical",
          "stops": [
            ["erf",       "#F9F9E7"],
            ["zand",        "#F9F9E7"],
            ["onverhard",     "#F9F9E7"],
            ["houtwal",     "#F9F9E7"],
            ["duin",        "#F9F9E7"],
            ["rietland",      "#F9F9E7"],
            ["open verharding", "#F4F6F6"],
            ["transitie",     "#F4F6F6"],
            ["gesloten verharding", "#FFFFFF"],
            ["half verhard",  "#FFFFFF"],
            ["perron",      "#FFFFFF"],
            ["groenvoorziening","#DCEACF"],
            ["struiken",    "#DCEACF"],
            ["grasland agrarisch", "#DCEACF"],
            ["grasland overig", "#DCEACF"],
            ["naaldbos",    "#cbe0b8"],
            ["fruitteelt",    "#cbe0b8"],
            ["loofbos",     "#cbe0b8"],
            ["bouwland",    "#cbe0b8"],
            ["gemengd bos",   "#cbe0b8"],
            ["moeras",      "#cbe0b8"],
            ["boomteelt",     "#cbe0b8"],
            ["oever",       "#F9F9E7"],
            ["slootkant",     "#F9F9E7"]
          ],
          "default" : "#ffffff"
        }
      }
    },
        { 
      "id" : "wegdeel2_rijbanen_case",
      "type": "line",
      "source": "wm_vector",
      "source-layer": "wegdeel_vlak2",
      "maxzoom": 21,
      "minzoom": 17,
      "filter": ["in", "bgt_functie", "inrit","OV-baan","rijbaan autoweg", "rijbaan lokale weg", "rijbaan regionale weg", "transitie", "fietspad", "baan voor vliegverkeer"],
      "paint": {
        "line-width" : 3,
        "line-color" : "#C9C7C2"
      }
    },
    {
      "id" : "wegdeel2_rijbanen_fill",
      "type": "fill",
      "source": "wm_vector",
      "source-layer": "wegdeel_vlak2",
      "maxzoom": 21,
      "minzoom": 0,
      "filter": ["in", "bgt_functie", "inrit","OV-baan","rijbaan autoweg", "rijbaan lokale weg", "rijbaan regionale weg", "transitie", "fietspad", "baan voor vliegverkeer"],
      "paint": {
        "fill-color" : "#FFFFFF"
      }
    },
    { 
      "id" : "wegdeel2_voetgangers_case",
      "type": "line",
      "source": "wm_vector",
      "source-layer": "wegdeel_vlak2",
      "maxzoom": 21,
      "minzoom": 17,
      "filter": ["in", "bgt_functie", "parkeervlak","ruiterpad","voetgangersgebied", "voetpad", "woonerf", "verkeerseiland"],
      "paint": {
        "line-width" : 3,
        "line-color" : "#C9C7C2"
      }
    },
    { 
      "id" : "wegdeel2_voetgangers_fill",
      "type": "fill",
      "source": "wm_vector",
      "source-layer": "wegdeel_vlak2",
      "maxzoom": 21,
      "minzoom": 0,
      "filter": ["in", "bgt_functie", "parkeervlak","ruiterpad","voetgangersgebied", "voetpad", "woonerf", "verkeerseiland"],
      "paint": {
        "fill-color" : "#F2ECEE"
      }
    },
    { 
      "id" : "wegdeel2_berm_case",
      "type": "line",
      "source": "wm_vector",
      "source-layer": "wegdeel_vlak2",
      "maxzoom": 21,
      "minzoom": 17,
      "filter": ["in", "bgt_functie", "berm"],
      "paint": {
        "line-width" : 3,
        "line-color" : "#C9C7C2"
      }
    },
{ 
      "id" : "wegdeel_berm2_fill",
      "type": "fill",
      "source": "wm_vector",
      "source-layer": "wegdeel_vlak2",
      "maxzoom": 21,
      "minzoom": 0,
      "filter": [
        "all",
        ["in", "bgt_functie", "berm"],
        ["in", "bgt_fysiekvoorkomen" , "gesloten verharding","half verhard","open verharding","transitie"]
      ],
      "paint": {
        "fill-color" : "#F2ECEE"
      }
    },
    { 
      "id" : "wegdeel_berm2_fill2",
      "type": "fill",
      "source": "wm_vector",
      "source-layer": "wegdeel_vlak2",
      "maxzoom": 21,
      "minzoom": 0,
      "filter": [
        "all",
        ["in", "bgt_functie", "berm"],
        ["in", "bgt_fysiekvoorkomen" , "groenvoorziening","onverhard"]
      ],
      "paint": {
        "fill-color" : "#DCEACF"
      }
    },
    {
      "id": "gebouwen_achter2",
      "type":"line",
      "source": "wm_vector",
      "source-layer": "gebouwen2",
      "maxzoom": 17,
      "minzoom": 16,
      "paint":{
        "line-color": "#C9C7C2",
        "line-width": 3
      }
    },
    { 
      "id": "gebouwen2 ",
      "type":"fill",
      "source": "wm_vector",
      "source-layer": "gebouwen2 ",
      "maxzoom": 21,
      "minzoom": 0,
      "paint":{
        "fill-outline-color": {
          "type": "interval",
          "stops": [
            [0, "#EBEAE6"],
            [16, "#EBEAE6"],
            [17,"#C9C7C2"]
          ],
          "default": "#C9C7C2"
        },
        "fill-color": {
          "property": "bgt_type",
          "type": "categorical",
          "stops": [
            [ "bassin",     "#E0DED8"],
            [ "bezinkbak",    "#E0DED8"],
            [ "lage trafo",   "#E0DED8"],
            [ "niet-wm_vector", "#E0DED8"],
            [ "open loods",   "#E0DED8"],
            [ "opslagtank",   "#E0DED8"],
            [ "overkapping",  "#E0DED8"],
            [ "transitie",    "#E0DED8"],
            [ "windturbine",  "#E0DED8"]
          ],
        "default": "#EBEAE6"
        }
      }
    },
    { 
      "id": "inrichtingselement_vlak2 ",
      "type":"fill",
      "source": "wm_vector",
      "source-layer": "inrichtingselement_vlak2",
      "maxzoom": 21,
      "minzoom": 0,
      "paint":{
        "fill-outline-color": "#C9C7C2",
        "fill-color": {
          "property": "bgt_type",
          "type": "categorical",
          "stops": [
            ["steiger",   "#F2F1EE"],
            ["sluis",     "#C9C7C2"],
            ["gemaal",    "#C9C7C2"],
            ["stuw",      "#C9C7C2"],
            ["muur",      "#E0DED8"]
          ]
        }
      }
    },
    { 
      "id": "terein3",
      "type":"fill",
      "source": "wm_vector",
      "source-layer": "terrein3",
      "maxzoom": 21,
      "minzoom": 0,
      "paint":{
        "fill-outline-color" : "#C9C7C2",
        "fill-color": {
          "property": "bgt_fysiekvoorkomen",
          "type": "categorical",
          "stops": [
            ["erf",     "#F9F9E7"],
            ["zand",      "#F9F9E7"],
            ["onverhard",   "#F9F9E7"],
            ["houtwal",   "#F9F9E7"],
            ["duin",      "#F9F9E7"],
            ["rietland",    "#F9F9E7"],
            ["open verharding",  "#F4F6F6"],
            ["transitie",   "#F4F6F6"],
            ["gesloten verharding", "#FFFFFF"],
            ["half verhard", "#FFFFFF"],
            ["perron", "#FFFFFF"],
            ["groenvoorziening", "#DCEACF"],
            ["struiken", "#DCEACF"],
            ["grasland agrarisch", "#DCEACF"],
            ["grasland overig", "#DCEACF"],
            ["naaldbos", "#cbe0b8"],
            ["fruitteelt", "#cbe0b8"],
            ["loofbos", "#cbe0b8"],
            ["bouwland", "#cbe0b8"],
            ["gemengd bos", "#cbe0b8"],
            ["moeras", "#cbe0b8"],
            ["boomteelt", "#cbe0b8"],
            ["oever", "#F9F9E7"],
            ["slootkant", "#F9F9E7"]
          ]
        }
      }
    },
        { 
      "id" : "wegdeel3_rijbanen_case",
      "type": "line",
      "source": "wm_vector",
      "source-layer": "wegdeel_vlak3",
      "maxzoom": 21,
      "minzoom": 17,
      "filter": ["in", "bgt_functie", "inrit","OV-baan","rijbaan autoweg", "rijbaan lokale weg", "rijbaan regionale weg", "transitie", "fietspad", "baan voor vliegverkeer"],
      "paint": {
        "line-width" : 3,
        "line-color" : "#C9C7C2"
      }
    },
    {
      "id" : "wegdeel3_rijbanen_fill",
      "type": "fill",
      "source": "wm_vector",
      "source-layer": "wegdeel_vlak3",
      "maxzoom": 21,
      "minzoom": 0,
      "filter": ["in", "bgt_functie", "inrit","OV-baan","rijbaan autoweg", "rijbaan lokale weg", "rijbaan regionale weg", "transitie", "fietspad", "baan voor vliegverkeer"],
      "paint": {
        "fill-color" : "#FFFFFF"
      }
    },
    { 
      "id" : "wegdeel3_voetgangers_case",
      "type": "line",
      "source": "wm_vector",
      "source-layer": "wegdeel_vlak3",
      "maxzoom": 21,
      "minzoom": 17,
      "filter": ["in", "bgt_functie", "parkeervlak","ruiterpad","voetgangersgebied", "voetpad", "woonerf", "verkeerseiland"],
      "paint": {
        "line-width" : 3,
        "line-color" : "#C9C7C2"
      }
    },
    { 
      "id" : "wegdeel3_voetgangers_fill",
      "type": "fill",
      "source": "wm_vector",
      "source-layer": "wegdeel_vlak3",
      "maxzoom": 21,
      "minzoom": 0,
      "filter": ["in", "bgt_functie", "parkeervlak","ruiterpad","voetgangersgebied", "voetpad", "woonerf", "verkeerseiland"],
      "paint": {
        "fill-color" : "#F2ECEE"
      }
    },
    { 
      "id" : "wegdeel3_berm_case",
      "type": "line",
      "source": "wm_vector",
      "source-layer": "wegdeel_vlak3",
      "maxzoom": 21,
      "minzoom": 17,
      "filter": ["in", "bgt_functie", "berm"],
      "paint": {
        "line-width" : 3,
        "line-color" : "#C9C7C2"
      }
    },
    { 
      "id" : "wegdeel_berm3_fill",
      "type": "fill",
      "source": "wm_vector",
      "source-layer": "wegdeel_vlak3",
      "maxzoom": 21,
      "minzoom": 0,
      "filter": [
        "all",
        ["in", "bgt_functie", "berm"],
        ["in", "bgt_fysiekvoorkomen" , "gesloten verharding","half verhard","open verharding","transitie"]
      ],
      "paint": {
        "fill-color" : "#F2ECEE"
      }
    },
    { 
      "id" : "wegdeel_berm3_fill2",
      "type": "fill",
      "source": "wm_vector",
      "source-layer": "wegdeel_vlak3",
      "maxzoom": 21,
      "minzoom": 0,
      "filter": [
        "all",
        ["in", "bgt_functie", "berm"],
        ["in", "bgt_fysiekvoorkomen" , "groenvoorziening","onverhard"]
      ],
      "paint": {
        "fill-color" : "#DCEACF"
      }
    },
    {
      "id": "gebouwen_achter3",
      "type":"line",
      "source": "wm_vector",
      "source-layer": "gebouwen3",
      "maxzoom": 17,
      "minzoom": 16,
      "paint":{
        "line-color": "#C9C7C2",
        "line-width": 3
      }
    },
    { 
      "id": "gebouwen3 ",
      "type":"fill",
      "source": "wm_vector",
      "source-layer": "gebouwen3 ",
      "maxzoom": 21,
      "minzoom": 0,
      "paint":{
        "fill-outline-color": {
          "type": "interval",
          "stops": [
            [0, "#EBEAE6"],
            [16, "#EBEAE6"],
            [17,"#C9C7C2"]
          ],
          "default": "#C9C7C2"
        },
        "fill-color": {
          "property": "bgt_type",
          "type": "categorical",
          "stops": [
            [ "bassin",     "#E0DED8"],
            [ "bezinkbak",    "#E0DED8"],
            [ "lage trafo",   "#E0DED8"],
            [ "niet-wm_vector", "#E0DED8"],
            [ "open loods",   "#E0DED8"],
            [ "opslagtank",   "#E0DED8"],
            [ "overkapping",  "#E0DED8"],
            [ "transitie",    "#E0DED8"],
            [ "windturbine",  "#E0DED8"]
          ],
        "default": "#EBEAE6"
        }
      }
    },
    { 
      "id": "terein4",
      "type":"fill",
      "source": "wm_vector",
      "source-layer": "terrein4",
      "maxzoom": 21,
      "minzoom": 0,
        "paint":{
        "fill-outline-color" : "#C9C7C2",
        "fill-color": {
          "property": "bgt_fysiekvoorkomen",
          "type": "categorical",
          "stops": [
            ["erf",     "#F9F9E7"],
            ["zand",      "#F9F9E7"],
            ["onverhard",   "#F9F9E7"],
            ["houtwal",   "#F9F9E7"],
            ["duin",      "#F9F9E7"],
            ["rietland",    "#F9F9E7"],
            ["open verharding",  "#F4F6F6"],
            ["transitie",   "#F4F6F6"],
            ["gesloten verharding", "#FFFFFF"],
            ["half verhard", "#FFFFFF"],
            ["perron", "#FFFFFF"],
            ["groenvoorziening", "#DCEACF"],
            ["struiken", "#DCEACF"],
            ["grasland agrarisch", "#DCEACF"],
            ["grasland overig", "#DCEACF"],
            ["naaldbos", "#cbe0b8"],
            ["fruitteelt", "#cbe0b8"],
            ["loofbos", "#cbe0b8"],
            ["bouwland", "#cbe0b8"],
            ["gemengd bos", "#cbe0b8"],
            ["moeras", "#cbe0b8"],
            ["boomteelt", "#cbe0b8"],
            ["oever", "#F9F9E7"],
            ["slootkant", "#F9F9E7"]
          ]
        }
      }
    },
    {
      "id": "gebouwen_achter4",
      "type":"line",
      "source": "wm_vector",
      "source-layer": "gebouwen4",
      "maxzoom": 17,
      "minzoom": 16,
      "paint":{
        "line-color": "#C9C7C2",
        "line-width": 3
      }
    },
    { 
      "id": "gebouwen4 ",
      "type":"fill",
      "source": "wm_vector",
      "source-layer": "gebouwen4",
      "maxzoom": 21,
      "minzoom": 0,
      "paint":{
        "fill-outline-color": {
          "type": "interval",
          "stops": [
            [0, "#EBEAE6"],
            [16, "#EBEAE6"],
            [17,"#C9C7C2"]
          ],
          "default": "#C9C7C2"
        },
        "fill-color": {
          "property": "bgt_type",
          "type": "categorical",
          "stops": [
            [ "bassin",     "#E0DED8"],
            [ "bezinkbak",    "#E0DED8"],
            [ "lage trafo",   "#E0DED8"],
            [ "niet-wm_vector", "#E0DED8"],
            [ "open loods",   "#E0DED8"],
            [ "opslagtank",   "#E0DED8"],
            [ "overkapping",  "#E0DED8"],
            [ "transitie",    "#E0DED8"],
            [ "windturbine",  "#E0DED8"]
          ],
        "default": "#EBEAE6"
        }
      }
    },
    { 
      "id": "tunnelcontour",
      "type": "line",
      "source": "wm_vector",
      "source-layer": "tunnelcontour",
      "maxzoom": 21,
      "minzoom": 0,
      "paint":{
        "line-color": "#ffffff",
        "line-opacity": 0.3,
        "line-width": 6
      }
    },

    { 
      "id": "weg_smalle_weg-case",
      "type": "line",
      "source": "wm_vector",
      "source-layer": "weg_smalle_weg",
      "maxzoom": 21,
      "minzoom": 0,
      "paint":{
        "line-color": "#c9c7c2",
        "line-width": 3
      }
    },
    { 
      "id": "weg_smalle_weg-fill",
      "type": "line",
      "source": "wm_vector",
      "source-layer": "weg_smalle_weg",
      "maxzoom": 21,
      "minzoom": 0,
      "paint":{
        "line-color": "#ffffff",
        "line-width": 2
      }
    },


    { 
      "id": "SBL_metro_in_tunnel",
      "type": "line",
      "source": "wm_vector",
      "source-layer": "SBL_metro_in_tunnel",
      "maxzoom": 21,
      "minzoom": 0,
      "line-cap": "butt",
      "line-join": "miter",
      "paint": {
        "line-color" : "#fc7f7f",
        "line-width" : {
          "type" : "exponential",
          "stops": [
            [0, 0.5],
            [8, 1],
            [10, 1.5],
            [14, 2],
            [15, 2],
            [16, 3],
            [17, 2]
          ]
        },
        "line-dasharray": {
          "stops": [
            [0, [1,1]],
            [8, [1,1]],
            [10, [2,2]],
            [14, [2,2]],
            [15, [3,3]],
            [16, [3,3]]
          ]
        }
      }
    },
    { 
      "id": "SBL_trein_in_tunnel_case",
      "type": "line",
      "source": "wm_vector",
      "source-layer": "SBL_trein_in_tunnel",
      "maxzoom": 21,
      "minzoom": 0,
      "paint":{
        "line-color": "#9d9d9d",
        "line-width": {
          "stops": [
            [0, 4],
            [10, 3],
            [14, 4],
            [15, 5]
            
          ]
        },
        "line-dasharray": {
          "stops": [
            [0, [4,4]],
            [14, [2,2]],
            [15, [4,4]]
          ]
        }
      }
    },
    { 
      "id": "SBL_trein_in_tunnel_fill",
      "type": "line",
      "source": "wm_vector",
      "source-layer": "SBL_trein_in_tunnel",
      "maxzoom": 21,
      "minzoom": 0,
      "paint":{
        "line-color": "#fff",
        "line-width": {
          "stops": [
            [0, 4],
            [10, 3],
            [14, 4],
            [15, 5]
            
          ]
        },
        "line-dasharray": {
          "stops": [
            [0, [4,4]],
            [14, [2,2]],
            [15, [4,4]]
          ]
        }
      }
    },
    { 
      "id": "SBL_tram_in_tunnel",
      "type": "line",
      "source": "wm_vector",
      "source-layer": "SBL_tram_in_tunnel",
      "maxzoom": 21,
      "minzoom": 0,
      "paint":{
        "line-opacity": 0.8,
        "line-color": "#fc7f7f",
        "line-dasharray": [4,4],
        "line-width" : {
          "type" : "exponential",
          "stops": [
            [0, 0],
            [8, 0.1],
            [10, 0.5],
            [13, 0.75],
            [14, 1],
            [15, 1],
            [16, 1],
            [17, 2]
          ]
        }
      }
    },
    {
      "id": "SBL_metro_line",
      "type": "line",
      "source": "wm_vector",
      "source-layer": "SBL_metro",
      "maxzoom": 21,
      "minzoom": 0,
      "line-cap": "butt",
      "line-join": "miter",
      "paint": {
        "line-color" : "#fc7f7f",
        "line-width" : {
          "type" : "exponential",
          "stops": [
            [0, 1],
            [8, 1],
            [10, 2],
            [14, 2.5],
            [15, 2.5],
            [16, 3],
            [17, 4]
          ]
        }
      }
    },
    {
      "id": "SBL_metro_dash",
      "type": "line",
      "source": "wm_vector",
      "source-layer": "SBL_metro",
      "maxzoom": 21,
      "minzoom": 0,
      "line-cap": "butt",
      "line-join": "miter",
      "paint": {
        "line-color" : "#ffffff",
        "line-width" : {
          "type" : "exponential",
          "stops": [
            [0, 0.5],
            [8, 0.5],
            [10, 1],
            [14, 1.5],
            [15, 1.5],
            [16, 1.5],
            [17, 2]
          ]
        },
        "line-dasharray": {
          "stops": [
            [0, [1,1]],
            [8, [2,2]],
            [10, [4,4]],
            [14, [4,4]],
            [15, [5,5]],
            [16, [4,4]]
          ]
        }
      }
    },
    { 
      "id": "SBL_tram",
      "type": "line",
      "source": "wm_vector",
      "source-layer": "SBL_tram",
      "maxzoom": 21,
      "minzoom": 0,
      "paint":{
        "line-color": "#fc7f7f",
        "line-width" : {
          "type" : "exponential",
          "stops": [
            [0, 0],
            [8, 0.1],
            [10, 0.5],
            [13, 0.75],
            [14, 1],
            [15, 1],
            [16, 1],
            [17, 2]
          ]
        }
      }
    },
    {
      "id": "SBL_trein_line",
      "type": "line",
      "source": "wm_vector",
      "source-layer": "SBL_trein",
      "maxzoom": 21,
      "minzoom": 0,
      "line-cap": "butt",
      "line-join": "miter",
      "paint": {
        "line-color" : "#9d9d9d",
        "line-width" : {
          "type" : "exponential",
          "stops": [
            [0, 1],
            [8, 2],
            [10, 3],
            [14, 3],
            [15, 4],
            [16, 6]
          ]
        }
      }
    },
    {
      "id": "SBL_trein_dash",
      "type": "line",
      "source": "wm_vector",
      "source-layer": "SBL_trein",
      "maxzoom": 16,
      "minzoom": 0,
      "line-cap": "butt",
      "line-join": "miter",
      "paint": {
        "line-color" : "#ffffff",
        "line-width" : {
          "type" : "exponential",
          "stops": [
            [0, 0.5],
            [8, 1],
            [10, 1.5],
            [14, 1.5],
            [15, 2],
            [16, 3]
          ]
        },
        "line-dasharray": {
          "stops": [
            [0, [1,1]],
            [8, [2,2]],
            [10, [2,2]],
            [11, [3,3]],
            [12, [4,4]],
            [13, [4,4]],
            [14, [4,4]],
            [15, [4,4]],
            [16, [4,4]]
          ]
        }
      }
    },
    { "id": "metro_line_2",
      "type":  "line",
      "source": "wm_vector",
      "source-layer": "spoor_lijn_2",
      "maxzoom": 21,
      "minzoom": 0,
      "line-cap":"butt",
      "line-join": "miter",
      "filter": ["==", "bgt_functie", "sneltram"],
      "paint": {
        "line-color" : "#fc7f7f",
        "line-width" : {
          "type" : "exponential",
          "stops": [
            [16, 2.5],
            [17, 3],
            [20,4]
          ]
        },
        "line-dasharray": {
          "stops": [
            [16, [3,3]],
            [17, [3,3]],
            [20, [3,3]]
          ]
        }
      }
    },
    { "id": "trein_line_2",
      "type":  "line",
      "source": "wm_vector",
      "source-layer": "spoor_lijn_2",
      "maxzoom": 21,
      "minzoom": 0,
      "line-cap":"butt",
      "line-join": "miter",
      "filter": ["==", "bgt_functie", "trein"],
      "paint": {
        "line-color" : "#9d9d9d",
        "line-width" : {
          "type" : "exponential",
          "stops": [
            [16, 6],
            [17, 6],
            [18, 6],
            [19, 6],
            [20, 8]
          ]
        }
      }
    },
    { "id": "trein_dash_2",
      "type":  "line",
      "source": "wm_vector",
      "source-layer": "spoor_lijn_2",
      "maxzoom": 21,
      "minzoom": 0,
      "line-cap":"butt",
      "line-join": "miter",
      "filter": ["==", "bgt_functie", "trein"],
      "paint": {
        "line-color" : "#ffffff",
        "line-width" : {
          "type" : "exponential",
          "stops": [
            [15, 2],
            [16, 2],
            [17, 3],
            [18, 3],
            [19, 3],
            [20, 4]
          ]
        },
        "line-dasharray": {
          "stops": [
            [15, [4,4]],
            [16, [4,4]],
            [17, [3.5,3.5]],
            [18, [4,4]],
            [20, [5,5]]
          ]
        }
      }
    },
    { "id": "metro_line_1",
      "type":  "line",
      "source": "wm_vector",
      "source-layer": "spoor_lijn_1",
      "maxzoom": 21,
      "minzoom": 0,
      "line-cap":"butt",
      "line-join": "miter",
      "filter": ["==", "bgt_functie", "sneltram"],
      "paint": {
        "line-color" : "#fc7f7f",
        "line-width" : {
          "type" : "exponential",
          "stops": [
            [0, 1],
            [8, 1],
            [10, 2],
            [14, 2.5],
            [15, 2.5],
            [16, 3],
            [17, 4]
          ]
        }
      }
    },
    { "id": "metro_dash_1",
      "type":  "line",
      "source": "wm_vector",
      "source-layer": "spoor_lijn_1",
      "maxzoom": 21,
      "minzoom": 0,
      "line-cap":"butt",
      "line-join": "miter",
      "filter": ["==", "bgt_functie", "sneltram"],
      "paint": {
        "line-color" : "#ffffff",
        "line-width" : {
          "type" : "exponential",
          "stops": [
            [0, 0.5],
            [8, 0.5],
            [10, 1],
            [14, 1.5],
            [15, 1.5],
            [16, 1.5],
            [17, 2]
          ]
        },
        "line-dasharray": {
          "stops": [
            [0, [1,1]],
            [8, [2,2]],
            [10, [4,4]],
            [14, [4,4]],
            [15, [8,8]],
            [16, [5,5]]
          ]
        }
      }
    },
    { "id": "tram_line_1",
      "type":  "line",
      "source": "wm_vector",
      "source-layer": "spoor_lijn_1",
      "maxzoom": 21,
      "minzoom": 0,
      "line-cap":"butt",
      "line-join": "miter",
      "filter": ["==", "bgt_functie", "tram"],
      "paint":{
        "line-opacity": 0.8,
        "line-color": "#fc7f7f",
        "line-dasharray": [4,4],
        "line-width" : {
          "type" : "exponential",
          "stops": [
            [0, 0],
            [8, 0.1],
            [10, 0.5],
            [13, 0.75],
            [14, 1],
            [15, 1],
            [16, 1],
            [17, 2]
          ]
        }
      }
    },
    {
      "id": "trein_line_1",
      "type":  "line",
      "source": "wm_vector",
      "source-layer": "spoor_lijn_1",
      "maxzoom": 21,
      "minzoom": 0,
      "line-cap":"butt",
      "line-join": "miter",
      "filter": ["==", "bgt_functie", "trein"],
      "paint": {
        "line-color" : "#9d9d9d",
        "line-width" : {
          "type" : "exponential",
          "stops": [
            [16, 6],
            [17, 6],
            [18, 6],
            [19, 6],
            [20, 8]
          ]
        }
      }
    },
    { "id": "trein_dash_1",
      "type":  "line",
      "source": "wm_vector",
      "source-layer": "spoor_lijn_1",
      "maxzoom": 21,
      "minzoom": 0,
      "filter": ["==", "bgt_functie", "trein"],
      "line-cap":"butt",
      "line-join": "miter",
      "paint": {
        "line-color" : "#ffffff",
        "line-width" : {
          "type" : "exponential",
          "stops": [
            [15, 2],
            [16, 2],
            [17, 3],
            [18, 3],
            [19, 3],
            [20, 4]
          ]
        },
        "line-dasharray": {
          "stops": [
            [15, [4,4]],
            [16, [4,4]],
            [17, [3.5,3.5]],
            [18, [4,4]],
            [20, [5,5]]
          ]
        }
      }
    },
    { "id": "metro_line0",
      "type":  "line",
      "source": "wm_vector",
      "source-layer": "spoor_lijn0",
      "maxzoom": 21,
      "minzoom": 0,
      "line-cap":"butt",
      "line-join": "miter",
      "filter": ["==", "bgt_functie", "sneltram"],
      "paint": {
        "line-color" : "#fc7f7f",
        "line-width" : {
          "type" : "exponential",
          "stops": [
            [0, 1],
            [8, 1],
            [10, 2],
            [14, 2.5],
            [15, 2.5],
            [16, 3],
            [17, 4]
          ]
        }
      }
    },
    { "id": "metro_dash0",
      "type":  "line",
      "source": "wm_vector",
      "source-layer": "spoor_lijn0",
      "maxzoom": 21,
      "minzoom": 0,
      "line-cap":"butt",
      "line-join": "miter",
      "filter": ["==", "bgt_functie", "sneltram"],
      "paint": {
        "line-color" : "#ffffff",
        "line-width" : {
          "type" : "exponential",
          "stops": [
            [0, 0.5],
            [8, 0.5],
            [10, 1],
            [14, 1.5],
            [15, 1.5],
            [16, 1.5],
            [17, 2]
          ]
        },
        "line-dasharray": {
          "stops": [
            [0, [1,1]],
            [8, [2,2]],
            [10, [4,4]],
            [14, [4,4]],
            [15, [8,8]],
            [16, [5,5]]
          ]
        }
      }
    },
    { "id": "tram_line0",
      "type":  "line",
      "source": "wm_vector",
      "source-layer": "spoor_lijn0",
      "maxzoom": 21,
      "minzoom": 0,
      "line-cap":"butt",
      "line-join": "miter",
      "filter": ["==", "bgt_functie", "tram"],
      "paint":{
        "line-color": "#fc7f7f",
        "line-width" : {
          "type" : "exponential",
          "stops": [
            [0, 0],
            [8, 0.1],
            [10, 0.1],
            [13, 0.5],
            [14, 0.75],
            [15, 1],
            [16, 1],
            [17, 2]
          ]
        }
      }
    },
    { "id": "trein_line0",
      "type":  "line",
      "source": "wm_vector",
      "source-layer": "spoor_lijn0",
      "maxzoom": 21,
      "minzoom": 0,
      "line-cap":"butt",
      "line-join": "miter",
      "filter": ["==", "bgt_functie", "trein"],
      "paint": {
        "line-color" : "#9d9d9d",
        "line-width" : {
          "type" : "exponential",
          "stops": [
            [16, 4],
            [17, 5],
            [18, 6],
            [19, 6],
            [20, 8]
          ]
        }
      }
    },
    { "id": "trein_dash0",
      "type":  "line",
      "source": "wm_vector",
      "source-layer": "spoor_lijn0",
      "maxzoom": 21,
      "minzoom": 15,
      "line-cap":"butt",
      "line-join": "miter",
      "filter": ["==", "bgt_functie", "trein"],
      "paint": {
        "line-color" : "#ffffff",
        "line-width" : {
          "type" : "exponential",
          "stops": [
            [15, 2],
            [16, 2],
            [17, 3],
            [18, 3],
            [19, 3],
            [20, 4]
          ]
        },
        "line-dasharray": {
          "stops": [
            [15, [4,4]],
            [16, [4,4]],
            [17, [3.5,3.5]],
            [18, [4,4]],
            [20, [5,5]]
          ]
        }
      }
    },
    { "id": "metro_line1",
      "type":  "line",
      "source": "wm_vector",
      "source-layer": "spoor_lijn1",
      "maxzoom": 21,
      "minzoom": 0,
      "line-cap":"butt",
      "line-join": "miter",
      "filter": ["==", "bgt_functie", "sneltram"],
      "paint": {
        "line-color" : "#fc7f7f",
        "line-width" : {
          "type" : "exponential",
          "stops": [
            [0, 1],
            [8, 1],
            [10, 2],
            [14, 2.5],
            [15, 2.5],
            [16, 3],
            [17, 4]
          ]
        }
      }
    },
    { "id": "metro_dash1",
      "type":  "line",
      "source": "wm_vector",
      "source-layer": "spoor_lijn1",
      "maxzoom": 21,
      "minzoom": 0,
      "line-cap":"butt",
      "line-join": "miter",
      "filter": ["==", "bgt_functie", "sneltram"],
      "paint": {
        "line-color" : "#ffffff",
        "line-width" : {
          "type" : "exponential",
          "stops": [
            [0, 0.5],
            [8, 0.5],
            [10, 1],
            [14, 1.5],
            [15, 1.5],
            [16, 1.5],
            [17, 2]
          ]
        },
        "line-dasharray": {
          "stops": [
            [0, [1,1]],
            [8, [2,2]],
            [10, [4,4]],
            [14, [4,4]],
            [15, [8,8]],
            [16, [5,5]]
          ]
        }
      }
    },
    { "id": "tram_line1",
      "type":  "line",
      "source": "wm_vector",
      "source-layer": "spoor_lijn1",
      "maxzoom": 21,
      "minzoom": 0,
      "line-cap":"butt",
      "line-join": "miter",
      "filter": ["==", "bgt_functie", "tram"],
      "paint":{
        "line-color": "#fc7f7f",
        "line-width" : {
          "type" : "exponential",
          "stops": [
            [0, 0],
            [8, 0.1],
            [10, 0.1],
            [13, 0.5],
            [14, 0.75],
            [15, 1],
            [16, 1],
            [17, 2]
          ]
        }
      }
    },
    { "id": "trein_line1",
      "type":  "line",
      "source": "wm_vector",
      "source-layer": "spoor_lijn1",
      "maxzoom": 21,
      "minzoom": 0,
      "line-cap":"butt",
      "line-join": "miter",
      "filter": ["==", "bgt_functie", "trein"],
      "paint": {
        "line-color" : "#9d9d9d",
        "line-width" : {
          "type" : "exponential",
          "stops": [
            [16, 4],
            [17, 5],
            [18, 6],
            [19, 6],
            [20, 8]
          ]
        }
      }
    },
    { "id": "trein_dash1",
      "type":  "line",
      "source": "wm_vector",
      "source-layer": "spoor_lijn1",
      "maxzoom": 21,
      "minzoom": 0,
      "line-cap":"butt",
      "line-join": "miter",
      "filter": ["==", "bgt_functie", "trein"],
      "paint": {
        "line-color" : "#ffffff",
        "line-width" : {
          "type" : "exponential",
          "stops": [
            [15, 2],
            [16, 2],
            [17, 3],
            [18, 3],
            [19, 3],
            [20, 4]
          ]
        },
        "line-dasharray": {
          "stops": [
            [15, [4,4]],
            [16, [4,4]],
            [17, [3.5,3.5]],
            [18, [4,4]],
            [20, [5,5]]
          ]
        }
      }
    },
    { "id": "metro_line2",
      "type":  "line",
      "source": "wm_vector",
      "source-layer": "spoor_lijn2",
      "maxzoom": 21,
      "minzoom": 0,
      "line-cap":"butt",
      "line-join": "miter",
      "filter": ["==", "bgt_functie", "sneltram"],
      "paint": {
        "line-color" : "#fc7f7f",
        "line-width" : {
          "type" : "exponential",
          "stops": [
            [0, 1],
            [8, 1],
            [10, 2],
            [14, 2.5],
            [15, 2.5],
            [16, 3],
            [17, 4]
          ]
        }
      }
    },
    { "id": "metro_dash2",
      "type":  "line",
      "source": "wm_vector",
      "source-layer": "spoor_lijn2",
      "maxzoom": 21,
      "minzoom": 0,
      "line-cap":"butt",
      "line-join": "miter",
      "filter": ["==", "bgt_functie", "sneltram"],
      "paint": {
        "line-color" : "#ffffff",
        "line-width" : {
          "type" : "exponential",
          "stops": [
            [0, 0.5],
            [8, 0.5],
            [10, 1],
            [14, 1.5],
            [15, 1.5],
            [16, 1.5],
            [17, 2]
          ]
        },
        "line-dasharray": {
          "stops": [
            [0, [1,1]],
            [8, [2,2]],
            [10, [4,4]],
            [14, [4,4]],
            [15, [8,8]],
            [16, [5,5]]
          ]
        }
      }
    },
    { "id": "tram_line2",
      "type":  "line",
      "source": "wm_vector",
      "source-layer": "spoor_lijn2",
      "maxzoom": 21,
      "minzoom": 0,
      "line-cap":"butt",
      "line-join": "miter",
      "filter": ["==", "bgt_functie", "tram"],
      "paint":{
        "line-color": "#fc7f7f",
        "line-width" : {
          "type" : "exponential",
          "stops": [
            [0, 0],
            [8, 0.1],
            [10, 0.1],
            [13, 0.5],
            [14, 0.75],
            [15, 1],
            [16, 1],
            [17, 2],
            [18,2]
          ]
        }
      }
    },
    
    { "id": "trein_line2",
      "type":  "line",
      "source": "wm_vector",
      "source-layer": "spoor_lijn2",
      "maxzoom": 21,
      "minzoom": 0,
      "line-cap":"butt",
      "line-join": "miter",
      "filter": ["==", "bgt_functie", "trein"],
      "paint": {
        "line-color" : "#9d9d9d",
        "line-width" : {
          "type" : "exponential",
          "stops": [
            [16, 4],
            [17, 5],
            [18, 6],
            [19, 6],
            [20, 8]
          ]
        }
      }
    },
    { "id": "trein_dash2",
      "type":  "line",
      "source": "wm_vector",
      "source-layer": "spoor_lijn2",
      "maxzoom": 21,
      "minzoom": 0,
      "line-cap":"butt",
      "line-join": "miter",
      "filter": ["==", "bgt_functie", "trein"],
      "paint": {
        "line-color" : "#ffffff",
        "line-width" : {
          "type" : "exponential",
          "stops": [
            [15, 2],
            [16, 2],
            [17, 3],
            [18, 3],
            [19, 3],
            [20, 4]
          ]
        },
        "line-dasharray": {
          "stops": [
            [15, [4,4]],
            [16, [4,4]],
            [17, [3.5,3.5]],
            [18, [4,4]],
            [20, [5,5]]
          ]
        }
      }
    },
    {
      "id": "weg_autosnelweg-case",
      "type": "line",
      "source": "wm_vector",
      "source-layer": "weg_autosnelweg",
      "maxzoom": 21,
      "minzoom": 0,
      "line-cap": "butt",
      "line-join": "miter",
      "paint": {
        "line-color" : "#fa0000",
        "line-width" : {
          "type":"exponential",
          "stops": [
            [0, 1],
            [10,2],
            [11,3],
            [12,3],
            [13,4.5],
            [14,6],
            [15,7]
          ]
        }
      }
    },
    {
      "id": "weg_autosnelweg-fill",
      "type": "line",
      "source": "wm_vector",
      "source-layer": "weg_autosnelweg",
      "maxzoom": 21,
      "minzoom": 0,
      "line-cap": "butt",
      "line-join": "miter",
      "paint": {
        "line-color" : "#fefafa",
        "line-width" : {
          "type":"exponential",
          "stops": [
            [0, 0.5],
            [10,1],
            [11,2],
            [12,2],
            [13,3],
            [14,4],
            [15,5]
          ]
        }
      }
    },
  {
      "id": "weg_autosnelweg-hartlijn",
      "type": "line",
      "source": "wm_vector",
      "source-layer": "weg_autosnelweg",
      "maxzoom": 21,
      "minzoom": 0,
      "line-cap": "butt",
      "line-join": "miter",
      "paint": {
        "line-opacity": 0.4,
        "line-color" : "#fa0000",
        "line-width" : {
          "type":"exponential",
          "stops": [
            [0, 0],
            [10,0.1],
            [11,0.2],
            [12,0.3],
            [13,0.3],
            [14,0.4],
            [15,0.4]
          ]
        }
      }
    },
    { 
      "id": "weg_hartlijn_case",
      "type": "line",
      "source": "wm_vector",
      "source-layer": "weg_hartlijn",
      "maxzoom": 21,
      "minzoom": 0,
      "filter": ["==", "TYPEWEG", "autosnelweg"],
      "paint": {
        "line-color": "#fa0000",
        "line-width" : {
          "type":"exponential",
          "stops": [
            [14,6],
            [15,7],
            [16,7],
            [17,8]
          ]
        }
      }
    },
    { 
      "id": "weg_hartlijn_fill",
      "type": "line",
      "source": "wm_vector",
      "source-layer": "weg_hartlijn",
      "maxzoom": 21,
      "minzoom": 0,
      "filter": ["==", "TYPEWEG", "autosnelweg"],
      "paint": {
        "line-color": "#ffffff",
        "line-width" : {
          "type":"exponential",
          "stops": [
            [14,4],
            [15,5],
            [16,5],
            [17,4]
          ]
        }
      }
    }
  ]
}

//Initialize Map

var map = new mapboxgl.Map({
    container: "map",
    hash: true,
    style: style_object,
    zoom: 11,
    pitch: 60,
    bearing: 62.4,
    center: [ 4.8, 52.4]
});

// Add zoom and rotation controls to the map.
map.addControl(new mapboxgl.NavigationControl(), "top-left");
