import React from 'react';

function Modal({pClassName, className, handleHide, children}) {
    return (
        <div
            className={`w-screen h-screen grid place-items-center fixed top-0 left-0 bottom-0 z-50 bg-opacity-50 bg-gray-600 ${pClassName}`}
            onClick={handleHide}
        >

            <div onClick={(e) => e.stopPropagation()}
                 className={`p-10 shadow bg-white rounded max-w-xl mx-auto ${className}`}>
                {children}
            </div>
        </div>
    );
}

export default Modal;
