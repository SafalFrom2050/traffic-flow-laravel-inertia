import React, {useState} from "react";
import MenuField from "@/Components/Table/MenuField";

function Row({incident}) {
    const [show, setShow] = useState(null)

    return <tr
        className="h-20 text-sm leading-none text-gray-800 bg-white hover:bg-gray-100 border-b border-t border-gray-100">
        <td className="pl-4">
            <div className="flex items-center">
                <div className="w-10 h-10">
                    <img className="w-full h-full" src={incident.incident_type.image}/>
                </div>
                <div className="pl-4">
                    <p className="font-medium">{incident.incident_type.name}</p>
                </div>
            </div>
        </td>
        <td className="pl-12">
            <div className="max-w-28">
                <p className="text-sm font-medium leading-none text-gray-600 whitespace-pre-wrap">{incident.description}</p>
            </div>
        </td>
        <td className="pl-12">
            <p className="font-medium">{incident.severity}</p>
        </td>
        <td className="pl-16">
            <p className="font-medium">{incident.device_identifier}</p>
        </td>
        <td className="pl-16">
            <div className="w-16">
                <p className="overflow-hidden overflow-ellipsis">{incident.latitude}</p>
            </div>
        </td>
        <td className="pl-16">
            <div className="w-16">
                <p className="overflow-hidden overflow-ellipsis">{incident.longitude}</p>
            </div>
        </td>
        <td className="pl-16">
            <p className="font-medium">{`${incident.user.fname} ${incident.user.lname}`}</p>
        </td>

        <MenuField deleteHref={route('incident-manager.delete', {id: incident.id})}  />
    </tr>;
}

function IncidentsTable({incidents = []}) {

    return (
        <>
            <div className="w-full">
                <div className="px-4 md:px-10 py-4 md:py-7 bg-gray-100 rounded-tl-lg rounded-tr-lg">
                    <div className="sm:flex items-center justify-between">
                        <p className="text-base sm:text-lg md:text-xl lg:text-2xl font-bold leading-normal text-gray-800">Recent Incidents</p>
                    </div>
                </div>
                <div className="bg-white shadow px-4 md:px-10 pt-4 md:pt-7 pb-5 overflow-y-auto">
                    <table className="w-full whitespace-nowrap">
                        <thead>
                        <tr className="h-16 w-full text-sm leading-none text-gray-800">
                            <th className="font-normal text-left pl-4">Type</th>
                            <th className="font-normal text-left pl-12">Description</th>
                            <th className="font-normal text-left pl-8">Severity</th>
                            <th className="font-normal text-left pl-16">Device</th>
                            <th className="font-normal text-left pl-16">Latitude</th>
                            <th className="font-normal text-left pl-16">Longitude</th>
                            <th className="font-normal text-left pl-16">Posted By</th>
                        </tr>
                        </thead>
                        <tbody className="w-full">

                        {incidents.map(incident => (
                            <Row incident={incident}/>
                        ))}

                        </tbody>
                    </table>
                </div>
            </div>
        </>
    );
}

export default IncidentsTable;
