import React from 'react';

export default function ApplicationLogo({className, mClass=""}) {
    return (
        <div className={mClass}>

            <svg width="100" height="100" viewBox="0 0 378 378" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="189" cy="189" r="189" fill="#2F2F2F"/>
                <path d="M215 168H281V326H215V168Z" fill="#FCFCFC"/>
                <path d="M108 54H173V212H108V54Z" fill="#D2F898"/>
            </svg>

        </div>
    );
}
