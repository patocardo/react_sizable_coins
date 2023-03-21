import { Dot, DotWrapper, MessageWrapper } from './LoadingDots.styles'
import { LoadingDotsProps } from './LoadingDots.types';

const LoadingDots = ({ text, color = 'white'}: LoadingDotsProps) => (
  <MessageWrapper aria-live="polite">
    { text }
    <DotWrapper>
      <Dot delay="0s">●</Dot>
      <Dot delay=".1s">●</Dot>
      <Dot delay=".2s">●</Dot>
    </DotWrapper>
  </MessageWrapper>
);

export default LoadingDots

