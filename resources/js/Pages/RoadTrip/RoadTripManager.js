import React, {useEffect, useState} from 'react';
import SidebarLayout from "@/Layouts/SidebarLayout";
import {Head, Link} from "@inertiajs/inertia-react";
import RoadTripMapboxView from "@/Components/RoadTrip/RoadTripMapboxView";
import RoadTripsTable, {RoadTripRow} from "@/Components/RoadTrip/RoadTripsTable";
import Button from "@/Components/Button";
import {Inertia} from "@inertiajs/inertia";
import {round} from "lodash";


function SelectedRoadTrip({roadTrip, onDelete = {}}) {
    return <div className={"rounded shadow p-6 mb-6 bg-gray-100"}>
        <div className="sm:flex items-center justify-between mb-6">
            <p className="text-base sm:text-lg md:text-xl lg:text-2xl font-bold leading-normal text-gray-800">Selected
                Road Trip</p>
            <Link className={"mx-6"} method={"delete"}
                  href={route('road-trip-manager.delete', {id: roadTrip.id})} as={"button"}>
                <Button primary={false} danger={true}>Delete</Button>
            </Link>
        </div>

        <div className="w-full text-sm leading-none text-gray-800 flex justify-between mt-4 px-6">
            <div className={"text-center"}>
                <p className="font-normal pb-4">Start Point</p>
                <p className="font-thin bg-gray-200 rounded text-gray-600 text-xs">{roadTrip.starting_point}</p>
            </div>
            <div className={"text-center"}>
                <p className="font-normal pb-4">Destination</p>
                <p className="font-thin bg-gray-200 rounded text-gray-600 text-xs">{roadTrip.destination}</p>
            </div>
            <div className={"text-center"}>
                <p className="font-normal pb-4">Average Speed</p>
                {/* Convert meters per second to km/hr */}
                <p className="font-thin bg-gray-200 rounded text-gray-600 text-xs">{roadTrip.location_data_avg_speed !== null ? round(roadTrip.location_data_avg_speed * 3.6) + ' Km/hr' : '--'}</p>
            </div>
            <div className={"text-center"}>
                <p className="font-normal pb-4">Max. Speed</p>
                <p className="font-thin bg-gray-200 rounded text-gray-600 text-xs">{roadTrip.location_data_max_speed !== null ? round(roadTrip.location_data_max_speed * 3.6) + ' Km/hr' : '--'}</p>
            </div>
            <div className={"text-center"}>
                <p className="font-normal pb-4">Min. Speed</p>
                <p className="font-thin bg-gray-200 rounded text-gray-600 text-xs">{roadTrip.location_data_min_speed !== null ? round(roadTrip.location_data_min_speed * 3.6) + ' Km/hr' : '--'}</p>
            </div>
            <div className={"text-center"}>
                <p className="font-normal pb-4">Vehicle</p>
                <p className="font-thin bg-gray-200 rounded text-gray-600 text-xs">{roadTrip.vehicle ? roadTrip.vehicle.name : '--'}</p>
            </div>
        </div>
    </div>;
}

function RoadTripManager(props) {

    const [count, setCount] = useState(0);

    useEffect(() => {
        const id = setInterval(() => setCount((oldCount) => oldCount + 1), 10000);

        return () => {
            clearInterval(id);
        };
    }, []);

    useEffect(() => {
        if (count <= 0) return;
        Inertia.reload({only: ['trafficGeoJson', 'roadTrips', 'selectedRoadTrip']})
    }, [count])

    return (
        <SidebarLayout
            auth={props.auth}
            errors={props.errors}
            header={"Road Trips"}
        >
            <Head title="Road Trips"/>

            {props.selectedRoadTrip &&
                <SelectedRoadTrip roadTrip={props.selectedRoadTrip}/>
            }
            <div className={'mx-auto mb-6 rounded'}>
                <RoadTripMapboxView pointGeoJson={props.trafficGeoJson}/>
            </div>
            {props.roadTrips &&
                <RoadTripsTable roadTrips={props.roadTrips}/>
            }

        </SidebarLayout>
    );
}

export default RoadTripManager;
