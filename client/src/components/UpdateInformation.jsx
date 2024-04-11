import React from "react";
import { FormRow } from "../components";
import Wrapper from "../assets/wrappers/UpdateInformationWrapper";
import { Form } from "react-router-dom";

const UpdateInformation = () => {
  return (
    <Wrapper>
      <Form method="post" className="container" encType="multipart/form-data">
        <div>
          <FormRow
            name="Phone no"
            type="text"
            labelText="Phone no"
            withLabel={true}
          />
          <FormRow
            name="regNr"
            type="text"
            labelText="Reg. Nr"
            withLabel={true}
          />
          <FormRow
            name="address"
            type="text"
            labelText="address"
            withLabel={true}
          />
          <FormRow
            name="qualifications"
            type="text"
            labelText="qualifications"
            withLabel={true}
          />
          <FormRow
            name="profession"
            type="text"
            labelText="profession"
            withLabel={true}
          />
        </div>
        <div>
          <FormRow name="city" type="text" labelText="city" withLabel={true} />
          <FormRow
            name="country"
            type="text"
            labelText="country"
            withLabel={true}
          />
          <FormRow
            name="poBox"
            type="text"
            labelText="PO.Box"
            withLabel={true}
          />

          <div className="form-row formRow2">
            <label htmlFor="avatar" className="form-label">
              select and image file ( max 0.5 MB )
            </label>
            <input
              type="file"
              name="avatar"
              id="avatar"
              className="form-input image-input"
              accept="image/*"
            />

            <button className="btn ">Submit</button>
          </div>
        </div>
      </Form>
    </Wrapper>
  );
};

export default UpdateInformation;
