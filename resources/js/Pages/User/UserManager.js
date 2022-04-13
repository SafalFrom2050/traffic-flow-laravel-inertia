import React from 'react';
import {Head} from "@inertiajs/inertia-react";
import SidebarLayout from "@/Layouts/SidebarLayout";
import UsersTable from "@/Components/User/UsersTable";

function UserManager(props) {

    console.log(props);

    return (
        <SidebarLayout
            auth={props.auth}
            errors={props.errors}
            header={"Users Manager"}
        >
            <Head title="Users Manager"/>

            <UsersTable users={props.users}/>
        </SidebarLayout>
    );
}

export default UserManager;
