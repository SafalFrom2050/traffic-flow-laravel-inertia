import React, {useState} from 'react';
import {DotsCircleHorizontalIcon, DotsHorizontalIcon} from "@heroicons/react/solid";
import {Link} from "@inertiajs/inertia-react";

function MenuField({onEdit=()=>{}, deleteHref}) {

    const [show, setShow] = useState(false)

    return (
        <td className="px-6 text-gray-500">
            {
                show ? <button onClick={() => setShow(false)} className="focus:outline-none pl-7">
                    <DotsCircleHorizontalIcon className={'w-6 h-6'}/>
                </button> : <button onClick={() => setShow(true)} className="focus:outline-none pl-7">
                    <DotsHorizontalIcon className={'w-6 h-6'}/>
                </button>
            }
            {show && <>
                <div className='w-screen h-screen fixed top-0 bottom-0 right-0 left-0' onClick={()=>setShow(false)} />
                <div className="dropdown-content bg-white shadow w-24 absolute z-30 ">

                    <div className='z-50'>
                        <div onClick={onEdit}
                             className="w-full text-xs w-full hover:bg-indigo-700 py-4 px-4 cursor-pointer hover:text-white">
                            <p className={'text-center'}>Edit</p>
                        </div>
                    </div>
                    <Link className={'w-full'} onClick={() => setShow(false)} method={'delete'}
                          href={deleteHref} as={'button'}>
                        <div className="text-xs w-full hover:bg-indigo-700 py-4 px-4 cursor-pointer hover:text-white">
                            <p>Delete</p>
                        </div>
                    </Link>
                </div>
            </>}
        </td>
    );
}

export default MenuField;
