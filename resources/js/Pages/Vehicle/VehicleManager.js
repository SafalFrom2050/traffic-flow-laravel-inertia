import React from 'react';
import {Head} from "@inertiajs/inertia-react";
import IncidentsMapboxView from "@/Components/Incident/IncidentsMapboxView";
import IncidentsTable from "@/Components/Incident/IncidentsTable";
import SidebarLayout from "@/Layouts/SidebarLayout";

function VehicleManager(props) {
    return (
        <SidebarLayout
            auth={props.auth}
            errors={props.errors}
            header={"Public Vehicles"}
        >
            <Head title="Public Vehicles"/>


            <IncidentsTable incidents={props.incidents}/>

        </SidebarLayout>
    );
}

export default VehicleManager;
