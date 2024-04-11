
import { ProfileWrapper, Photo, Name, Details, DetailItem } from './../../assets/wrappers/Profile';
import photoPerson from '../../assets/images/pers.jpg'

const PersonelCertificateProfile = () => {
    const profileData = {
        photoUrl: photoPerson,
        name: 'John Doe',
        birthDate: 'January 1, 1990',
        country: 'Country',
        city: 'City',
        email: 'john.doe@example.com',
        phone: '+1 123 456 7890',
        address: '123 Main Street, Cityville',
      };
      return (
        <ProfileWrapper>
        <Photo>
          <img src={profileData.photoUrl} alt="Profile" />
        </Photo>
        <Name>{profileData.name}</Name>
        <Details>
          <DetailItem>
            <strong>Birth Date:</strong> {profileData.birthDate}
          </DetailItem>
          <DetailItem>
            <strong>Country:</strong> {profileData.country}
          </DetailItem>
          <DetailItem>
            <strong>City:</strong> {profileData.city}
          </DetailItem>
          <DetailItem>
            <strong>Email:</strong> {profileData.email}
          </DetailItem>
          <DetailItem>
            <strong>Phone:</strong> {profileData.phone}
          </DetailItem>
          <DetailItem>
            <strong>Address:</strong> {profileData.address}
          </DetailItem>
        </Details>
      </ProfileWrapper>
      )
}

export default PersonelCertificateProfile