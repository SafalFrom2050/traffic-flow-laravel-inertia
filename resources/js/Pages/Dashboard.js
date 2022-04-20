import React from 'react';
import Authenticated from '@/Layouts/Authenticated';
import {Head} from '@inertiajs/inertia-react';
import SidebarLayout from "@/Layouts/SidebarLayout";
import IncidentsTable from "@/Components/Incident/IncidentsTable";

export default function Dashboard(props) {

    console.log(props);

    return (
        <SidebarLayout
            auth={props.auth}
            errors={props.errors}
            header={<h2 className="font-semibold text-xl text-gray-800 leading-tight">Dashboard</h2>}
        >
            <Head title="Dashboard"/>

            <div className={'flex gap-4 flex-wrap mb-8'}>
                <div className={'shadow rounded-md p-8 bg-white w-56'}>
                    <p className={'font-bold text-md mb-8'}>Registered Users</p>
                    {props.users_count}
                </div>

                <div className={'shadow rounded-md p-8 bg-white w-56'}>
                    <p className={'font-bold text-md mb-8'}>Total Incidents</p>
                    {props.incidents_count}
                </div>

                <div className={'shadow rounded-md p-8 bg-white w-56'}>
                    <p className={'font-bold text-md mb-8'}>Number of Location Data Today</p>
                    {props.location_data_count}
                </div>

                <div className={'shadow rounded-md p-8 bg-white w-56'}>
                    <p className={'font-bold text-md mb-8'}>Total Road Trips</p>
                    {props.road_trips_count}
                </div>

                <div className={'shadow rounded-md p-8 bg-white w-56'}>
                    <p className={'font-bold text-md mb-8'}>False Reports</p>
                    {props.false_reports_count}
                </div>

                <div className={'shadow rounded-md p-8 bg-white w-56'}>
                    <p className={'font-bold text-md mb-8'}>Vehicles Registered</p>
                    {props.vehicles_count}
                </div>
            </div>

            <IncidentsTable incidents={props.recentIncidents}/>

        </SidebarLayout>
    );
}
