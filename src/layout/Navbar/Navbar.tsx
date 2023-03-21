import { NavbarContainer, BrandContainer, BlockSelector } from './Navbar.styles'
import Menu from './Menu';

const Navbar = () => {
  return (
    <NavbarContainer>
      <BrandContainer to="/">CryptoCoins</BrandContainer>
      <Menu />
    </NavbarContainer>
  )
}

export default Navbar;