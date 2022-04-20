import React, {useState} from 'react';
import {Link} from "@inertiajs/inertia-react";
import {ArrowCircleRightIcon, ArrowNarrowRightIcon} from "@heroicons/react/solid";
import Button from "@/Components/Button";
import MenuField from "@/Components/Table/MenuField";

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

        <MenuField onEdit={()=>{}} deleteHref={route('false-report-manager.delete', {id: falseReport.id})}/>
    </tr>;
}
