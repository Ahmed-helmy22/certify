import styled from 'styled-components';

const Wrapper = styled.div`
  display: grid;
  justify-content: center;
  text-align: center;
  align-items: center;
  
  .badge-photo{
    width: 150px;
    height: 150px;
  }
  .badge-text {
    text-transform: capitalize;
    letter-spacing: var(--letter-spacing);
  }
  
`;
export default Wrapper;
