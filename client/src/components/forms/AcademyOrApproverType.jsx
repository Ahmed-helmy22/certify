import { Form } from "react-router-dom";
import Wrapper from "../../assets/wrappers/checkBoxWrapper";
import { ACADEMY_PROVIDER_TYPE } from "../../utils/constants";
import FormRowSelect from "../FormRowSelect";

const AcademyOrApproverType = ({ formData, setFormData }) => {
  return (
    <Wrapper>
      <FormRowSelect
        labelText="Please Choose the account Type"
        name="providerType"
        list={[...Object.values(ACADEMY_PROVIDER_TYPE)]}
        className="dropListAcademy"
        classNameLabel="labelStyle"
        onChange={(event) =>
          setFormData({ ...formData, providerType: event.target.value })
        }
      />
    </Wrapper>
  );
};

export default AcademyOrApproverType;
