import React, {useEffect, useState} from 'react';
import {Head} from "@inertiajs/inertia-react";
import SidebarLayout from "@/Layouts/SidebarLayout";
import FalseReportsTable from "@/Components/FalseReport/FalseReportsTable";
import {Inertia} from "@inertiajs/inertia";

function FalseReportManager(props) {

    const [count, setCount] = useState(0);

    useEffect(() => {
        const id = setInterval(() => setCount((oldCount) => oldCount + 1), 10000);

        return () => {
            clearInterval(id);
        };
    }, []);

    useEffect(()=>{
        if (count <= 0) return;
        Inertia.reload({ only: ['falseReports']})
    }, [count])


    return (
        <SidebarLayout
            auth={props.auth}
            errors={props.errors}
            header={"Monitor False Reports"}
        >
            <Head title="Monitor False Reports"/>

            <FalseReportsTable falseReports={props.falseReports} subHeading={props.subHeading}/>
        </SidebarLayout>
    );
}

export default FalseReportManager;
