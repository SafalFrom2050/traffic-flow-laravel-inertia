import React from "react";

export function SideMenu({isActive = false, name}) {
    return <>
        <li
            className={`pl-6 cursor-pointer text-sm leading-3 tracking-normal mt-4 mb-4 py-2 ${isActive ? 'text-indigo-700' : 'text-gray-600'} hover:text-indigo-700 focus:text-indigo-700 focus:outline-none`}>
            <div className="flex items-center">
                <div>
                    <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-grid" width={20}
                         height={20} viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" fill="none"
                         strokeLinecap="round" strokeLinejoin="round">
                        <path stroke="none" d="M0 0h24v24H0z"/>
                        <rect x={4} y={4} width={6} height={6} rx={1}/>
                        <rect x={14} y={4} width={6} height={6} rx={1}/>
                        <rect x={4} y={14} width={6} height={6} rx={1}/>
                        <rect x={14} y={14} width={6} height={6} rx={1}/>
                    </svg>
                </div>
                <span className="ml-2">{name}</span>
            </div>
        </li>

    </>
}
