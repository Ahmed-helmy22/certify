import FormRow from "../FormRow";

const AcademyResponsibleInformation = ({ formData, setFormData }) => {
  
  const handleFileChange = (property) => (file) => {
    setFormData({
      ...formData,
      providerAdminInfo: {
        ...formData.providerAdminInfo,
        [property]: file,
      },
    });
  };
  return (
    <div>
      <FormRow
        type="file"
        name="adminProfilePhoto"
        accept="image/*"
        labelText="Personal Image"
        withLabel={true}
        onChange={(e) =>
          handleFileChange("adminProfilePhoto")(e.target.files[0])
        }
      />

      <div className="row-formRow">
        <FormRow
          type="text"
          name="firstName"
          labelText="first Name"
          withLabel={true}
          value={formData.providerAdminInfo.firstName}
          onChange={(event) =>
            setFormData({
              ...formData,
              providerAdminInfo: {
                ...formData.providerAdminInfo,
                firstName: event.target.value,
              },
            })
          }
        />
        <FormRow
          type="text"
          name="middleName"
          labelText="middle Name "
          withLabel={true}
          value={formData.providerAdminInfo.middleName}
          onChange={(event) =>
            setFormData({
              ...formData,
              providerAdminInfo: {
                ...formData.providerAdminInfo,
                middleName: event.target.value,
              },
            })
          }
        />
        <FormRow
          type="text"
          name="familyName"
          labelText="family name"
          withLabel={true}
          value={formData.providerAdminInfo.familyName}
          onChange={(event) =>
            setFormData({
              ...formData,
              providerAdminInfo: {
                ...formData.providerAdminInfo,
                familyName: event.target.value,
              },
            })
          }
        />
      </div>

      <div className="row-formRow">
        <div className="genderInput">
          <span>Gender</span>
          <div>
            <FormRow
              type="radio"
              name="adminGender"
              labelText="male"
              withLabel
              value="male"
              onChange={(event) =>
                setFormData({
                  ...formData,
                  providerAdminInfo: {
                    ...formData.providerAdminInfo,
                    adminGender: event.target.value,
                  },
                })
              }
            />
          </div>
          <div>
            <FormRow
              type="radio"
              name="adminGender"
              labelText="female"
              withLabel
              value="female"
              onChange={(event) =>
                setFormData({
                  ...formData,
                  providerAdminInfo: {
                    ...formData.providerAdminInfo,
                    adminGender: event.target.value,
                  },
                })
              }
            />
          </div>
        </div>

        <FormRow
          type="text"
          name="adminRole"
          labelText="role"
          withLabel={true}
          value={formData.providerAdminInfo.adminRole}
          onChange={(event) =>
            setFormData({
              ...formData,
              providerAdminInfo: {
                ...formData.providerAdminInfo,
                adminRole: event.target.value,
              },
            })
          }
        />
      </div>
      <div className="row-formRow">
        <FormRow
          type="date"
          name="DOBirth"
          labelText="Date Of birth"
          withLabel={true}
          value={formData.providerAdminInfo.DOBirth}
          onChange={(event) =>
            setFormData({
              ...formData,
              providerAdminInfo: {
                ...formData.providerAdminInfo,
                DOBirth: event.target.value,
              },
            })
          }
        />
        <div className="">
          <FormRow
            type="text"
            name="adminPhoneNumber"
            labelText="phone number"
            withLabel
            value={formData.providerAdminInfo.adminPhoneNumber}
            onChange={(event) =>
              setFormData({
                ...formData,
                providerAdminInfo: {
                  ...formData.providerAdminInfo,
                  adminPhoneNumber: event.target.value,
                },
              })
            }
          />
        </div>
      </div>
    </div>
  );
};

export default AcademyResponsibleInformation;
