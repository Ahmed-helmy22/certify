import styled from 'styled-components';

const Wrapper = styled.section`
  overflow-y: hidden;
  nav {
    width: var(--fluid-width);
    max-width: var(--max-width);
    margin: 0 auto;
    height: 50px;
    display: flex;
    align-items: center;
  }
  .page {
    min-height: calc(100vh - var(--nav-height));
    display: flex;
    flex-direction: column;
    align-items: center;
    gap:2rem;
    margin-top: 4rem;  
    /* grid-template-columns:1fr; */
  }
  h1 {
    font-weight: 700;
    span {
      color: var(--primary-500);
    }
    margin-bottom: 1.5rem;
  }
  p {
    line-height: 2;
    color: var(--text-secondary-color);
    margin-bottom: 1.5rem;
    max-width: 35em;
  }
  .btn-link{
    display: flex;
    flex-direction: column;
    text-align: center;
    width: 100%;
    gap: 1rem;
  }
  .register-link {
    display: flex;
    width: 10;
    justify-content: space-evenly;
    gap: 2rem;
  }
  .btn {
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 0.75rem 1rem;
  }

  .cerificates-btn{
    background-color: var(--background-secondary-color);
  }
  
  .checkCertifcate{
    height: 20rem;
    display: flex;
    align-items: center;
    justify-content: center;
    overflow: hidden;
   
  }
  @media (min-width: 992px) {
    .page {
      display: grid;
      grid-template-columns: 600px 600px;
      margin-top: 1rem;
      column-gap: 5rem;
    }

    .checkCertifcate{
    /* height: 2.4rem; */
  }
  }
`;
export default Wrapper;
