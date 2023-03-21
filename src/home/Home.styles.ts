import styled from "styled-components";
import { breakpoints } from 'shared/constants';

const HomeWrapper = styled.div`
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

const HomeHeader = styled.h1`
  font-size: 4rem;
`;

const HomeDescription = styled.div`
  width: 100%;
  text-align: justify;

  @media screen and (min-width: ${breakpoints.sm}) {
    column-count: 2;
    column-gap: 1rem;
  }

  @media screen and (min-width: ${breakpoints.lg}) {
    column-count: 3;
    column-gap: 1rem;
  }
`;

export { HomeWrapper, HomeHeader, HomeDescription};
