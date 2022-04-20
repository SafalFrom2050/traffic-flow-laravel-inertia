import React, {useState} from 'react';
import {PencilAltIcon} from "@heroicons/react/solid";

function PictureEditInput({
                              label = '',
                              name,
                              value,
                              handleChange,
                              lClassName,
                              pClassName,
                              className,
                              size = 20,
                              ...props
                          }) {

    const [pictureSrc, setPictureSrc] = useState(value);

    const onHandleChange = (event) => {
        const reader = new FileReader();
        reader.onload = (e) => {
            setPictureSrc(e.target.result)
        }
        reader.readAsDataURL(event.target.files[0]);

        handleChange(event);
    };

    return (
        <div className={`w-full h-26 bg-red flex flex-col items-center relative ${pClassName}`}>

            <label htmlFor={name} className={`w-${size} h-${size} relative`}>
                <span aria-hidden="true">
                    <div
                        className="w-full h-full rounded-full bg-cover bg-center bg-no-repeat absolute shadow flex items-center justify-center">
                        <img src={pictureSrc && pictureSrc !== '' ? pictureSrc : 'public/images/default-profile.jpg'} alt
                             className="absolute z-0 h-full w-full object-cover rounded-full shadow top-0 left-0 bottom-0 right-0"/>
                        <div className="absolute bg-black opacity-50 top-0 right-0 bottom-0 left-0 rounded-full z-0"/>
                        <div
                            className="cursor-pointer flex flex-col justify-center items-center z-10 text-gray-100 mt-4">
                            <PencilAltIcon className={'w-5 h-5'}/>
                            <p className="text-xs">Edit</p>
                        </div>
                    </div>

                </span>

                <input
                    type="file" id={name}
                    name={name}
                    className={'hidden'}
                    onChange={onHandleChange}
                    {...props}
                />

            </label>

            {label &&
                <p className={`mt-1 text-center text-sm font-bold ${lClassName}`}>{label}</p>
            }

        </div>
    );
}

export default PictureEditInput;
