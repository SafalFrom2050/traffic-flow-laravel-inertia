import React from 'react';
import Authenticated from '@/Layouts/Authenticated';
import {Head} from '@inertiajs/inertia-react';
import SidebarLayout from "@/Layouts/SidebarLayout";

export default function Dashboard(props) {

    console.log(props);

    return (
        <SidebarLayout
            auth={props.auth}
            errors={props.errors}
            header={<h2 className="font-semibold text-xl text-gray-800 leading-tight">Dashboard</h2>}
        >
            <Head title="Dashboard"/>

            <div className={"p-6"}>You're logged in!</div>
        </SidebarLayout>
    );
}
