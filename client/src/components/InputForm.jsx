import React from "react";

const InputForm = ({label, name, type, placeholder, defaultValue}) => {
    return (
        <div className="flex flex-col gap-2 my-3">
            <label htmlFor={ name } className="font-semibold text-md">{ label }</label>
            <input 
                defaultValue={ defaultValue } 
                className="p-1 rounded-md drop-shadow-md ring-1 ring-gray-200 px-3"
                type={ type }
                id={ name }
                placeholder={ placeholder }
                />
        </div>
    )
}

export default InputForm;