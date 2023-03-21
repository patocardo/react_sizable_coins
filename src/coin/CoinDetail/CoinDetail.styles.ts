import styled from "styled-components";
import { breakpoints, colors } from '@constants/index';

const CoinDetailWrapper = styled.section`
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

const CoinDetailHeader = styled.div`
  display: flex;
  justify-content: space-between;
`;

const CoinMark = styled.div`
  display: flex;
  &>div {
    margin-left: 2rem;
  } 
`;

const CoinSymbol = styled.div`
  color: ${colors.main};
  font-size: 2rem;
  font-weight: 900;
  text-transform: uppercase
`;

const CoinInfo = styled.div`
  font-size: 1.4rem;
  font-weight: 700;
`

const CoinDescription = styled.p`
  text-align: justify;
`

export { CoinDetailWrapper, CoinDetailHeader, CoinMark, CoinSymbol, CoinInfo, CoinDescription }
