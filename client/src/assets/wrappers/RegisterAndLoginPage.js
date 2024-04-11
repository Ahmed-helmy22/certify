import styled from 'styled-components';

const Wrapper = styled.section`
  min-height: 100vh;
  display: grid;
  align-items: center;
  
  .logo {
    display: block;
    margin: 0 auto;
    margin-bottom: 1.38rem;
  }
  
  .form {
    /* max-width: 60%; */
    border-top: 5px solid var(--primary-500);
    display: grid;
    gap: 1.2rem;
    
  }
  .photoRegistration{
 
    display: flex;
    align-items: center;
    justify-content: end;
    position: relative;

    input{
      width: 100px;
      height: 100px;   
      background-color : red;
    }
    
   
  }
  h4 {
    text-align: center;
    margin-bottom: 1.38rem;
  }
  p {
    margin-top: 1rem;
    text-align: center;
    line-height: 1.5;
  }
  .btn {
    margin-top: 1rem;
  }
  .member-btn {
    color: var(--primary-500);
    letter-spacing: var(--letter-spacing);
    margin-left: 0.25rem;
  }
  .register-link{
    display: grid;
    grid-template-columns: 1fr;

    div{
      display: grid;
      grid-template-columns: 2fr 1fr;

      .btn {
        display: flex;
        align-items: center;
        justify-content: center;
        padding: 0.75rem 1rem;
      } 
    }
  }

  .genderInput{
    display: flex;
    gap: 40px;
    align-items: center;
    justify-content: center;
  }
  
  
  .row-checkLicense{
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 1.2rem;
    p .licenceAgreement{
     font-style: italic;
     color: var(--primary-500);
     font-weight: 800;
     text-decoration: underline;
     
    }
  }

  .row-formRow{
      display: grid;
      grid-template-columns: 1fr 1fr auto;
      gap: 1rem;
     
    }
    .phoneCodeRow{
        display: grid;
        grid-template-columns: 100px 1fr;
        gap: 1.2rem;
      }

  .page-btn{
    display: flex;
    justify-content: space-between;
    align-items:center;
    align-content: center;
    gap: 1.2rem;
    .left-side{
      display: flex;
      justify-content: space-around;
      align-items: center;
      gap: 1.2rem;
    }
  }

  .kn-file-upload input.is-file {
  border: 1px dashed blue;
  background-color: #f8f8f8;
  cursor: pointer;
  padding-bottom: 100px;
  padding-left: 90px;
  padding-right: 40px;
  padding-top: 24px;
  width: 300px;
}
.kn-file-upload input.is-file:before {
  content: "Drop file here or click to upload";
  font-size: 1.1em;
  font-weight: 500;
  color: black;
  margin-bottom: 20px;
  margin-left: -56px;
}
/* Removes "no file uploaded" text because otherwise it stays on screen when the user drags-and-drops a file */
input[type="file"] {
  color: transparent;
}

  @media (max-width: 860px) {
    .form {
      /* max-width: 80%; */
    }
    .row-formRow{
      grid-template-columns: 1fr;     
    }
  }
  
`;
export default Wrapper;
