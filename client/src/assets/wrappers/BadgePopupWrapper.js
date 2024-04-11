import styled from 'styled-components';

const Wrapper = styled.section`
   
    height: 300px;
    
    .badges-popup-list{
        display: flex;
        gap: 1.2rem;
        overflow-x: auto;
        padding-bottom: 1.2rem;
        .badg-item{
            width: 200px;
            padding: 0.5rem;
            text-align: center;
            hr{
    margin-top: 1.2rem;
    margin-bottom: 1.2rem;
    height: .2rem;
    border: none;
    border-radius: .5rem;
    background-color: red;
  }
        }
        img{
            width: 200px;
            height: 200px;
        }
        
  
    }
    .badges-popup-list{
   

 }

`;

export default Wrapper;
