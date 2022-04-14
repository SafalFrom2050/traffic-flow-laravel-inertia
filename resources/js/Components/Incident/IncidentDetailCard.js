import {Link} from "@inertiajs/inertia-react";
import Button from "@/Components/Button";
import * as React from "react";

export function IncidentDetailCard({incident, onDelete={}}) {

    return <div className={"w-full shadow p-6 bg-white rounded relative"}>
        <h2 className={"text-base text-xl font-bold leading-normal text-gray-800"}>Incident Details</h2>
        {incident.id == null &&
            <p className={"w-full mt-16 flex justify-center my-8 text-xs"}>Please select an incident from the map.</p>
        }
        {incident.id != null &&
            <>
                <div className={"text-sm text-gray-600 font-normal leading-6"}>
                    <div className={"w-full flex justify-center my-8"}>
                        <img src={incident.incident_type.marker} alt="marker" height="90px" width="90px"/>
                    </div>
                    <p>Type: {incident.incident_type.name}</p>
                    <p>Description: {incident.description}</p>
                    <p>Severity: {incident.severity}</p>
                    <a href={'#'} className={'text-cyan-600'}>Posted
                        By: {`${incident.user.fname} ${incident.user.lname}`}</a>


                </div>

                <div>

                    <Link
                        className={"absolute bottom-6 left-6"}
                        href={route('false-report-manager.index', {incident: incident.id})}
                        as={"a"}
                    >
                        <p className={`mt-6 ${incident.false_reports_count > 0 ? 'text-red-400' : 'text-green-400'} text-sm font-normal`}>
                            Reported False: {incident.false_reports_count}
                        </p>
                    </Link>

                    <Link
                        className={"absolute bottom-6 right-6"}
                        method={"delete"}
                        onClick={onDelete}
                        href={route('incident-manager.delete', {id: incident.id})}
                        as={"button"}
                    >
                        <Button>Delete</Button>
                    </Link>

                </div>
            </>
        }
    </div>;
}
