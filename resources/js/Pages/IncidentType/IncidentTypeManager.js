import React, {useState} from 'react';
import {Head} from "@inertiajs/inertia-react";
import SidebarLayout from "@/Layouts/SidebarLayout";
import IncidentTypesTable from "@/Components/IncidentType/IncidentTypesTable";
import EditIncidentType from "@/Pages/IncidentType/EditIncidentType";

function IncidentTypeManager(props) {

    const [selectedIncidentType, setSelectedIncidentType] = useState(false);

    return (
        <SidebarLayout
            auth={props.auth}
            errors={props.errors}
            header={"Incidents Types"}
        >
            <Head title="Incidents Types"/>

            <IncidentTypesTable incidentTypes={props.incidentTypes} setSelected={(incidentType)=>setSelectedIncidentType(incidentType)} />

            {selectedIncidentType &&
                <EditIncidentType incidentType={selectedIncidentType} onHide={()=>setSelectedIncidentType(false)} />
            }
        </SidebarLayout>
    );
}

export default IncidentTypeManager;
