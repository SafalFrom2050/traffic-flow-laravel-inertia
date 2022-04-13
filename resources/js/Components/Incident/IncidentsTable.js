import React, {useState} from "react";
import {Link} from "@inertiajs/inertia-react";

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
        <td className="px-7">
            {
                show === 0 ? <button onClick={() => setShow(1)} className="focus:outline-none pl-7">
                    <svg xmlns="http://www.w3.org/2000/svg" width={20} height={20} viewBox="0 0 20 20" fill="none">
                        <path
                            d="M4.16667 10.8334C4.62691 10.8334 5 10.4603 5 10.0001C5 9.53984 4.62691 9.16675 4.16667 9.16675C3.70643 9.16675 3.33334 9.53984 3.33334 10.0001C3.33334 10.4603 3.70643 10.8334 4.16667 10.8334Z"
                            stroke="#A1A1AA" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
                        <path
                            d="M10 10.8334C10.4602 10.8334 10.8333 10.4603 10.8333 10.0001C10.8333 9.53984 10.4602 9.16675 10 9.16675C9.53976 9.16675 9.16666 9.53984 9.16666 10.0001C9.16666 10.4603 9.53976 10.8334 10 10.8334Z"
                            stroke="#A1A1AA" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
                        <path
                            d="M15.8333 10.8334C16.2936 10.8334 16.6667 10.4603 16.6667 10.0001C16.6667 9.53984 16.2936 9.16675 15.8333 9.16675C15.3731 9.16675 15 9.53984 15 10.0001C15 10.4603 15.3731 10.8334 15.8333 10.8334Z"
                            stroke="#A1A1AA" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                </button> : <button onClick={() => setShow(0)} className="focus:outline-none pl-7">
                    <svg xmlns="http://www.w3.org/2000/svg" width={20} height={20} viewBox="0 0 20 20" fill="none">
                        <path
                            d="M4.16667 10.8334C4.62691 10.8334 5 10.4603 5 10.0001C5 9.53984 4.62691 9.16675 4.16667 9.16675C3.70643 9.16675 3.33334 9.53984 3.33334 10.0001C3.33334 10.4603 3.70643 10.8334 4.16667 10.8334Z"
                            stroke="#A1A1AA" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
                        <path
                            d="M10 10.8334C10.4602 10.8334 10.8333 10.4603 10.8333 10.0001C10.8333 9.53984 10.4602 9.16675 10 9.16675C9.53976 9.16675 9.16666 9.53984 9.16666 10.0001C9.16666 10.4603 9.53976 10.8334 10 10.8334Z"
                            stroke="#A1A1AA" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
                        <path
                            d="M15.8333 10.8334C16.2936 10.8334 16.6667 10.4603 16.6667 10.0001C16.6667 9.53984 16.2936 9.16675 15.8333 9.16675C15.3731 9.16675 15 9.53984 15 10.0001C15 10.4603 15.3731 10.8334 15.8333 10.8334Z"
                            stroke="#A1A1AA" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                </button>
            }
            {show === 0 && <div className="dropdown-content bg-white shadow w-24 absolute z-30 right-0 mr-6 ">
                <div>
                    <Link className={'w-full'} onClick={() => setShow(false)}
                          href={route('incident-manager.edit', {id: incident.id})} as={'button'}>
                        <div className="text-xs w-full hover:bg-indigo-700 py-4 px-4 cursor-pointer hover:text-white">
                            <p>Edit</p>
                        </div>
                    </Link>
                </div>
                <Link className={'w-full'} onClick={() => setShow(false)} method={'delete'}
                      href={route('incident-manager.delete', {id: incident.id})} as={'button'}>
                    <div className="text-xs w-full hover:bg-indigo-700 py-4 px-4 cursor-pointer hover:text-white">
                        <p>Delete</p>
                    </div>
                </Link>
            </div>}
        </td>
    </tr>;
}

function UsersTable({incidents = []}) {

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
                            <th className="font-normal text-left pl-16">Reported By</th>
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

export default UsersTable;
