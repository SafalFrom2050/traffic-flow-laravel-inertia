import React from 'react';
import SidebarLayout from "@/Layouts/SidebarLayout";
import {Head, useForm} from "@inertiajs/inertia-react";
import Button from "@/Components/Button";
import LabelledInput from "@/Components/CompoundInputs/LabelledInput";
import ValidationErrors from "@/Components/ValidationErrors";

function UserEdit({user, auth}) {

    const {data, setData, put, processing, errors, reset} = useForm({
        fname: user.fname,
        lname: user.lname,
        phone: user.phone,
        email: user.email,
        password: '',
    });

    const onHandleChange = (event) => {
        setData(event.target.name, event.target.value);
    };

    const submit = (e) => {
        e.preventDefault();
        put(route('user-manager.update', {id: user.id}));
    };

    return (
        <SidebarLayout
            auth={auth}
            errors={errors}
            header={"Users Manager"}
            subHeader={"Edit"}
        >
            <Head title={`Edit User: ${user.fname} ${user.lname}`}/>


            <div className="p-6 shadow bg-white rounded max-w-xl mx-auto">

                {status && <div className="mb-4 font-medium text-sm text-green-600">{status}</div>}

                <ValidationErrors errors={errors}/>

                <form onSubmit={submit}>

                    <div className="mt-4 flex gap-4">

                        <LabelledInput
                            label={"First Name"}
                            name="fname"
                            value={data.fname}
                            className="mt-1 block w-full"
                            autoComplete="first-name"
                            handleChange={onHandleChange}
                        />
                        <LabelledInput
                            label={"Last Name"}
                            name="lname"
                            value={data.lname}
                            className="mt-1 block w-full"
                            autoComplete="surname"
                            handleChange={onHandleChange}
                        />
                    </div>

                    <div className="mt-4">

                        <LabelledInput
                            label={"Email"}
                            name="email"
                            value={data.email}
                            className="mt-1 block w-full"
                            autoComplete="email"
                            handleChange={onHandleChange}
                        />
                    </div>

                    <div className="mt-4">

                        <LabelledInput
                            label={"Phone"}
                            name="phone"
                            value={data.phone}
                            className="mt-1 block w-full"
                            autoComplete="tel"
                            handleChange={onHandleChange}
                        />
                    </div>

                    <div className='w-full mt-4 flex justify-end'>
                        <Button className="ml-8" processing={processing}>
                            Edit User
                        </Button>
                    </div>

                </form>
            </div>

        </SidebarLayout>
    );
}

export default UserEdit;
