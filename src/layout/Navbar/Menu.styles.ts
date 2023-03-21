import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Nav = styled.nav`
  align-items: center;
  color: #333;
  display: flex;
  font-family: 'Roboto', sans-serif;
  height: 60px;
  justify-content: space-between;
  padding: 0 20px;

  @media (max-width: 768px) {
    flex-direction: column;
    height: auto;
  }
`;

const Hamburger = styled.button`
  display: none;
  cursor: pointer;
  line-height: 4rem;
  padding: 4px;

  @media (max-width: 768px) {
    display: block;
    color: white;
  }
`;

const MenuList = styled.ul<{ isOpen: boolean }>`
  align-items: center;
  background-color: #646cff;
  display: flex;
  justify-content: space-between;
  list-style: none;
  margin: 0;

  @media (max-width: 768px) {
    ${({ isOpen }) => (isOpen ? '' : 'display: none' )};
    flex-direction: column;
    width: 100%;
    max-height: ${({ isOpen }) => (isOpen ? '300px' : '0')};
  }
`;

const MenuItem = styled.li`
  padding: 10px 15px;
  border-radius: 5px;

  @media (max-width: 768px) {
    padding: 10px 0;
    text-align: center;
    width: 100%;
  }
`;

const StyledLink = styled(Link)`
  color: white;
  font-size: 1.5rem;
  text-decoration: none;

  :hover {
    color: #efe;
  }
`;

export { Nav, Hamburger, MenuList, MenuItem, StyledLink }
