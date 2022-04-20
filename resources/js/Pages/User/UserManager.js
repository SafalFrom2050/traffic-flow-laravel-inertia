import React, {useState} from 'react';
import {Head} from "@inertiajs/inertia-react";
import SidebarLayout from "@/Layouts/SidebarLayout";
import UsersTable from "@/Components/User/UsersTable";
import EditUser from "@/Components/User/EditUser";
import CreateUser from "@/Components/User/CreateUser";

function UserManager(props) {
    const [editingUser, setEditingUser] = useState(false);
    const [creatingUser, setCreatingUser] = useState(false);

    return (
        <SidebarLayout
            auth={props.auth}
            errors={props.errors}
            header={"Users Manager"}
        >
            <Head title="Users Manager"/>

            <UsersTable users={props.users} setSelected={(user)=>setEditingUser(user)} onCreate={()=>setCreatingUser(true)}/>

            {editingUser &&
                <EditUser user={editingUser} onHide={()=>setEditingUser(false)} />
            }

            {creatingUser &&
                <CreateUser onHide={()=>setCreatingUser(false)} />
            }
        </SidebarLayout>
    );
}

export default UserManager;
