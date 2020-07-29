import React from 'react';
import { InputText } from './styles';

interface InputProps {
  label: string;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  value: string;
  name: string;
  type: 'text' | 'color';
}

const Input: React.FC<InputProps> = ({
  label,
  name,
  onChange,
  type,
  value,
}: InputProps) => {
  return (
    <label htmlFor="Input">
      <span>{`${label}: `}</span>
      <InputText name={name} type={type} onChange={onChange} value={value} />
    </label>
  );
};

export default Input;
