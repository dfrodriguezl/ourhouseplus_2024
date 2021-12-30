import { useState, useEffect } from 'react';

import Map from 'ol/Map';
import OSM from 'ol/source/OSM';
import TileLayer from 'ol/layer/Tile';
import View from 'ol/View';
import VectorLayer from 'ol/layer/Vector';
import VectorSource from 'ol/source/Vector';
import Feature from 'ol/Feature';
import Point from 'ol/geom/Point';
import { fromLonLat, transform, transformExtent, get, toLonLat } from 'ol/proj';
import { Style, Icon } from 'ol/style';
import { marker_map } from 'assets';
import { geocode, NominatimResponse, reverseGeocode } from "nominatim-browser";
import { boundingExtent } from 'ol/extent';
import { Translate, defaults as defaultInteractions } from 'ol/interaction';
import { Collection } from 'ol';
import { compose } from 'recompose';
import { connect } from 'react-redux';
import { RootState } from "app/store";
import { getUrbanPolicyData, setCoordinates } from 'domains/shapeDiver/slice';
import { Coordinates } from 'domains/shapeDiver/models';

interface OwnProps {
  markerDrop?: boolean;
  location?: string;
  changeLocation?: any;
}

interface DispatchProps {
  setCoordinates: typeof setCoordinates;
  getUrbanPolicyData: typeof getUrbanPolicyData;
}

interface StateProps {
  coordinates: Coordinates | undefined;
}

type Props = OwnProps & DispatchProps & StateProps;
const MapGeo = (props: Props) => {

  const [map, setMap] = useState<Map>();
  const [layer, setLayer] = useState<any>();

  const { markerDrop, location, changeLocation, setCoordinates, coordinates, getUrbanPolicyData } = props;

  useEffect(() => {

    const icon_marker = new Icon({
      anchor: [0.5, 1],
      src: marker_map
    });

    const getLocationFromCoords = (lat: number, lon: number) => {
      reverseGeocode({
        lat: String(lat),
        lon: String(lon),
        addressdetails: true
      })
        .then((results: NominatimResponse) => {
          changeLocation(results.display_name);
          setCoordinates({
            lat: lat,
            long: lon
          })
          getUrbanPolicyData({
            lat: lat,
            long: lon
          });
        })
        .catch((error: any) => {
          console.error(error);
        });
    }


    const initializeMap = (lon: number, lat: number, boundingBox: string[] | undefined) => {
      const flayer = new VectorLayer({
        source: new VectorSource({
          features: []
        }),
        style: function (feature) {
          let style = new Style({
            image: icon_marker
          })

          return style;
        }
      })


      const pointFeature = new Feature({
        geometry: new Point(transform([lon, lat], 'EPSG:4326', 'EPSG:3857'))
      });


      const translate = new Translate({
        features: new Collection([pointFeature])
      });

      if (markerDrop) {
        flayer.setSource(new VectorSource({
          features: [
            pointFeature
          ]
        }))
      }

      // create map
      const initialMap = new Map({
        target: "map",
        interactions: defaultInteractions().extend([translate]),
        layers: [
          new TileLayer({
            source: new OSM()
          }),
          flayer
        ],
        view: new View({
          center: fromLonLat([lon, lat]),
          zoom: 15
        }),
        controls: []
      })

      if(boundingBox){
        let bb = boundingExtent([
          [parseFloat(boundingBox![3]), parseFloat(boundingBox![1])],
          [parseFloat(boundingBox![2]), parseFloat(boundingBox![0])]
        ])
        
        bb = transformExtent(bb, get('EPSG:4326'), get('EPSG:3857'));
        initialMap.getView().fit(bb);
      }
      

      translate.on('translateend', (e) => {
        const coordinates = toLonLat(e.coordinate);
        getLocationFromCoords(coordinates[1], coordinates[0]);
      })

      setMap(initialMap)
      setLayer(flayer)
    }

    if (coordinates) {
      initializeMap(coordinates.long!, coordinates.lat!, undefined);
      getUrbanPolicyData(coordinates);
    } else {
      geocode({
        city: location
      })
        .then((results: NominatimResponse[]) => {
          var result = results[0];

          const lon = parseFloat(result.lon);
          const lat = parseFloat(result.lat);
          const boundingBox = result.boundingbox;

          initializeMap(lon, lat, boundingBox);

        })
        .catch((error: any) => {
          console.error(error);
        });
    }


  }, [markerDrop, location])




  return (
    <div id="map" className="map-container" style={{ height: '100%', width: '100%' }}></div>
  )
}

const container = compose<Props, OwnProps>(
  connect<StateProps, DispatchProps, {}, RootState>(
    (state: RootState) => ({
      coordinates: state.domains.shapediver.coordinates
    }),
    {
      setCoordinates,
      getUrbanPolicyData
    }
  )
)(MapGeo);

export default container;
