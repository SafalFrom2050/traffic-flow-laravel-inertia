import React from 'react';
import Label from "@/Components/Label";
import Input from "@/Components/Input";

function LabelledInput(
    {
        name,
        label,
        pClassName="",
        lClassName,
        className,
        type = 'text',
        value,
        autoComplete,
        required,
        isFocused,
        handleChange,
        ...props
    }) {
    return (
        <div className={pClassName}>
            <Label forInput={name} className={`font-bold ${lClassName}`} value={label ? label : name} />

            <Input
                type={type}
                name={name}
                autoComplete={autoComplete}
                value={value}
                required={required}
                isFocused={isFocused}
                handleChange={handleChange}
                className={className}
                {...props}
            />
        </div>
    );
}

export default LabelledInput;
