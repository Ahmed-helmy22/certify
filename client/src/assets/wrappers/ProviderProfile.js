import styled from 'styled-components';

// const ProfileWrapper = styled.section`
// .content {
//   margin: auto;
//     width: 80%;
//     height: 800px;
//     box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
//     display: grid;
//     align-items: center;
//     justify-items: center;
//     padding: 1.2rem;
//     grid-template-columns: 1fr 2fr 2fr;
//     grid-template-rows: 1fr 4fr 0.5fr;
//     grid-template-areas:
//       "header   section    section"
//       "header     main    main"
//       "header   footer  .";

//     header {
//       border-radius: 50%;
//       img{
//         width: 200px;
//         height: 200px;
//         border-radius: 50%;
//         object-fit: cover;
//         border: 4px solid rgba(0, 0, 0, 0.1);
//         box-shadow: 0 0 10px rgba(0, 0, 0, 0.4);
//       }
//     }

//     section {
//       display: flex;
//   flex-direction: column;
//   box-shadow: 1px 0px 0px 0px rgba(0, 0, 0, 0.1);
//   background-color:  var(--background-secondary-color);
//   padding:1.2rem 2.4rem ;
//   border-radius: 8px;
  
//   color: var(--primary-900);

//   strong {
//     font-weight: bold;
//     margin-bottom: 5px;
//     color: var(--primary-500);
    
//   }
//     }

//     main {
//       background-color: yellow;
//       width: 100px;
//       height: 100px;
//     }

//     footer {
//       background-color: green;
//     }
//   }


// `

export const PageContainer = styled.div`
  max-width: fit-content;
  margin: 0 auto;
`;

export const HeaderSection = styled.div`
  text-align: center;
`;

export const Logo = styled.img`
  max-width: 100px;
`;

export const CompanyName = styled.h1`
  margin-top: 10px;
`;

export const MainSection = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  margin-top: 20px;
  gap: 2.4rem;
  @media (min-width: 960px) {
    grid-template-columns: 1fr 2fr;
  }

`;

export const LeftColumn = styled.div`
 display: flex;
 flex-direction: column;
  padding: 10px;
  gap: 1.2rem;
`;

export const RightColumn = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.2rem;
`;

export const ContactUsSection = styled.div`
  margin-top: 20px;
  display: flex; 
  gap: 1.2rem;
`;

export const ContactInfo = styled.div`
  margin-top: 10px;
`;

