import React from 'react';
import MenuField from "@/Components/Table/MenuField";
import Button from "@/Components/Button";
import {Link} from "@inertiajs/inertia-react";

function Row({vehicle}) {

    return <tr
        className="h-20 text-sm leading-none text-gray-800 bg-white hover:bg-gray-100 border-b border-t border-gray-100">

        <td className="pl-4">
            <div className="max-w-28">
                <p className="text-sm font-medium leading-none text-gray-600 whitespace-pre-wrap">{vehicle.name}</p>
            </div>
        </td>
        <td className="pl-12">
            <p className="font-medium">{vehicle.road_trip[0].starting_point}</p>
        </td>
        <td className="pl-8">
            <p className="font-medium">{vehicle.road_trip[0].destination}</p>
        </td>
        <td className="pl-8 text-center">
            <Link href={route('road-trip-manager.show', {id: vehicle.road_trip[0].id})} as={'button'}>
                <Button primary={false}>View Road Trip</Button>
            </Link>
        </td>

        <MenuField deleteHref={route('vehicle-manager.delete', {id: vehicle.id})}/>
    </tr>
}

function VehiclesTable({vehicles = []}) {
    return (
        <>
            <div className="w-full">
                <div className="px-4 md:px-10 py-4 md:py-7 bg-gray-100 rounded-tl-lg rounded-tr-lg">
                    <div className="sm:flex items-center justify-between">
                        <p className="text-base sm:text-lg md:text-xl lg:text-2xl font-bold leading-normal text-gray-800">Public Vehicles</p>
                    </div>
                </div>
                <div className="bg-white shadow px-4 md:px-10 pt-4 md:pt-7 pb-5 overflow-y-auto">
                    <table className="w-full whitespace-nowrap">
                        <thead>
                        <tr className="h-16 w-full text-sm leading-none text-gray-800">
                            <th className="font-normal text-left pl-4">Name</th>
                            <th className="font-normal text-left pl-12">Start Destination</th>
                            <th className="font-normal text-left pl-8">End Destination</th>
                            <th className="font-normal text-center pl-8">Action</th>
                        </tr>
                        </thead>
                        <tbody className="w-full">

                        {vehicles.map(vehicle => (
                            <Row vehicle={vehicle}/>
                        ))}

                        </tbody>
                    </table>
                </div>
            </div>
        </>
    );
}

export default VehiclesTable;
