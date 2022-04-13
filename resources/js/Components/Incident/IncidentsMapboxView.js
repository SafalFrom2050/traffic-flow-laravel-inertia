import * as React from 'react';
import {useState} from 'react';
import Map, {Marker} from 'react-map-gl';
import {IncidentDetailCard} from "@/Components/Incident/IncidentDetailCard";

export default function IncidentsMapboxView({incidents}) {

    const [selectedIncident, setSelectedIncident] = useState({
        id: null,
        incident_type: {
            type: ''
        },
        description: '',
        severity: ''
    })

    return <div className={'flex gap-x-4'}>

        <div className={'w-full rounded'}>
            <Map
                mapboxAccessToken={'pk.eyJ1Ijoic2FmYWxmcm9tMjA1MCIsImEiOiJja3RiZGg4OGUxdW0yMnZucjd1anUzb2sxIn0.boXjDw3dQg-zI-rLKA8W1w'}
                initialViewState={{
                    latitude: 27.662396724465182,
                    longitude: 85.41982430569306,
                    zoom: 12
                }}
                style={{width: 600, height: 400}}
                mapStyle="mapbox://styles/mapbox/streets-v11"
            >
                {incidents.map((incident) => (
                    <Marker
                        latitude={incident.latitude}
                        longitude={incident.longitude}
                        onClick={() => setSelectedIncident(incident)}
                        // offsetLeft={-20}
                        // offsetTop={-10}

                    >
                        <img src={incident.incident_type.marker} alt="marker"
                             className={`cursor-pointer rounded-full ${selectedIncident.id === incident.id ? 'border-b-orange-600 border-4' : ''} `}
                             height={selectedIncident.id === incident.id ? '60px' : '30px'}
                             width={selectedIncident.id === incident.id ? '60px' : '30px'}
                        />
                    </Marker>
                ))}
            </Map>
        </div>

        <IncidentDetailCard incident={selectedIncident}/>
    </div>;
}
