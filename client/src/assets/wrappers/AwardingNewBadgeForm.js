import styled from 'styled-components';

const Wrapper = styled.section`
    .container{
        display: grid;
        grid-template-columns: 1fr;
        gap:2.4rem;
    }
    .leftContent{
        display: flex;
        flex-direction: column;
        gap: 2.4rem;
        
        textarea{
            display: flex;
            justify-content: center;
            align-items: center;
            text-align: center;
            vertical-align: middle;
            
            ::placeholder{
               text-align: center;
               font-size: 1.2rem;
               font-weight: 700;
               font-style: oblique;
            }
        }
    }

    @media (min-width: 990px) {
    .container {
      grid-template-columns: 1fr 1fr;
      gap: 2rem;
    }
  }
  
`;

export default Wrapper;