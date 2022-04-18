import React, {useState} from 'react';
import {Link} from "@inertiajs/inertia-react";
import {DotsCircleHorizontalIcon, DotsHorizontalIcon, DotsVerticalIcon, MenuIcon} from "@heroicons/react/solid";
import MenuField from "@/Components/Table/MenuField";

function IncidentTypesTable({incidentTypes = [], setSelected}) {
    return (
        <>
            <div className="w-full">
                <div className="px-4 md:px-10 py-4 md:py-7 bg-gray-100 rounded-tl-lg rounded-tr-lg">
                    <div className="sm:flex items-center justify-between">
                        <p className="text-base sm:text-lg md:text-xl lg:text-2xl font-bold leading-normal text-gray-800">Incidents Types</p>
                    </div>
                </div>
                <div className="bg-white shadow px-4 md:px-10 pt-4 md:pt-7 pb-5 overflow-y-auto">
                    <table className="w-full whitespace-nowrap">
                        <thead>
                        <tr className="h-16 w-full text-sm leading-none text-gray-800">
                            <th className="font-normal text-left pl-4">Name</th>
                            <th className="font-normal text-left pl-4">Marker</th>
                            <th className="font-normal text-center pl-8">Default Severity</th>
                            <th className="font-normal text-center pl-4">Posted Incidents</th>
                        </tr>
                        </thead>
                        <tbody className="w-full">

                        {incidentTypes.map(incidentType => (
                            <Row key={incidentType.id} incidentType={incidentType} setSelected={setSelected}/>
                        ))}

                        </tbody>
                    </table>
                </div>
            </div>
        </>
    );
}


function Row({incidentType, setSelected}) {

    return <tr
        className="h-20 text-sm leading-none text-gray-800 bg-white hover:bg-gray-100 border-b border-t border-gray-100">
        <td className="pl-4">
            <div className="flex items-center">
                <div className="w-10 h-10">
                    <img className="w-full h-full" src={incidentType.image}/>
                </div>
                <div className="pl-4">
                    <p className="font-medium">{incidentType.name}</p>
                </div>
            </div>
        </td>
        <td className="pl-4">
            <div className="w-10 h-10">
                <img className="w-full h-full" src={incidentType.marker}/>
            </div>
        </td>
        <td className="pl-6">
            <p className="font-medium text-center">{incidentType.default_severity}</p>
        </td>
        <td className="pl-6">
            <Link href={route('incident-manager.index', {incidentType: incidentType.id})} as='a'>
                <p className="font-medium text-center text-blue-600 hover:underline">{incidentType.incidents_count}</p>
            </Link>
        </td>


        <MenuField onEdit={() => setSelected(incidentType)}
                   deleteHref={route('incident-type-manager.delete', {id: incidentType.id})}/>
    </tr>;
}

export default IncidentTypesTable;
