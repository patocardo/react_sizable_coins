import styled from 'styled-components';
import breakpoints from '@constants/breakpoints'
import { Link } from 'react-router-dom';

const CoinListContainer = styled.div`
  margin: 2rem auto;
  padding-left: 1rem;
  padding-right: 1rem;

  // Define the style for medium-width screens
  @media screen and (min-width: ${breakpoints.sm}) {
    margin: 2rem auto;
  }

  // Define the style for large-width screens
  @media screen and (min-width: ${breakpoints.lg}) {
    margin: 3rem auto;
    max-width: 1000px;
  }
`;

const CoinGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-auto-flow: dense;
  grid-auto-rows: minmax(90px, 130px);
  grid-gap: 20px;
  margin-top: 2rem;
  width: 100%;

  @media (min-width: ${breakpoints.md}) {
    grid-template-columns: repeat(3, 1fr);
  }

  @media (min-width: ${breakpoints.lg}) {
    grid-template-columns: repeat(4, 1fr);
  }
`;

const CardLink = styled(Link)`
  height: calc(100% - 20px);
  color: unset;
  :hover {
    color: unset;
  }
`;

export { CoinListContainer, CoinGrid, CardLink }
