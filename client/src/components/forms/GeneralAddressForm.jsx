import FormRow from "../FormRow";

const GeneralAddressForm = ({ formData, setFormData }) => {
  const handleFileChange = (property) => (event) => {
    const file = event.target.files[0];
    setFormData({
      ...formData,
      providerAdminInfo: {
        ...formData.providerAdminInfo,
        [property]: file,
      },
    });
  };
  return (
    <>
      <div className="row-formRow">
        <FormRow
          type="text"
          name="adminAddress"
          labelText="address"
          withLabel={true}
          value={formData.providerAdminInfo.adminAddress}
          onChange={(event) =>
            setFormData({
              ...formData,
              providerAdminInfo: {
                ...formData.providerAdminInfo,
                adminAddress: event.target.value,
              },
            })
          }
        />
        <FormRow
          type="text"
          name="adminCountry"
          labelText="Country"
          withLabel={true}
          value={formData.providerAdminInfo.adminCountry}
          onChange={(event) =>
            setFormData({
              ...formData,
              providerAdminInfo: {
                ...formData.providerAdminInfo,
                adminCountry: event.target.value,
              },
            })
          }
        />
        <FormRow
          type="text"
          name="adminCity"
          labelText="city"
          withLabel={true}
          value={formData.providerAdminInfo.adminCity}
          onChange={(event) =>
            setFormData({
              ...formData,
              providerAdminInfo: {
                ...formData.providerAdminInfo,
                adminCity: event.target.value,
              },
            })
          }
        />
        <FormRow
          type="text"
          name="adminPOBox"
          labelText="P.O Box"
          withLabel={true}
          value={formData.providerAdminInfo.adminPOBox}
          onChange={(event) =>
            setFormData({
              ...formData,
              providerAdminInfo: {
                ...formData.providerAdminInfo,
                adminPOBox: event.target.value,
              },
            })
          }
        />
        <FormRow
          type="text"
          name="adminPassportNumber"
          labelText="passport number"
          withLabel={true}
          value={formData.providerAdminInfo.adminPassportNumber}
          onChange={(event) =>
            setFormData({
              ...formData,
              providerAdminInfo: {
                ...formData.providerAdminInfo,
                adminPassportNumber: event.target.value,
              },
            })
          }
        />
      </div>
      
      <FormRow
        type="file"
        name="adminPassportPhoto"
        accept="image/*"
        labelText="Passport"
        withLabel={true}
        onChange={(e) =>
          handleFileChange("adminPassportPhoto")(e.target.files[0])
        }
      />
      <FormRow
        type="file"
        name="adminVerificationPhoto"
        accept="image/*"
        labelText="Verification Photo"
        withLabel={true}
        onChange={(e) =>
          handleFileChange("adminVerificationPhoto")(e.target.files[0])
        }
      />
    </>
  );
};

export default GeneralAddressForm;
