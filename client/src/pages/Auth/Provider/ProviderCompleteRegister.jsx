import { FormRow } from "../../../components";

const ProviderCompleteRegister = () => {
  return (
    <>
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
          type="password"
          name="password"
          labelText="Password"
          withLabel={true}
        />
        <FormRow
          type="password"
          name="confirmPassword"
          labelText="Confirm Password"
          withLabel={true}
        />
      </div>
     

     
    </>
  );
};

export default ProviderCompleteRegister;
