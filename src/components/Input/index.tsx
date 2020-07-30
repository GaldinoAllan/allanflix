import React from 'react';
import { InputText } from './styles';

interface InputProps {
  as?: string;
  label: string;
  value: string;
  name: string;
  type?: 'text' | 'color' | 'textarea';
  onChange?: (
    event:
      | React.ChangeEvent<HTMLInputElement>
      | React.ChangeEvent<HTMLTextAreaElement>,
  ) => void;
}

const Input: React.FC<InputProps> = ({
  as: asType,
  label,
  name,
  onChange,
  type,
  value,
}: InputProps) => {
  const fieldId = `id_${name}`;

  const isTextArea = asType === 'textarea';
  const tag = isTextArea ? 'textarea' : 'input';

  const isColor = type === 'color';
  const isType = isColor ? 'color' : 'text';

  return (
    <label htmlFor={fieldId}>
      <span>{`${label}: `}</span>
      <InputText
        as={tag}
        id={fieldId}
        name={name}
        type={isType}
        value={value}
        onChange={onChange}
      />
    </label>
  );
};

export default Input;
