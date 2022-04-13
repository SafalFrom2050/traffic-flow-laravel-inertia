import React,{useState} from "react";
import {Link} from "@inertiajs/inertia-react";

function UserRow(props) {
    const [show, setShow] = useState(null)

    return <tr
        className="h-20 text-sm leading-none text-gray-800 bg-white hover:bg-gray-100 border-b border-t border-gray-100">
        <td className="pl-4">
            <div className="flex items-center">
                <div>
                    <p className="font-medium">{`${props.user.fname} ${props.user.lname}`}</p>
                </div>
            </div>
        </td>
        <td className="pl-8">
            <p className="text-sm font-medium leading-none text-gray-800">{props.user.email}</p>
        </td>
        <td className="pl-6">
            <p className="font-medium">{props.user.phone}</p>
        </td>
        <td className="pl-6">
            <p className="font-medium text-center">{props.user.road_trips_count}</p>
        </td>
        <td className="pl-6">
            <p className="font-medium text-center">{props.user.reward_points}</p>
        </td>
        <td className="pl-10">
            <p className="font-medium">{props.user.updated_at}</p>
        </td>
        <td className="pl-10">
            <p className="font-medium">{props.user.created_at}</p>
        </td>
        <td className="px-7">
            {
                show === 0 ? <button onClick={()=>setShow(1)} className="focus:outline-none pl-7">
                    <svg xmlns="http://www.w3.org/2000/svg" width={20} height={20} viewBox="0 0 20 20" fill="none">
                        <path
                            d="M4.16667 10.8334C4.62691 10.8334 5 10.4603 5 10.0001C5 9.53984 4.62691 9.16675 4.16667 9.16675C3.70643 9.16675 3.33334 9.53984 3.33334 10.0001C3.33334 10.4603 3.70643 10.8334 4.16667 10.8334Z"
                            stroke="#A1A1AA" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
                        <path
                            d="M10 10.8334C10.4602 10.8334 10.8333 10.4603 10.8333 10.0001C10.8333 9.53984 10.4602 9.16675 10 9.16675C9.53976 9.16675 9.16666 9.53984 9.16666 10.0001C9.16666 10.4603 9.53976 10.8334 10 10.8334Z"
                            stroke="#A1A1AA" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
                        <path
                            d="M15.8333 10.8334C16.2936 10.8334 16.6667 10.4603 16.6667 10.0001C16.6667 9.53984 16.2936 9.16675 15.8333 9.16675C15.3731 9.16675 15 9.53984 15 10.0001C15 10.4603 15.3731 10.8334 15.8333 10.8334Z"
                            stroke="#A1A1AA" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                </button> : <button onClick={()=>setShow(0)} className="focus:outline-none pl-7">
                    <svg xmlns="http://www.w3.org/2000/svg" width={20} height={20} viewBox="0 0 20 20" fill="none">
                        <path
                            d="M4.16667 10.8334C4.62691 10.8334 5 10.4603 5 10.0001C5 9.53984 4.62691 9.16675 4.16667 9.16675C3.70643 9.16675 3.33334 9.53984 3.33334 10.0001C3.33334 10.4603 3.70643 10.8334 4.16667 10.8334Z"
                            stroke="#A1A1AA" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
                        <path
                            d="M10 10.8334C10.4602 10.8334 10.8333 10.4603 10.8333 10.0001C10.8333 9.53984 10.4602 9.16675 10 9.16675C9.53976 9.16675 9.16666 9.53984 9.16666 10.0001C9.16666 10.4603 9.53976 10.8334 10 10.8334Z"
                            stroke="#A1A1AA" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
                        <path
                            d="M15.8333 10.8334C16.2936 10.8334 16.6667 10.4603 16.6667 10.0001C16.6667 9.53984 16.2936 9.16675 15.8333 9.16675C15.3731 9.16675 15 9.53984 15 10.0001C15 10.4603 15.3731 10.8334 15.8333 10.8334Z"
                            stroke="#A1A1AA" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                </button>
            }
            {show === 0 && <div className="dropdown-content bg-white shadow w-24 absolute z-30 right-0 mr-12">
                <div>
                <Link className={'w-full'} onClick={()=>setShow(false)} href={route('user-manager.edit', {id: props.user.id})} as={'button'}>
                    <div className="text-xs w-full hover:bg-indigo-700 py-4 px-4 cursor-pointer hover:text-white">
                        <p>Edit</p>
                    </div>
                </Link>
                </div>
                <Link className={'w-full'} onClick={()=>setShow(false)} method={'delete'} href={route('user-manager.delete', {id: props.user.id})} as={'button'}>
                    <div className="text-xs w-full hover:bg-indigo-700 py-4 px-4 cursor-pointer hover:text-white">
                        <p>Delete</p>
                    </div>
                </Link>
            </div>}
        </td>
    </tr>;
}

function UsersTable({users=[]}) {

    return (
        <>
            <div className="w-full">
                <div className="px-4 md:px-10 py-4 md:py-7 bg-gray-100 rounded-tl-lg rounded-tr-lg">
                    <div className="sm:flex items-center justify-between">
                        <p className="text-base sm:text-lg md:text-xl lg:text-2xl font-bold leading-normal text-gray-800">Registered Users</p>

                    </div>
                </div>
                <div className="bg-white shadow px-4 md:px-10 pt-4 md:pt-7 pb-5 overflow-y-auto">
                    <table className="w-full whitespace-nowrap">
                        <thead>
                        <tr className="h-16 w-full text-sm leading-none text-gray-800">
                            <th className="font-normal text-left pl-4">Name</th>
                            <th className="font-normal text-left pl-8">Email</th>
                            <th className="font-normal text-left pl-6">Phone</th>
                            <th className="font-normal text-left pl-6">Road Trips</th>
                            <th className="font-normal text-left pl-6">Rewards</th>
                            <th className="font-normal text-left pl-10">Last Active</th>
                            <th className="font-normal text-left pl-10">Date Joined</th>
                        </tr>
                        </thead>
                        <tbody className="w-full">

                        {users.map(user => (
                            <UserRow user={user} />
                        ))}


                        </tbody>
                    </table>
                </div>
            </div>
        </>
    );
}

export default UsersTable;
