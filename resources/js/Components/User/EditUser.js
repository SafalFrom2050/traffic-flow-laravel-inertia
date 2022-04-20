import React, {useState} from 'react';
import {useForm} from "@inertiajs/inertia-react";
import Button from "@/Components/Button";
import LabelledInput from "@/Components/CompoundInputs/LabelledInput";
import ValidationErrors from "@/Components/ValidationErrors";
import Modal from "@/Components/Common/Modal";
import PictureEditInput from "@/Components/Inputs/PictureEditInput";

function EditUser({user, auth, onHide}) {

    const {data, setData, post, processing, errors, reset} = useForm({
        profile_image: null,
        fname: user.fname,
        lname: user.lname,
        phone: user.phone,
        email: user.email,
        password: '',
    });


    const onHandleChange = (event) => {
        setData(event.target.name, event.target.type === 'file' ? event.target.files[0] : event.target.value);
    };

    const submit = (e) => {
        e.preventDefault();
        post(route('user-manager.update', {_method: 'put', id: user.id}));
        onHide();
    };

    return (
        <Modal handleHide={onHide}>
            {status && <div className="mb-4 font-medium text-sm text-green-600">{status}</div>}

            <ValidationErrors errors={errors}/>

            <form onSubmit={submit} encType="multipart/form-data">

                <div className="mt-4">
                    <PictureEditInput
                        label={'Picture'}
                        name='profile_image'
                        pClassName={'mb-6'}
                        value={user.profile_image}
                        handleChange={onHandleChange} />
                </div>

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
        </Modal>
    );
}

export default EditUser;
