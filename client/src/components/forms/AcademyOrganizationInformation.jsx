import FormRow from "../FormRow";

const AcademyOrganizationInformation = ({ formData, setFormData }) => {
  
  const handleFileChange = (property) => (event) => {
    const file = event.target.files[0];
    setFormData({
      ...formData,
      [property]: file,
    });
  };
  return (
    <>
      <div className="row-formRow">
        <FormRow
          name="logo"
          type="file"
          withLabel={true}
          value={formData.logo === null ? '' : formData.logo}
          onChange={handleFileChange('logo')}
        />
        <FormRow
          type="text"
          name="OrganizationName"
          labelText="organizattion name"
          withLabel={true}
          value={formData.OrganizationName}
          onChange={(event) =>
            setFormData({ ...formData, OrganizationName: event.target.value })
          }
        />
      </div>
      <div className="row-formRow">
        <FormRow
          type="text"
          name="address"
          labelText="organization Address" 
          withLabel={true}
          value={formData.address}
          onChange={(event) =>
            setFormData({
              ...formData,
              address: event.target.value,
            })
          }
        />
        <FormRow
          type="text"
          name="city"
          labelText="organization City"
          default="organizattion City"
          withLabel={true}
          value={formData.city}
          onChange={(event) =>
            setFormData({ ...formData, city: event.target.value })
          }
        />
        
      </div>

      <div className="row-formRow">
      <FormRow
          type="text"
          name="country"
          labelText="organization Country"
          withLabel={true}
          value={formData.country}
          onChange={(event) =>
            setFormData({
              ...formData,
              country: event.target.value,
            })
          }
        />
        <FormRow
          type="text"
          name="webSite"
          labelText="webSite"
          withLabel={true}
          value={formData.webSite}
          onChange={(event) =>
            setFormData({ ...formData, webSite: event.target.value })
          }
        />
        <div className="phoneCodeRow">
          <FormRow
            type="text"
            name="POBox"
            labelText="phone code"
            withLabel
            value={formData.POBox}
            onChange={(event) =>
              setFormData({ ...formData, POBox: event.target.value })
            }
          />
        </div>
      </div>
    </>
  );
};

export default AcademyOrganizationInformation;
