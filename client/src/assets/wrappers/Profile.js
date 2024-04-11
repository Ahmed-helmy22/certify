import styled from 'styled-components';
export const ProfileWrapper = styled.section`
  display: grid;
  grid-template-areas:
    'photo name'
    'details details';
  grid-template-columns: 1fr 2fr;
  gap: 1rem;
  max-width: 800px;
  margin: 0 auto;
  padding: 2rem;
  border: 2px solid #ccc;
  border-radius: 10px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);

  @media (min-width: 768px) {
    grid-template-columns: 1fr 3fr;
  }
`;

export const Photo = styled.div`
  grid-area: photo;
  text-align: center;

  img {
    width: 150px;
    height: 150px;
    border-radius: 50%;
    object-fit: cover;
    border: 4px solid #fff;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
    
  }
`;

export const Name = styled.div`
  grid-area: name;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.8rem;
  font-weight: bold;
  margin-bottom: 10px;
  
`;

export const Details = styled.div`
  grid-area: details;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1rem;
  margin-top: 10px;
  
`;

export const DetailItem = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #f5f5f5;
  padding: 10px;
  border-radius: 8px;
  color: var(--primary-900);

  strong {
    font-weight: bold;
    margin-bottom: 5px;
    color: var(--primary-500);
    
  }

  span {
    color: #555;
    color: var(--text-secondary-color);
    
  }
`;

