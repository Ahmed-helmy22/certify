import styled from 'styled-components';

export const TableStyleWrapper = styled.div`
  width: 100%;
  margin-top: 2rem;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  .table-input{
    width: 30%;
    padding: .4rem;
    border-radius: .4rem;
    margin-bottom:1rem ;
  }
  .table{
    padding-top: 1rem;
    padding-bottom: 1rem;
    box-shadow: var(--shadow-1);
    display: flex;
    flex-direction: column;
    gap: 2rem;
    text-align: center;

  }
  
  .table-head .head-tr{
    display: flex;
    justify-content: space-between;
    text-align: center;
    align-items: center;

  }

  .table-body .table-tr{
    display: flex;
    justify-content: space-between;
    text-align: center;
    align-items: center;
  }
  .table-td{
    border: 1px solid red;
  }

  .table-btn{
    display: flex;
    gap: 2rem;
  }
`;


export default TableStyleWrapper;


