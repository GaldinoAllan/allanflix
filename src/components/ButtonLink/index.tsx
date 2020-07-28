import React, { ButtonHTMLAttributes } from 'react';
import { Button } from './styles';

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  goto: string;
  children: string;
};

const ButtonLink: React.FC<ButtonProps> = ({ goto, children }: ButtonProps) => (
  <Button to={goto}>{children}</Button>
);

export default ButtonLink;
