import React, {useState} from 'react';
import {Head} from "@inertiajs/inertia-react";
import SidebarLayout from "@/Layouts/SidebarLayout";
import IncidentTypesTable from "@/Components/IncidentType/IncidentTypesTable";
import EditIncidentType from "@/Components/IncidentType/EditIncidentType";
import CreateIncidentType from "@/Components/IncidentType/CreateIncidentType";

function IncidentTypeManager(props) {

    const [editingIncidentType, setEditingIncidentType] = useState(false);
    const [creatingIncidentType, setCreatingIncidentType] = useState(false);

    return (
        <SidebarLayout
            auth={props.auth}
            errors={props.errors}
            header={"Incidents Types"}
        >
            <Head title="Incidents Types"/>

            <IncidentTypesTable
                incidentTypes={props.incidentTypes}
                setSelected={(incidentType)=>setEditingIncidentType(incidentType)}
                onCreate={()=>setCreatingIncidentType(true)}
            />

            {editingIncidentType &&
                <EditIncidentType incidentType={editingIncidentType} onHide={()=>setEditingIncidentType(false)} />
            }

            {creatingIncidentType &&
                <CreateIncidentType onHide={()=>setCreatingIncidentType(false)} />
            }
        </SidebarLayout>
    );
}

export default IncidentTypeManager;
