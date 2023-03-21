import { ReactNode } from 'react';
import { MainBody } from "./Body.styles"

const Body = ({ children }: { children?: ReactNode }) => (
  <MainBody>{ children }</MainBody>
);

export default Body;