import React from 'react';
import { InputText, TextArea } from './styles';

interface InputProps {
  label: string;
  onChange?: (
    event:
      | React.ChangeEvent<HTMLInputElement>
      | React.ChangeEvent<HTMLTextAreaElement>,
  ) => void;
  value: string;
  name: string;
  type: 'text' | 'color' | 'textarea';
}

const Input: React.FC<InputProps> = ({
  label,
  name,
  onChange,
  type,
  value,
}: InputProps) => {
  return (
    <label htmlFor="textarea">
      <span>{`${label}: `}</span>
      {type === 'textarea' ? (
        <TextArea name={name} onChange={onChange} value={value} />
      ) : (
          <InputText name={name} type={type} onChange={onChange} value={value} />
        )}
    </label>
  );
};

export default Input;
