import React, {useState} from "react";
import {SideMenu} from "@/Components/LayoutParts/SideMenu";
import ApplicationLogo from "@/Components/ApplicationLogo";
import {Link} from "@inertiajs/inertia-react";

import {ArrowNarrowRightIcon, ChevronDownIcon, MenuIcon, XIcon} from '@heroicons/react/solid'

export default function SidebarLayout({children, header, subHeader, auth}) {
    const [show, setShow] = useState(false);
    const [profile, setProfile] = useState(false);
    const [menu, setMenu] = useState(false);
    const [menu1, setMenu1] = useState(false);
    const [menu2, setMenu2] = useState(false);
    const [menu3, setMenu3] = useState(false);

    return (
        <>
            <div className="w-full h-full bg-gray-200">
                <div className="flex flex-no-wrap">
                    {/* Sidebar starts */}
                    <div className="absolute top-0 lg:sticky w-64 min-w-64 h-screen shadow bg-gray-100 hidden lg:block">
                        <div className="w-full flex items-center justify-center py-6">
                            <ApplicationLogo mClass={"h-28 w-28"}/>
                        </div>
                        <ul aria-orientation="vertical">
                            <Link href={route('dashboard')}>
                                <SideMenu isActive={route().current('dashboard')} name="Dashboard"/>
                            </Link>

                            <Link href={route('user-manager.index')}>
                                <SideMenu isActive={route().current('user-manager.index')} name="Users Manager"/>
                            </Link>

                            <Link href={route('incident-manager.index')}>
                                <SideMenu isActive={route().current('incident-manager.index')} name="Monitor Incidents"/>
                            </Link>

                            <Link href={route('incident-type-manager.index')}>
                                <SideMenu isActive={route().current('incident-type-manager.index')} name="Manage Incidents Types"/>
                            </Link>

                            <Link href={route('road-trip-manager.index')}>
                                <SideMenu isActive={route().current('road-trip-manager.index')} name="Road Trips"/>
                            </Link>

                            <Link href={route('false-report-manager.index')}>
                                <SideMenu isActive={route().current('false-report-manager.index')} name="False Reports"/>
                            </Link>

                        </ul>
                    </div>
                    {/*Mobile responsive sidebar*/}
                    <div
                        className={show ? "w-full h-full absolute z-40  transform  translate-x-0 " : "   w-full h-full absolute z-40  transform -translate-x-full"}
                        id="mobile-nav">
                        <div className="bg-gray-800 opacity-50 absolute h-full w-full lg:hidden"
                             onClick={() => setShow(!show)}/>
                        <div
                            className="absolute z-40 sm:relative w-64 md:w-96 shadow pb-4 bg-gray-100 lg:hidden transition duration-150 ease-in-out h-full">
                            <div className="flex flex-col justify-between w-full">
                                <div>
                                    <div className="flex items-center justify-end p-4">
                                        <div id="closeSideBar" className="flex items-center justify-center h-10 w-10"
                                             onClick={() => setShow(!show)}>
                                            <XIcon className={'w-5 h-5'} />
                                        </div>
                                    </div>
                                    <ul aria-orientation="vertical" className="py-6">
                                        <li className="pl-6 cursor-pointer text-white text-sm leading-3 tracking-normal pb-4 pt-5 text-indigo-700 focus:text-indigo-700 focus:outline-none">
                                            <div className="flex items-center">
                                                <span
                                                    className="ml-2 xl:text-base md:text-2xl text-base">Dashboard</span>
                                            </div>
                                        </li>
                                        <li className="pl-6 cursor-pointer text-gray-600 text-sm leading-3 tracking-normal mt-4 mb-4 py-2 hover:text-indigo-700 focus:text-indigo-700 focus:outline-none">
                                            <div className="flex items-center">

                                                <span
                                                    className="ml-2 xl:text-base md:text-2xl text-base">Products</span>
                                            </div>
                                        </li>
                                        <li className="pl-6 cursor-pointer text-gray-600 text-sm leading-3 tracking-normal mb-4 py-2 hover:text-indigo-700 focus:text-indigo-700 focus:outline-none">
                                            <div className="flex items-center">

                                                <span
                                                    className="ml-2 xl:text-base md:text-2xl text-base">Performance</span>
                                            </div>
                                        </li>
                                        <li className="pl-6 cursor-pointer text-gray-600 text-sm leading-3 tracking-normal py-2 hover:text-indigo-700 focus:text-indigo-700 focus:outline-none">
                                            <div className="flex items-center">

                                                <span
                                                    className="ml-2 xl:text-base md:text-2xl text-base">Deliverables</span>
                                            </div>
                                        </li>

                                        <div className="my-4">
                                            <div className="border-t border-gray-300">
                                                <div className="w-full flex items-center justify-between px-6 pt-4">
                                                    <div className="flex items-center">
                                                        <img alt="profile-pic"
                                                             src={auth.user.profile_image}
                                                             className="w-8 h-8 rounded-md"/>
                                                        <p className="md:text-xl text-gray-800 text-base leading-4 ml-2">
                                                            {auth ? `${auth.user.fname} ${auth.user.lname}` : 'User'}
                                                        </p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </ul>
                                </div>

                            </div>
                        </div>
                    </div>
                    {/*Mobile responsive sidebar*/}
                    {/* Sidebar ends */}
                    <div className="w-full">
                        {/* Navigation starts */}
                        <nav
                            className="h-16 flex items-center lg:items-stretch justify-end bg-white shadow relative z-10">
                            <div className="lg:flex w-full pr-6">

                                <div className="w-full hidden lg:flex">
                                    <div className="w-1/2 pl-6 flex items-center justify-start">
                                        <Link href={route('user-manager.index')}>
                                            <h2 className="font-semibold text-xl text-gray-800 leading-tight">{header ? header : ''}</h2>
                                        </Link>
                                        {subHeader &&
                                            <>
                                                <ArrowNarrowRightIcon className={'w-5 h-5 text-gray-800 ml-2 mr-4'}/>
                                                <p className="font-medium text-l text-gray-600 leading-tight">{subHeader}</p>
                                            </>
                                        }

                                    </div>
                                    <div className="w-1/2 flex items-center pl-8 justify-end">

                                        <div className="flex items-center relative cursor-pointer"
                                             onClick={() => setProfile(!profile)}>
                                            <div className="rounded-full">
                                                {profile ? (
                                                    <ul className="p-2 w-full border-r bg-white absolute rounded left-0 shadow mt-12 sm:mt-16 ">
                                                        <li className="flex w-full justify-between text-gray-600 hover:text-indigo-700 cursor-pointer items-center">
                                                            <div className="flex items-center">
                                                                <span className="text-sm ml-2">My Profile</span>
                                                            </div>
                                                        </li>
                                                        <Link method="post" href={route('logout')}>
                                                            <li className="flex w-full justify-between text-gray-600 hover:text-indigo-700 cursor-pointer items-center mt-2">
                                                                <div className="flex items-center">
                                                                    <span className="text-sm ml-2">Sign out</span>
                                                                </div>
                                                            </li>
                                                        </Link>
                                                    </ul>
                                                ) : (
                                                    ""
                                                )}
                                                <div className="relative">
                                                    <img className="rounded-full h-10 w-10 object-cover"
                                                         src={auth.user.profile_image}
                                                         alt="avatar"/>
                                                </div>
                                            </div>
                                            <p className="text-gray-800 text-sm mx-3">{auth ? `${auth.user.fname} ${auth.user.lname}` : 'User'}</p>
                                            <div className="cursor-pointer text-gray-600">
                                                <ChevronDownIcon className={'w-5 h-5 '}/>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="text-gray-600 mr-6 visible lg:hidden relative"
                                 onClick={() => setShow(!show)}>
                                {show ? (
                                    " "
                                ) : (
                                    <MenuIcon className={'w-8 h-8'}/>
                                )}
                            </div>
                        </nav>
                        {/* Navigation ends */}

                        <div className="container mx-auto py-10 md:w-5/6 w-11/12">
                            {/* Remove class [ border-dashed border-2 border-gray-300 ] to remove dotted border */}
                            {/*<div className="">*/}
                            {children}
                            {/*</div>*/}
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
