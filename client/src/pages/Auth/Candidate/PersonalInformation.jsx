import { FormRow } from "../../../components";

const PersonalInformation = () => {
  return (
    <>
      <FormRow
        type="text"
        name="occupation"
        labelText="occupation"
        withLabel={true}
      />
      <div className="formRow">
        <FormRow
          type="text"
          name="address"
          labelText="address"
          withLabel={true}
        />
      </div>
      
      <div className="row-formRow">
        <FormRow type="text" name="city" labelText="City" withLabel={true} />
        <FormRow
          type="text"
          name="country"
          labelText="Country"
          withLabel={true}
        />
        <FormRow
          type="text"
          name="poBox"
          labelText="P.O Box"
          withLabel={true}
        />
      </div>

      <FormRow type="file" id="img" name="img" accept="image/*" labelText='ID / Passport' withLabel={true}/>

      {/* <div className="phoneCodeRow">
        <FormRow type="tel" name="phoneCode" labelText="phone code" withLabel />
        <FormRow
          type="tel"
          name="phoneCode"
          labelText="phone number"
          withLabel
        />
      </div>
      <FormRow
          type="text"
          name="website"
          labelText="website"
          withLabel
        /> */}
    </>
  );
};

export default PersonalInformation;
