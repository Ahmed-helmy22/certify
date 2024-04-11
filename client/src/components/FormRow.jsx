// import React from "react";

// const FormRow = ({ type, name, labelText, withLabel , placeHolder , className , value , onChange}) => {
//   const inputValue = value !== undefined ? value : '';
//   return (
//     <div className="form-row">
//       {withLabel && (
//         <label htmlFor={name} className="form-label">
//           {labelText || name}
//         </label>
//       )}

//       {type === 'file' ? (
//         <input
//           type={type}
//           id={name}
//           name={name}
//           className={className || 'form-input'}
//           placeholder={placeHolder}
//           // required
//           // onChange={(e) => onChange(e.target.files[0])}  // Handle file change here
//         />
//       ) : (
//         <input
//           type={type}
//           id={name}
//           name={name}
//           value={value}
//           className={className || 'form-input'}
//           placeholder={placeHolder}
//           // required
//           // onChange={onChange}
//         />
//       )}
//       {/* <input
//         type={type}
//         id={name}
//         name={name}
//         value={inputValue}
//         className={ className || "form-input" }
//         placeholder={placeHolder}
//         required
//         onChange={onChange}
//       /> */}
//     </div>
//   );
// };

// export default FormRow;


const FormRow = ({type , name, labelText, defaultValue , onChange , value , placeholder , required}) => {
  const inputValue = value !== undefined ? value : '';

  return (

    <div className="form-row">
      <label htmlFor={name} className="form-label">
        {labelText || name}
      </label>
      <input
        type={type}
        id={name}
        // value={inputValue}
        name={name}
        className="form-input"
        defaultValue={defaultValue || ''}
        onChange={onChange}
        placeholder={placeholder|| ""}
        required={required || ''}
      />
    </div>
  );
};

export default FormRow;
