import React from 'react';
import { FormFieldWrapper, InputText, Label, LabelText } from './styles';

interface InputProps {
  as?: string;
  label: string;
  value: string;
  hasValue?: boolean;
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

  const hasValue = Boolean(value.length);

  console.log(asType, label, name, onChange, type, value);

  return (
    <FormFieldWrapper>
      <Label htmlFor={fieldId}>
        <InputText
          as={tag}
          id={fieldId}
          name={name}
          type={isType}
          value={value}
          hasValue={hasValue}
          onChange={onChange}
        />
        <LabelText>{`${label}:`}</LabelText>
      </Label>
    </FormFieldWrapper>
  );
};

export default Input;
