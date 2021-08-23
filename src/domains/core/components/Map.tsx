import { useState, useEffect } from 'react';

import Map from 'ol/Map';
import OSM from 'ol/source/OSM';
import TileLayer from 'ol/layer/Tile';
import View from 'ol/View';

const MapGeo = () => {

    const [ map, setMap ] = useState<Map>()

    useEffect(() => {
        // create map
    const initialMap = new Map({
        target: "map",
        layers: [
          new TileLayer({
            source: new OSM()
          }),         
        ],
        view: new View({
          projection: 'EPSG:4326',
          center: [-74.070556, 4.612778],
          zoom: 15
        }),
        controls: []
      })

      setMap(initialMap)

    },[])

    return (
        <div id="map" className="map-container" style={{height:'100%',width:'100%'}}></div>
    )
}

export default MapGeo;