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
import { getUrbanPolicyData, setCoordinates, setLoadingMap } from 'domains/shapeDiver/slice';
import { Coordinates } from 'domains/shapeDiver/models';

interface OwnProps {
  markerDrop?: boolean;
  location?: string;
  changeLocation?: any;
  exportMapFunc?: any;
  exportMap?: boolean;
  mapContainer?: boolean;
}

interface DispatchProps {
  setCoordinates: typeof setCoordinates;
  getUrbanPolicyData: typeof getUrbanPolicyData;
  setLoadingMap: typeof setLoadingMap;
}

interface StateProps {
  coordinates: Coordinates | undefined;
}

type Props = OwnProps & DispatchProps & StateProps;
const MapGeo = (props: Props) => {

  const [map, setMap] = useState<Map>();
  const [layer, setLayer] = useState<any>();

  const { markerDrop, location, changeLocation, setCoordinates, coordinates, getUrbanPolicyData, exportMapFunc, exportMap, mapContainer, setLoadingMap } = props;

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
        target: mapContainer ? "map-1" : "map",
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

      if (boundingBox) {
        let bb = boundingExtent([
          [parseFloat(boundingBox![3]), parseFloat(boundingBox![1])],
          [parseFloat(boundingBox![2]), parseFloat(boundingBox![0])]
        ])

        bb = transformExtent(bb, get('EPSG:4326'), get('EPSG:3857'));
        initialMap.getView().fit(bb);
      }

      // console.log("INITIAL MAP", initialMap);


      translate.on('translateend', (e) => {
        const coordinates = toLonLat(e.coordinate);
        getLocationFromCoords(coordinates[1], coordinates[0]);
      })
      // console.log("EXPORT MAP FUNC BEFORE", exportMapFunc);
      // console.log("EXPORT MAP", exportMap)
      if (exportMap) {
        if (exportMapFunc) {
          // exportMapFunc.current = generateMapImg();
          // console.log("EXPORT MAP FUNC AFTER", exportMapFunc);
          initialMap.once('rendercomplete', () => {
            exportMapFunc.current = generateMapImg;
            setLoadingMap(true);
          })
        }
      }





      setMap(initialMap)
      setLayer(flayer)
    }

    if (coordinates) {
      if (coordinates?.lat !== 0 && coordinates?.long !== 0) {
        initializeMap(coordinates?.long!, coordinates?.lat!, undefined);
        getUrbanPolicyData(coordinates!);
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


  }, [markerDrop, location, exportMapFunc, exportMap, mapContainer])



  const generateMapImg = () => {
    const resolution = 150;
    const width = Math.round((197 * resolution) / 25.4);
    const height = Math.round((110 * resolution) / 25.4);
    // mapE.once('rendercomplete', () => {
    const mapCanvas = document.createElement('canvas');
    mapCanvas.width = width;
    mapCanvas.height = height;
    const mapContext = mapCanvas.getContext('2d');
    Array.prototype.forEach.call(
      document.querySelectorAll('.ol-layer canvas'),
      function (canvas) {
        if (canvas.width > 0) {
          const opacity = canvas.parentNode.style.opacity;
          if (mapContext !== null) {
            mapContext.globalAlpha = opacity === '' ? 1 : Number(opacity);
          }

          const transform = canvas.style.transform;
          const matrix = transform
            .match(/^matrix\(([^\(]*)\)$/)[1]
            .split(',')
            .map(Number);

          CanvasRenderingContext2D.prototype.setTransform.apply(
            mapContext,
            matrix
          );
          mapContext?.drawImage(canvas, 0, 0);
          if (mapContext !== null) {
            mapContext.globalCompositeOperation = 'destination-in';
            mapContext.beginPath();
            mapContext.arc(mapCanvas.width / 2, mapCanvas.height / 2, mapCanvas.height / 2, 0, Math.PI * 2);
            mapContext.closePath();
            mapContext.fill();
          }

        }
      }
    )

    return mapCanvas.toDataURL('image/png');
    // })


    // })



  }


  return (
    mapContainer ?
      <div id="map-1" className="map-container" style={{ height: '100%', width: '100%' }}></div> :
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
      getUrbanPolicyData,
      setLoadingMap
    }
  )
)(MapGeo);

export default container;
