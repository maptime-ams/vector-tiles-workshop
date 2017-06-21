# Vector Tiles Workshop

We will start with a [presentation](https://maptime-ams.github.io/vector-tiles-workshop/)

In the [workshop](https://github.com/maptime-ams/vector-tiles-workshop/wiki) we will give you:

- a full code example of how to make a map with the Mapbox GL js library
- a endpoint where to find your tiles 
- a standard style for you to edit

Optional: 

- How to make your own vector tiles
- How to donwload OSM vector tiles

## What are Vector Tiles

Vector tiles are a way to deliver geographic data in small chunks to a browser or other client app. Vector tiles are similar to raster tiles but instead of raster images the data returned is a vector representation of the features in the tile. 

Vector tiles make huge maps fast while offering full design flexibility. They are the vector data equivalent of image tiles for web mapping, applying the strengths of tiling – developed for caching, scaling and serving map imagery rapidly – to vector data.


Vector tiles have two important advantages over fully rendered image tiles:

* Styling - as vectors, tiles can be styled when requested, allowing for many map styles on global data
* Size - vector tiles are really small, enabling global high resolution maps, fast map loads, and efficient caching

As the name suggests, vector tiles contain vector data instead of the rendered image. They contain geometries and metadata – like road names, place names, house numbers – in a compact, structured format. Vector tiles are rendered only when requested by a client, like a web browser or a mobile app. Rendering happens either in the client (Mapbox GL JS, Mapbox iOS SDK, Mapbox Android SDK) or on the fly on the server (map API). 

**More info**

https://www.mapbox.com/vector-tiles/
https://www.mapbox.com/vector-tiles/specification/

## We will work with the Protocol buffers (Mapbox) standards 

Mapbox have defined an open standard for vector map tiles called "vector-tile-spec" which uses Google protocol buffers for space-efficient data serialisation. Web Mercator is the projection of reference, but vector tiles may be used to represent data with any projection and tile extent scheme. It is also tied to the Mapnik rendering engine, using a "serialized version of the internal data that Mapnik uses".


# The workshop


The full workshop is in the wiki. Take me [< THERE! >](https://github.com/maptime-ams/vector-tiles-workshop/wiki)

A really short outline:

## Getting the code. 

1. Download this repository on you own device.
2. Open the index.html
3. See your map!
4. Style your map!
