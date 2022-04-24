import React from 'react';

export default function Label({ forInput, value, className, children }) {
    return (
        <label htmlFor={forInput} className={`block font-medium text-sm text-gray-700 ` + className}>
            {value ? value : { children }}
            {/* CODE FROM: https://laravel.com/docs/9.x/starter-kits */}
        </label>
    );
}
