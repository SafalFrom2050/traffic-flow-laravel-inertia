import React from 'react';
import Map, {Layer, Source} from "react-map-gl";

function RoadTripMapboxView({pointGeoJson}) {
    return (
        <Map
            mapboxAccessToken={'pk.eyJ1Ijoic2FmYWxmcm9tMjA1MCIsImEiOiJja3RiZGg4OGUxdW0yMnZucjd1anUzb2sxIn0.boXjDw3dQg-zI-rLKA8W1w'}
            initialViewState={{
                latitude: 27.662396724465182,
                longitude: 85.41982430569306,
                zoom: 12
            }}
            style={{width: "60vw", height: 400}}
            mapStyle="mapbox://styles/mapbox/streets-v11"
        >

            <Source id='trafficLayerSource' type='geojson' data={pointGeoJson}>
                <Layer
                    id={'trafficLayer'}
                    type={'heatmap'}
                    source={'trafficLayerSource'}
                    paint={{
                        'heatmap-weight': [
                            'interpolate',
                            ['linear'],
                            ['get', 'speed'],
                            0,
                            2,
                            60,
                            1
                        ],
                        'heatmap-radius': [
                            'interpolate',
                            ['linear'],
                            ['get', 'speed'],
                            0,
                            5,
                            100,
                            1
                        ],
                    }}
                />
            </Source>


        </Map>
    );
}

export default RoadTripMapboxView;
