import { FormRow } from "../../../components";

const SignupCandidate = () => {
  return (
    <>
      <div className="row-formRow">
        <FormRow
          type="text"
          name="name"
          labelText="name"
          defaultValue="ahmed"
          withLabel={true}
        />
        <FormRow
          type="text"
          name="middleName"
          labelText="middle name"
          defaultValue="hassan"
          withLabel={true}
        />
        <FormRow
          type="text"
          name="familyName"
          labelText="family name"
          defaultValue="ahmed"
          withLabel={true}
        />
      </div>
      <div className="row-formRow">
        <FormRow
          type="email"
          name="email"
          labelText="Email Address"
          withLabel={true}
        />
        <FormRow
          type="email"
          name="confirmEmail"
          labelText="Confirm Email Address"
          withLabel={true}
        />
      </div>
      <div className="row-formRow">
        <FormRow
          type="date"
          name="dateOfBirth"
          labelText="Date Of birth"
          withLabel={true}
        />

        <div className="genderInput">
          <span>Gender</span>
          <div>
            <FormRow type="radio" name="gender" labelText="male" withLabel />
          </div>
          <div>
            <FormRow type="radio" name="gender" labelText="female" withLabel />
          </div>
        </div>
      </div>
      <div className="phoneCodeRow">
        <FormRow type="tel" name="phoneCode" labelText="phone code" withLabel />
        <FormRow
          type="tel"
          name="phoneCode"
          labelText="phone number"
          withLabel
        />
      </div>
    </>
  );
};

export default SignupCandidate;
