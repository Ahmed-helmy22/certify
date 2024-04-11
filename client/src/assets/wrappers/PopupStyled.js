import styled from 'styled-components';

const Wrapper = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100vh;
    background-color : var(--popupBackground);
    display: flex;
    gap: 1.2rem;
    justify-content: center;
    align-items: center;
    .popup-inner{
        position : relative;
        padding: 2.2rem;
        width: 100%;
        max-width: fit-content;
        background-color: var(--background-color);
        border-radius: var(--border-radius);
        display: flex;
        gap: 1.2rem;
        flex-direction: column;

        .close-btn{
            position: absolute;
            top:1.2rem;
            right: 1.2rem;
        }
        .popup-header{
            display: flex;
            justify-content: space-between;
        }
    }
    .action-btn{
        display: flex;
        justify-content: space-between;
        gap: 1.2rem;
        button{
            font-size: 1rem;
            padding: 0.8rem ;
        }
    }
    .customCloseButton{
        cursor: pointer;
        font-size: 2.2rem;
        color: red;
        font-weight: 600;
    }
`;

export default Wrapper;