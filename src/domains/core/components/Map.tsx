import { useState, useEffect } from 'react';

import Map from 'ol/Map';
import OSM from 'ol/source/OSM';
import TileLayer from 'ol/layer/Tile';
import View from 'ol/View';
import VectorLayer from 'ol/layer/Vector';
import VectorSource from 'ol/source/Vector';
import Feature from 'ol/Feature';
import Point from 'ol/geom/Point';
import { fromLonLat, transform } from 'ol/proj';
import Fill from 'ol/style/Fill';
import { Style, Icon } from 'ol/style';
import { marker_map } from 'assets';

interface mapProps {
  markerDrop?: boolean;
}

const MapGeo = ( props:mapProps ) => {

    const [ map, setMap ] = useState<Map>();
    const [ layer, setLayer] = useState<any>();
    const { markerDrop } = props;

    let icon_marker = new Icon({
      anchor: [0.5, 1],
      anchorXUnits: 'fraction',
      anchorYUnits: 'pixels',
      src: marker_map
    });

    useEffect(() => {

      const flayer = new VectorLayer({
        source: new VectorSource({
          features: []
        }),
        style: function(feature){
              let style = new Style({
                image: icon_marker
              })
    
              return style;
            }
      })

      if(markerDrop){
        flayer.setSource(new VectorSource({
          features: [
            new Feature({
              geometry: new Point(transform([-74.070556,4.612778],'EPSG:4326', 'EPSG:3857'))
            })
          ]
        }))
      }

        // create map
    const initialMap = new Map({
        target: "map",
        layers: [
          new TileLayer({
            source: new OSM()
          }),
          flayer
        ],
        view: new View({
          center: fromLonLat([-74.070556, 4.612778]),
          zoom: 15
        }),
        controls: []
      })

      

      setMap(initialMap)
      setLayer(flayer)

    },[])

    return (
        <div id="map" className="map-container" style={{height:'100%',width:'100%'}}></div>
    )
}

export default MapGeo;