import React, {useState} from 'react';
import {Link} from "@inertiajs/inertia-react";
import {ArrowCircleRightIcon, ArrowNarrowRightIcon} from "@heroicons/react/solid";
import Button from "@/Components/Button";

function FalseReportsTable({falseReports, subHeading}) {
    return (
        <>
            <div className="w-full">
                <div className="px-4 md:px-10 py-4 md:py-7 bg-gray-100 rounded-tl-lg rounded-tr-lg">
                    <div className="sm:flex items-center justify-between">
                        <div className={'flex gap-x-2 items-center'}>
                            <Link href={route('false-report-manager.index')}>
                                <p className="text-base sm:text-lg md:text-xl lg:text-2xl font-bold leading-normal text-gray-800">False
                                    Reports</p>
                            </Link>
                            {subHeading &&
                                <>
                                    <ArrowNarrowRightIcon className={'w-5 h-5'}/>
                                    <p className={'font-normal text-gray-800'}>{subHeading}</p>
                                </>
                            }
                        </div>
                    </div>
                </div>
                <div className="bg-white shadow px-4 md:px-10 pt-4 md:pt-7 pb-5 overflow-y-auto">
                    <table className="w-full whitespace-nowrap">
                        <thead>
                        <tr className="h-16 w-full text-sm leading-none text-gray-800">
                            <th className="font-normal text-left pl-4">Incident Type</th>
                            <th className="font-normal text-left pl-12">Details</th>
                            <th className="font-normal text-left pl-8">Reported By</th>
                            <th className="font-normal text-left pl-8">Posted By</th>
                            <th className="font-normal text-center pl-8">Action</th>
                        </tr>
                        </thead>
                        <tbody className="w-full">

                        {falseReports.map(falseReport => (
                            <Row falseReport={falseReport}/>
                        ))}

                        </tbody>
                    </table>
                </div>
            </div>
        </>
    );
}

export default FalseReportsTable;


function Row({falseReport}) {
    const [show, setShow] = useState(null)

    console.log(falseReport)
    return <tr
        className="h-20 text-sm leading-none text-gray-800 bg-white hover:bg-gray-100 border-b border-t border-gray-100">
        <td className="pl-4">
            <div className="flex items-center">
                <div className="w-10 h-10">
                    <img className="w-full h-full" src={falseReport.incident.incident_type.image}/>
                </div>
                <div className="pl-4">
                    <p className="font-medium">{falseReport.incident.incident_type.name}</p>
                </div>
            </div>
        </td>

        <td className="pl-12">
            <div className="max-w-28">
                <p className="font-medium">{falseReport.details}</p>
            </div>
        </td>
        <td className="pl-8">
            <p className="font-medium">{`${falseReport.user.fname} ${falseReport.user.lname}`}</p>
        </td>
        <td className="pl-8">
            <p className="font-medium">{`${falseReport.incident.user.fname} ${falseReport.incident.user.lname}`}</p>
        </td>

        <td className="pl-8 text-center">
            <Link href={route('incident-manager.index', {incident: falseReport.incident.id})} as={'button'}>
                <Button primary={false}>View Incident</Button>
            </Link>
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
                          href={route('false-report-manager.edit', {id: falseReport.id})} as={'button'}>
                        <div className="text-xs w-full hover:bg-indigo-700 py-4 px-4 cursor-pointer hover:text-white">
                            <p>Edit</p>
                        </div>
                    </Link>
                </div>
                <Link className={'w-full'} onClick={() => setShow(false)} method={'delete'}
                      href={route('false-report-manager.delete', {id: falseReport.id})} as={'button'}>
                    <div className="text-xs w-full hover:bg-indigo-700 py-4 px-4 cursor-pointer hover:text-white">
                        <p>Delete</p>
                    </div>
                </Link>
            </div>}
        </td>
    </tr>;
}
