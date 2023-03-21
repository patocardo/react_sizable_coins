import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import  {Nav, Hamburger, MenuList, MenuItem, StyledLink} from './Menu.styles';

const Menu = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <Nav aria-label="Main Navigation">
      <Hamburger onClick={toggleMenu} aria-expanded={isOpen} aria-controls="menu">
        <FontAwesomeIcon icon={faBars} size="2x" />
      </Hamburger>
      <MenuList isOpen={isOpen} role="menu" aria-labelledby="menu">
        <MenuItem role="menutitem" id="menu_all">
          <StyledLink to="/coins">ALL</StyledLink>
        </MenuItem>
        <MenuItem role="menutitem" id="menu_btc">
          <StyledLink to="/coins/bitcoin">BTC</StyledLink>
        </MenuItem>
        <MenuItem role="menutitem" id="menu_eth">
          <StyledLink to="/coins/ethereum">ETH</StyledLink>
        </MenuItem>
      </MenuList>
    </Nav>
  );
};

export default Menu;