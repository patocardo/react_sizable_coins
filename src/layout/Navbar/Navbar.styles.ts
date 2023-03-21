import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { colors } from 'shared/constants';

const NavbarContainer = styled.nav`
  background-color: ${colors.main};
  color: ${colors.text};
  display: flex;
  height: 4rem;
  justify-content: space-between;
  left: 0;
  position: fixed;
  top: 0;
  width: 100%;
`;

const BrandContainer = styled(Link)`
  display: inline-block;
  color: white;
  font-size: 2rem;
  font-weight: bold;
  line-height: 4rem;
  margin-left: 2rem;
  vertical-align: middle;

  :hover {
    color: ${colors.textHover};
  }
`;

const BlockSelector = styled(Link)`
  display: inline-block;
  font-size: 1.5rem;
  line-height: 4rem;
  padding-right: 1.5rem;
  vertical-align: middle;
`;

export { NavbarContainer, BrandContainer, BlockSelector } ;
