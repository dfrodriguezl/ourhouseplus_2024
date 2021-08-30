import { useState, useEffect } from 'react';

import Map from 'ol/Map';
import OSM from 'ol/source/OSM';
import TileLayer from 'ol/layer/Tile';
import View from 'ol/View';
import VectorLayer from 'ol/layer/Vector';
import VectorSource from 'ol/source/Vector';
import Feature from 'ol/Feature';
import Point from 'ol/geom/Point';
import { fromLonLat } from 'ol/proj';
import Fill from 'ol/style/Fill';
import { Style, Icon } from 'ol/style';
import { marker } from 'assets';

interface mapProps {
  markerDrop?: boolean;
}

const MapGeo = ( props:mapProps ) => {

    const [ map, setMap ] = useState<Map>();
    const [ layer, setLayer] = useState<any>();
    const { markerDrop } = props;

    let icon_marker = new Icon({
      anchor: [0.5, 12],
      anchorXUnits: 'fraction',
      anchorYUnits: 'pixels',
      src: marker
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

        // create map
    const initialMap = new Map({
        target: "map",
        layers: [
          new TileLayer({
            source: new OSM()
          }),
          new VectorLayer({
            source: new VectorSource({
              features: [
                new Feature({
                  geometry: new Point(fromLonLat([-74.070556,4.612778]))
                })
              ]
            }),
            style: function(feature){
                  let style = new Style({
                    image: icon_marker
                  })
        
                  return style;
                }
          })
        ],
        view: new View({
          projection: 'EPSG:4326',
          center: [-74.070556, 4.612778],
          zoom: 15
        }),
        controls: []
      })

      

      setMap(initialMap)
      setLayer(flayer)

      console.log(layer)

      // if(markerDrop){
      //   layer.setSource(
      //     new VectorSource({
      //       features: [
      //         new Feature({
      //           geometry: new Point(fromLonLat([-74.070556,4.612778]))
      //         })
      //       ]
      //     })
      //   )  
      // }

    },[])

    // useEffect(() => {

    //   const addMarker = () => {
    //     if(markerDrop){
    //       layer.setSource(
    //         new VectorSource({
    //           features: [
    //             new Feature({
    //               geometry: new Point(fromLonLat([-74.070556,4.612778]))
    //             })
    //           ]
    //         })
    //       )  
    //     }
    //   }

    //   addMarker()

    // },[])

    

    

    return (
        <div id="map" className="map-container" style={{height:'100%',width:'100%'}}></div>
    )
}

export default MapGeo;