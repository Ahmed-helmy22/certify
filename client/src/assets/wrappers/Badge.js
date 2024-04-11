import styled from 'styled-components';

const Wrapper = styled.section`
    display: flex;
    flex-direction: column;
    .heading{
      text-align: left;
      padding-left: 1rem;
      border-bottom : solid 2px var(--text-color) ;
      padding-bottom: 1rem;
      width: fit-content;
    }
   .content{
    display: grid;
    justify-content:center;
    grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr;
    gap: 2.2rem;
    padding-bottom: 2.2rem;
   }
    .badges{
      box-shadow: var(--shadow-2);
      img{
        border-radius: 50%;
      }
  }
  .badgescontent{
    display: flex;
    flex-direction: column;
    padding-bottom: 1.2rem;
  }
  border-radius: var(--border-radius);
  display: flex;
  text-align: center;
  box-shadow: var(--shadow-2);

  hr{
    margin-top: .8rem;
    margin-bottom: .8rem;
    height: .2rem;
    border: none;
    border-radius: .5rem;
  }
  @media (max-width: 1200px){
    .content{
      grid-template-columns: 1fr 1fr 1fr auto;
    }
  }

  @media (max-width: 990px){
    .content{
      grid-template-columns: 1fr 1fr auto;
    }
  }

  @media (max-width: 690px){
    .content{
      grid-template-columns: 1fr auto;
    }
  }

`;

export default Wrapper;
