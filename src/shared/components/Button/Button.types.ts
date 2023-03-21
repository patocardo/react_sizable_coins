import { ReactNode, ButtonHTMLAttributes } from 'react';
import { IconDefinition } from '@fortawesome/fontawesome-svg-core';

export type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: 'normal' | 'reverse';
  icon?: IconDefinition;
  children?: ReactNode;
};
