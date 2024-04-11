import styled from 'styled-components';

const Wrapper = styled.section`
    .container{
        display: grid;
        grid-template-columns: 1fr;
        grid-row: auto;
        gap:2.2rem;
      
    }
    .image-input{
        display: block;
    }
    button{
        display: block;
        width: 100%;
        margin-top: 2.8rem;
        padding: .6rem;
    }
    @media (min-width: 960px) {
    .container {
      grid-template-columns: 1fr 1fr;
      gap: 2rem;
      
    }
    .image-input{
        width: 100%;
    }
    button{
        display: block;
        width: 100%;
        margin-top: 2.8rem;
        padding: .6rem;
    }
  }
  
`;

export default Wrapper;