import React from "react";

const Select = ({ label, name, options, placeholder, defaultValue }) => {

  return (
    <div className="flex flex-col">
      <label htmlFor={name} className="font-semibold text-md">
        {label}
      </label>
      <select
        defaultValue={defaultValue}
        className="p-2 rounded-md shadow-md ring-1 ring-gray-200 w-full px-3 my-3"
        id={name}
        placeholder={placeholder}
      >
        {options.map((option, id) => (
          <option key={id} value={option.name}>
            {option.name}
          </option>
        ))}
      </select>
    </div>
  );
};

export default Select;