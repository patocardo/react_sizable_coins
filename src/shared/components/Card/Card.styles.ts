import styled from "styled-components";
import { colors } from '../../constants';

const CardStyle = styled.div`
  background-color: ${colors.cardBackground};
  box-shadow: rgb(0 0 0 / 20%) 4px 4px 4px;
  border-radius: 5px;
  height: 100%;
  padding: .7rem;

  & h4 {
    font-weight: 900;
    margin: 0;
    text-transform: uppercase;
  }

  & div {
    font-style: italic;
    font-weight: 300;
  }
`;

export { CardStyle }