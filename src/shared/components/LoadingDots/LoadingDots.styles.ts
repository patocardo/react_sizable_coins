import styled, { keyframes } from "styled-components";
import { DotsProps } from "./LoadingDots.types";

const BounceAnimation = keyframes`
  0% { margin-bottom: 0; }
  50% { margin-bottom: 15px }
  100% { margin-bottom: 0 }
`;

const Dot = styled.div<DotsProps>`
  margin: 0 5px;
  /* Animation */
  animation: ${BounceAnimation} 0.5s linear infinite;
  animation-delay: ${props => props.delay};
`;

const DotWrapper = styled.div`
  display: flex;
  align-items: flex-end;
`;

const MessageWrapper = styled.div`
  display: flex;
`;

export { Dot, DotWrapper, MessageWrapper }
