import styled from 'styled-components';

const Wrapper = styled.div`

input {
    background-image: linear-gradient(
      to right,
      #999,
      #999 1.5ch,
      transparent 1.5ch,
      transparent 2ch,
      #999 2ch,
      #999 3.5ch,
      transparent 3.5ch,
      transparent 4ch,
      #ddd 4ch,
      #ddd 5.5ch,
      transparent 5.5ch,
      transparent 6ch,
      #ddd 6ch,
      #ddd 7.5ch,
      transparent 7.5ch,
      transparent 8ch,
      #ddd 8ch,
      #ddd 9.5ch,
      transparent 9.5ch
    );
    background-size: 10ch 0.25ch;
    background-repeat: no-repeat;
    background-position: calc(1em - 0.25ch) 2.25em;
    font-family: monospace;
    padding: 1em 0.5em 1em 1em;
    font-size: 14px;
    border: 1px solid black;
    border-radius: 5px;
    width: calc(10ch);
    text-transform: uppercase;
    letter-spacing: 1ch;
  }

`
  export default Wrapper;
