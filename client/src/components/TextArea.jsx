import React from "react";

const TextArea = ({label, name, placeholder, defaultValue}) => {
    return (
        <div className="flex flex-col gap-2 my-3">
            <label htmlFor={ name } className="font-semibold text-md">{ label }</label>
            <textarea 
                defaultValue={ defaultValue } 
                className="p-1 rounded-md drop-shadow-md ring-1 ring-gray-200 px-3 w-full h-20"
                id={ name }
                placeholder={ placeholder }
                />
        </div>
    )
}

export default TextArea;