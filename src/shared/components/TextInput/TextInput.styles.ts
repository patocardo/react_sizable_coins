import styled from 'styled-components';

export const TextInputStyle = styled.input`
  background-color: black;
  border: 1px solid #eee;
  border-radius: 0.5rem;
  color: white;
  height: 1.8rem;
  padding: 0 .5rem;
  width: calc(100% - 1rem);

  ::placeholder {
    color: #aaa;
  }
`;
