
export const FormSearchSelect = ({ name, labelText, list , value ,onChange , className , classNameLabel}) => {
  
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
        {list?.data?.map((item) => {
          return (
            <option value={item._id} key={item._id} style={{paddingTop: '1.5rem'}}>
     
              {item.title}
            </option>
          );
        })}
      </select>
    </div>
  );
};

export default FormSearchSelect;

