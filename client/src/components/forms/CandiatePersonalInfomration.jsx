import { FormRow } from "../../components";
import FromContainer from "./FromContainer";
import avatart from '../../assets/images/avatar-1.jpg';

const CandiatePersonalInfomration = ({
  image,
  firstName,
  middleName,
  lastName,
  age,
  gender,
  phoneCode,
  phoneNumber,
  occupation,
}) => {


  return (
    <FromContainer title="Candidate registration">    
        <div className="row-formRow">
        <FormRow
          type="text"
          name="firstName"
          labelText="first Name"
          value={firstName}
          withLabel={true}
        />
        <FormRow
          type="text"
          name="middleName"
          labelText="middle name"
          value={middleName}
          withLabel={true}
        />
        <FormRow
          type="text"
          name="lastName"
          labelText="family name"
          value={lastName}
          withLabel={true}
        />
      </div>

      <div className="row-formRow">
        <FormRow
          type="date"
          name="age"
          value={age}
          labelText="Date Of birth"
          withLabel={true}
        />

        <div className="genderInput">
          <span>Gender</span>
          <div>
            <FormRow
              type="radio"
              name="gender"
              labelText="male"
              withLabel
              value={gender}
            />
          </div>
          <div>
            <FormRow
              type="radio"
              name="gender"
              labelText="female"
              withLabel
              value={gender}
            />
          </div>
        </div>
      </div>
      <div className="phoneCodeRow">
        <FormRow
          type="tel"
          name="phoneCode"
          labelText="phone code"
          withLabel
          value={phoneCode}
        />
        <FormRow
          type="tel"
          name="phoneNumber"
          labelText="phone number"
          withLabel
          value={phoneNumber}
        />
      </div>
      <FormRow
        type="text"
        name="occupation"
        labelText="occupation"
        withLabel={true}
        value={occupation}
      />
    </FromContainer>
  );
};

export default CandiatePersonalInfomration;
