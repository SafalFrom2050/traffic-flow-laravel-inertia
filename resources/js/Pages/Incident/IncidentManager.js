import React, {useEffect, useState} from 'react';
import {Head} from "@inertiajs/inertia-react";
import SidebarLayout from "@/Layouts/SidebarLayout";
import IncidentsTable from "@/Components/Incident/IncidentsTable";
import IncidentsMapboxView from "@/Components/Incident/IncidentsMapboxView";
import {Inertia} from "@inertiajs/inertia";

function IncidentManager(props) {

    const [count, setCount] = useState(0);

    useEffect(() => {
        const id = setInterval(() => setCount((oldCount) => oldCount + 1), 20000);

        return () => {
            clearInterval(id);
        };
    }, []);

    useEffect(()=>{
        Inertia.reload({ only: ['incidents']})
        console.log('reloading...')
    }, [count])

    return (
        <SidebarLayout
            auth={props.auth}
            errors={props.errors}
            header={"Incidents"}
        >
            <Head title="Incidents"/>

            <div className={'mx-auto mb-6'}>
                <IncidentsMapboxView incidents={props.incidents} />
            </div>

            <IncidentsTable incidents={props.incidents}/>
        </SidebarLayout>
    );
}

export default IncidentManager;
