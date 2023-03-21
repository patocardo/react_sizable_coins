import styled, { css } from 'styled-components';
import type { ButtonProps } from './Button.types';

const Button = styled.button<ButtonProps>`
  border: none;
  border-radius: 4px;
  font-size: 1rem;
  padding: 8px 16px;
  cursor: pointer;

  ${(props) =>
    props.variant === 'reverse' &&
    css`
      color: #ffffff;
      background-color: #202020;
      border: 1px solid #ffffff;
    `}

  ${(props) =>
    props.variant === 'normal' &&
    css`
      color: #202020;
      background-color: #ffffff;
      border: 1px solid #202020;
    `}
`;

const ButtonText = styled.span`
  margin-left: ${(props: ButtonProps) => (props.icon ? '8px' : '0')};
`;

export { Button, ButtonText}
