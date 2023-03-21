import { HTMLAttributes } from 'react';

export type LoadingDotsProps = HTMLAttributes<HTMLDivElement> & {
  text?: string;
};

export type DotsProps = HTMLAttributes<HTMLDivElement> & {
  delay: string;
};
