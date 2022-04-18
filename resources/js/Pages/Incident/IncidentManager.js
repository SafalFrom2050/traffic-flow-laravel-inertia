import React, {useEffect, useState} from 'react';
import {Head} from "@inertiajs/inertia-react";
import SidebarLayout from "@/Layouts/SidebarLayout";
import IncidentsTable from "@/Components/Incident/IncidentsTable";
import IncidentsMapboxView from "@/Components/Incident/IncidentsMapboxView";
import {Inertia} from "@inertiajs/inertia";

function IncidentManager(props) {

    const [count, setCount] = useState(0);
    const [editIncident, setEditIncident] = useState(false);

    useEffect(() => {
        const id = setInterval(() => setCount((oldCount) => oldCount + 1), 10000);

        return () => {
            clearInterval(id);
        };
    }, []);

    useEffect(()=>{
        if (count <= 0) return;
        Inertia.reload({ only: ['incidents']})
    }, [count])

    return (
        <SidebarLayout
            auth={props.auth}
            errors={props.errors}
            header={"Incidents"}
        >
            <Head title="Incidents"/>

            <div className={'mx-auto mb-6'}>
                <IncidentsMapboxView incidents={props.incidents} _selectedIncident={props.selectedIncident ? props.selectedIncident : {}} />
            </div>

            <IncidentsTable incidents={props.incidents}/>

        </SidebarLayout>
    );
}

export default IncidentManager;
