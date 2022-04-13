import React from 'react';
import Label from "@/Components/Label";
import Input from "@/Components/Input";

function LabelledInput(
    {
        name,
        label,
        lClassName,
        className,
        type = 'text',
        value,
        autoComplete,
        required,
        isFocused,
        handleChange
    }) {
    return (
        <div>
            <Label forInput={name} className={lClassName} value={label ? label : name} />

            <Input
                type={type}
                name={name}
                autoComplete={autoComplete}
                value={value}
                required={required}
                isFocused={isFocused}
                handleChange={handleChange}
                className={className}
            />
        </div>
    );
}

export default LabelledInput;
