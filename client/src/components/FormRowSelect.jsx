import React from "react";

export const FormRowSelect = ({ name, labelText, list , value ,onChange , className , classNameLabel}) => {
  console.log(list,'hhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhh');
  return (
    <div className="form-row">
      <label htmlFor={name} className={classNameLabel || "form-label"}>
        {labelText || name}
      </label>
      <select
        name={name}
        id={name}
        className={className || "form-select"}
        onChange={onChange}
        value={value}
      
      >
        {list.map((itemValue) => {
          return (
            <option value={itemValue} key={itemValue} style={{paddingTop: '1.5rem'}}>
     
              {itemValue}
            </option>
          );
        })}
      </select>
    </div>
  );
};

export default FormRowSelect;