import styled from 'styled-components';

const Wrapper = styled.section`
  border-radius: var(--border-radius);
  width: 100%;
  background: var(--background-secondary-color);
  padding: 1rem 2rem 1rem;
  /* .form-title {
    margin-bottom: 1rem;
  } */
  .form {
    margin: 0;
    border-radius: 0;
    box-shadow: none;
    padding: 0;
    max-width: 100%;
    width: 100%;
  }
  .form-row {
    margin-bottom: 0;
  }
  .form-center {
    display: grid;
    gap: 1rem;
    grid-template-columns: 1fr 1fr;
  }
  .form-coloumn{
    display: grid;
    justify-content: left;
    grid-template-columns: 1fr;
    gap: 1.2rem;
  }

  .form-btn {
    align-self: end;
    margin-top: 1rem;
    display: grid;
    place-items: center;
  }

 
  @media (min-width: 992px) {
    .form-coloumn{
    grid-template-columns: .5fr;
  
  }
    .form-center {
      grid-template-columns: 1fr 1fr;
      align-items: center;
      column-gap: 1rem;
    }
  }
  @media (min-width: 1120px) {
    .form-center {
      grid-template-columns: 1fr 1fr 1fr 1fr;
    }
  }
`;

export default Wrapper;
