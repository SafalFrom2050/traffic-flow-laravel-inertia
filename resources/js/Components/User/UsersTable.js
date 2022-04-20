import React,{useState} from "react";
import {Link} from "@inertiajs/inertia-react";
import MenuField from "@/Components/Table/MenuField";
import createUser from "@/Components/User/CreateUser";

function UserRow({user, setSelected}) {

    return <tr
        className="h-20 text-sm leading-none text-gray-800 bg-white hover:bg-gray-100 border-b border-t border-gray-100">
        <td className="pl-4">
            <div className="flex items-center">
                <div>
                    <p className="font-medium">{`${user.fname} ${user.lname}`}</p>
                </div>
            </div>
        </td>
        <td className="pl-8">
            <p className="text-sm font-medium leading-none text-gray-800">{user.email}</p>
        </td>
        <td className="pl-6">
            <p className="font-medium">{user.phone}</p>
        </td>
        <td className="pl-6">
            <p className="font-medium text-center">{user.road_trips_count}</p>
        </td>
        <td className="pl-6">
            <p className="font-medium text-center">{user.reward_points}</p>
        </td>
        <td className="pl-10">
            <p className="font-medium">{user.updated_at}</p>
        </td>
        <td className="pl-10">
            <p className="font-medium">{user.created_at}</p>
        </td>

        <MenuField onEdit={()=>setSelected(user)} deleteHref={route('user-manager.delete', {id: user.id})} />
    </tr>;
}

function UsersTable({users=[], setSelected, onCreate}) {

    return (
        <>
            <div className="w-full">
                <div className="px-4 md:px-10 py-4 md:py-7 bg-gray-100 rounded-tl-lg rounded-tr-lg">
                    <div className="sm:flex items-center justify-between">
                        <p className="text-base sm:text-lg md:text-xl lg:text-2xl font-bold leading-normal text-gray-800">Registered Users</p>

                        <button onClick={onCreate} className="inline-flex sm:ml-3 mt-4 sm:mt-0 items-start justify-start px-6 py-3 bg-indigo-700 hover:bg-indigo-600 focus:outline-none rounded">
                            <p className="text-sm font-medium leading-none text-white">Create User</p>
                        </button>
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
                            <UserRow user={user} setSelected={setSelected} />
                        ))}


                        </tbody>
                    </table>
                </div>
            </div>
        </>
    );
}

export default UsersTable;
