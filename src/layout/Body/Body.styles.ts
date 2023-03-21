import styled from 'styled-components';
import { colors, breakpoints } from 'shared/constants';

const MainBody = styled.main`
  background-color: ${colors.background};
  color: ${colors.text};
  font-family: 'Roboto', sans-serif;
  min-height: 100vh;
  padding-top: 5rem;
  width: 100%;

  & h1, h2, h3 {
    color: #646cff;
  }

  & h1 {
    font-size: 3rem;
    @media screen and (min-width: ${breakpoints.sm}) {
      font-size: 4rem;
    }
  }

  & h2 {
    font-size: 2rem;
    text-align: center;
  }

  @media screen and (min-width: ${breakpoints.sm}) {
    padding-top: 6rem;    
  }
`;

export { MainBody };