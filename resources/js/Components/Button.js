// {/* CODE FROM: https://laravel.com/docs/9.x/starter-kits */}
import React from 'react';

export default function Button({ type = 'submit', className = '', processing, children, primary=true, danger=false }) {
    return (
        <button
            type={type}
            className={
                `inline-flex items-center px-4 py-2 ${primary ? 'bg-gray-900' : 'bg-gray-200'} ${danger ? 'border-red-400 border-2' : ''} border border-transparent rounded-md font-semibold text-xs ${primary ? 'text-white' : 'text-gray-800'} uppercase tracking-widest active:bg-gray-900 transition ease-in-out duration-150 ${
                    processing && 'opacity-25'
                } ` + className
            }
            disabled={processing}
        >
            {children}
        </button>
    );
}
