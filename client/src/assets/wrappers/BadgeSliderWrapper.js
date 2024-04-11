import styled from 'styled-components';

const Wrapper = styled.div`
  height: 300px;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;

  .slider-container {
    display: flex;
    align-items: center; /* Center items vertically */
    justify-content: space-evenly;
    overflow-x: scroll;
    scrollbar-width: none;
    gap: 1.4rem; /* Gap between images */
  }

  .slider-container::-webkit-scrollbar {
    display: none;
  }

  .slider-card {
    flex: 0 0 auto; /* Ensure fixed size for each card */
    background-color: yellow;
    width: 300px;
    height: 200px;
    border-radius: 1.2rem;
    box-shadow: 2px 2px 2px 2px rgb(0 .1 .2 /12%);
  }

  img {
    width: 100%;
    height: 100%;
    border-radius: 1.2rem;
  }

  .slider-icon {
    background-color: var(--background-color);
    position: absolute;
    border-radius: 100%;
    color: var(--text-secondary-color);
    cursor: pointer;
    :hover {
      opacity: 1;
    }
  }

  .left,
  .right {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    width: 40px; /* Adjust the width of the arrows as needed */
    height: 40px; /* Adjust the height of the arrows as needed */
    background-color: white; /* Arrow background color */
    display: flex;
    align-items: center;
    justify-content: space-between;
    cursor: pointer;
    box-shadow: 2px 2px 2px 2px rgb(0 0 0 /12%);
  }

  .left {
    left: 0;
  }

  .right {
    right: 0;
  }
`;

export default Wrapper;
