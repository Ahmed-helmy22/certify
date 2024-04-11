import React from 'react'
import { ProfileWrapper, Photo, Name, Details, DetailItem } from './../../assets/wrappers/Profile';
import photoPerson from '../../assets/images/pers.jpg'
import { toast } from 'react-toastify';
import customFetch from '../../utils/customFetch';
import { useLoaderData, useParams } from 'react-router-dom';
import Wrapper from "../../assets/wrappers/BadgeContainer";
import { useCandidateDataToAWardingContext } from './ProviderAwardingBadge';




const ProviderAwardingBadgeProfile = () => {
  const { data }  = useCandidateDataToAWardingContext()

  const profileData = {
    photoUrl: data.candidate.candidateProfilePhoto,
    name: data.candidate.firstName + " " +  data.candidate.familyName,
    birthDate: data.candidate.DOBirth,
    country: data.candidate.country,
    city: data.candidate.city,
    email: data.candidate.email,
    phone: data.candidate.phoneNumber,
    address: data.candidate.address + "-" + data.candidate.city + " " + data.candidate.country,
  };

  if (!data ) {
    return (
      <Wrapper>
        <h2>No Badges to display....</h2>
      </Wrapper>
    );
  }
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

export default ProviderAwardingBadgeProfile