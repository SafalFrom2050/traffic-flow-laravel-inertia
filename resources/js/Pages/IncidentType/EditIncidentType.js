import React from 'react';
import {useForm} from "@inertiajs/inertia-react";
import ValidationErrors from "@/Components/ValidationErrors";
import LabelledInput from "@/Components/CompoundInputs/LabelledInput";
import Button from "@/Components/Button";
import Modal from "@/Components/Common/Modal";

function EditIncidentType({incidentType, auth, onHide}) {

    const {data, setData, post, processing, errors, reset, progress} = useForm({
        name: incidentType.name,
        marker: null,
        image: null,
        default_severity: incidentType.default_severity,
    });

    const onHandleChange = (event) => {
        setData(event.target.name, event.target.type === 'file' ? event.target.files[0] : event.target.value);
    };

    const submit = (e) => {
        e.preventDefault();
        post(route('incident-type-manager.update', {_method: 'put', id: incidentType.id}));
        onHide(e)
    };


    return (

        <Modal handleHide={onHide}>
            {status && <div className="mb-4 font-medium text-sm text-green-600">{status}</div>}

            <ValidationErrors errors={errors}/>

            <form onSubmit={submit} encType="multipart/form-data">

                <div className="mt-4 flex gap-4">

                    <LabelledInput
                        label={"Name"}
                        name="name"
                        value={data.name}
                        className="mt-1 block "
                        pClassName="flex items-center gap-4 w-full"
                        autoComplete=""
                        handleChange={onHandleChange}
                    />

                </div>

                <div className="mt-4 mx-auto">
                    <LabelledInput
                        label={"Default Severity"}
                        name="default_severity"
                        type={'number'}
                        min={0}
                        max={5}
                        value={data.default_severity}
                        className="mt-1 block"
                        pClassName="flex items-center gap-4 w-full"
                        autoComplete="default_severity"
                        handleChange={onHandleChange}
                    />
                </div>

                <div className="mt-4 flex gap-4">

                    <LabelledInput
                        label={"Update Marker"}
                        type={"file"}
                        name="marker"
                        className="mt-1 block"
                        pClassName="flex items-center gap-4 w-full"
                        handleChange={onHandleChange}
                    />

                    <img src={'/' + incidentType.marker} alt="Current Marker" width={'60px'}/>

                </div>

                <div className="mt-4 flex gap-4">

                    <LabelledInput
                        label={"Update Image"}
                        type={"file"}
                        name="image"
                        className="mt-1 block "
                        pClassName="flex items-center gap-4 w-full"
                        handleChange={onHandleChange}
                    />

                    <img src={'/' + incidentType.image} alt="Current Marker" width={'60px'}/>

                </div>


                <div className='w-full mt-8 flex justify-end'>
                    <Button processing={processing}>
                        Update Incident Type
                    </Button>
                </div>

            </form>

        </Modal>

    );
}

export default EditIncidentType;
