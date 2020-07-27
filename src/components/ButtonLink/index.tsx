import React, { ButtonHTMLAttributes } from 'react';
import { Button } from './styles';

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  goto: string;
  children: string;
};

const ButtonLink: React.FC<ButtonProps> = ({ goto, children }: ButtonProps) => (
  <Button href={goto}>{children}</Button>
);

export default ButtonLink;
