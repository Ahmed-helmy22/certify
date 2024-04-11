import styled from 'styled-components';


const Wrapper = styled.section`
    nav {
    width: var(--fluid-width);
    max-width: var(--max-width);
    margin: 0 auto;
    height: var(--nav-height);
    display: flex;
    align-items: center;
  }
 
  .page {
    min-height: calc(100vh - var(--nav-height));
    display: grid;
    grid-template-columns: 1fr;
    width: 100%;
    align-items: center;  
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
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    text-align: center;
    width: 80%;
    gap: 1rem;
  }
  .register-link {
    margin-right: 1rem;
  }
  .main-img {
    display: none;
  }
  .btn {
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 0.75rem 1rem;
  }

`;


export default Wrapper;