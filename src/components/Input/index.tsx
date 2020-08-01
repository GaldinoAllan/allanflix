import React from 'react';
import { FormFieldWrapper, InputText, Label, LabelText } from './styles';

interface InputProps {
  as?: string;
  label: string;
  value: string;
  hasValue?: boolean;
  name: string;
  suggestions?: Array<string>;
  list?: string;
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
  suggestions,
}: InputProps) => {
  const fieldId = `id_${name}`;

  const isTextArea = asType === 'textarea';
  const tag = isTextArea ? 'textarea' : 'input';
  const isColor = type === 'color';
  const isType = isColor ? 'color' : 'text';

  const hasValue = Boolean(value.length);

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
          autoComplete={suggestions ? 'off' : 'on'}
          list={suggestions ? `suggestionFor_${fieldId}` : undefined}
        />
        <LabelText>{`${label}:`}</LabelText>

        {suggestions && (
          <datalist id={`suggestionFor_${fieldId}`}>
            {suggestions.map(suggestion => (
              <option
                key={`suggestionFor_${fieldId}_option${suggestion}`}
                value={suggestion}
              >
                {suggestion}
              </option>
            ))}
          </datalist>
        )}
      </Label>
    </FormFieldWrapper>
  );
};

export default Input;
