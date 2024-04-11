import styled from 'styled-components';

const Wrapper = styled.section`
  margin-top: 1.2rem;
  h2 {
    text-transform: none;
  }
  & > h5 {
    font-weight: 700;
    margin-bottom: 1.5rem;
  }

  .navList{
    padding-top: 1.2rem;
   
    .nav-links{
        display: flex;
        gap: 2.4rem;
        border-bottom: 1px var(--text-secondary-color) solid; 
        padding-bottom: 1.2rem;
    }
    .nav-link {
      display: flex;
      align-items: center;
      color: var(--text-secondary-color);
      padding: 1rem 0;
      padding-left: 1.2rem;
      padding-right: 1.2rem;
      text-transform: capitalize;
      transition: padding-left 0.3s ease-in-out;
      cursor: pointer;

      .active {
      color: var(--primary-500);
     }

    }
   
    .nav-link:hover {
      color: var(--primary-500);
      transition: var(--transition);
      border-bottom: solid 1px var(--primary-500);
    }
  
     
    }
  
    .active {
      color: var(--primary-500);
     }
 .content{
    padding-top: 2.4rem;
 }
`;
export default Wrapper;
