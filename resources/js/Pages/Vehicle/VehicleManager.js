import React from 'react';
import {Head} from "@inertiajs/inertia-react";
import SidebarLayout from "@/Layouts/SidebarLayout";
import VehiclesTable from "@/Components/Vehicle/VehiclesTable";

function VehicleManager(props) {
    return (
        <SidebarLayout
            auth={props.auth}
            errors={props.errors}
            header={"Public Vehicles"}
        >
            <Head title="Public Vehicles"/>


            <VehiclesTable vehicles={props.vehicles}/>

        </SidebarLayout>
    );
}

export default VehicleManager;
