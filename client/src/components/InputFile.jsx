import Wrapper from "../assets/wrappers/InputFileWrapper"
import 'react-phone-number-input/style.css'
import PhoneInput from 'react-phone-number-input'
import { useState } from "react"

const InputFile = () => {
    
    const [value, setValue] = useState();
    
    return (
      <PhoneInput
        placeholder="Enter phone number"
        value={value}
        onChange={setValue}
        className="input input-form"/>
    )
}

export default InputFile