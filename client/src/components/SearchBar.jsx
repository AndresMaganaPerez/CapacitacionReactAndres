import React from "react";  

const SearchBar = ({type, label, placeholder}) => { 
    return (
        <div className='m-4 w-full'>
            <label className="font-semibold text-md">{ label }</label>
            <div className="flex border border-blue-200 rounded-xl my-3">
                <input className='p-2 rounded-md shadow-md ring-1 ring-gray-200 w-full px-3' type={ type } placeholder={ placeholder }/>
            </div>
        </div>
    )
}

export default SearchBar;