import { ReactNode } from 'react';
import Body from "./Body/Body";
import Navbar from "./Navbar/Navbar";

const Layout = ({ children }: { children?: ReactNode }) => (
  <>
    <Navbar />
    <Body>
      { children }
    </Body>
  </>
)

export default Layout;