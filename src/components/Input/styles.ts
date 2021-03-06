import styled, { css } from 'styled-components';

interface InputProps {
  hasValue?: boolean;
  type: string;
  list?: string;
}

export const FormFieldWrapper = styled.div`
  position: relative;

  textarea {
    min-height: 150px;
  }

  input[type='color'] {
    padding: 8px 16px 8px 56px;
  }
`;

export const InputText = styled.input<InputProps>`
  background: #53585d;
  color: #f5f5f5;
  display: block;
  width: 100%;
  height: 57px;
  font-size: 18px;

  outline: 0;
  border: 0;
  border-top: 4px solid transparent;
  border-bottom: 4px solid #53585d;

  padding: 16px;
  margin-bottom: 45px;

  resize: none;
  border-radius: 4px;
  transition: border-color 0.3s;

  &:focus {
    border-bottom-color: var(--primary);
  }

  &:focus:not([type='color']) + span {
    transform: scale(0.6) translateY(-10px);
  }

  ${({ hasValue }) =>
    hasValue &&
    css`
      border: 3px solid var(--primary);
      &:not([type='color']) + span {
        transform: scale(0.6) translateY(-10px);
      }
    `}
`;

export const Label = styled.label``;

export const LabelText = styled.span`
  color: #e5e5e5;
  height: 57px;
  position: absolute;
  top: 0;
  left: 16px;

  display: flex;
  align-items: center;

  transform-origin: 0% 0%;
  font-size: 18px;
  font-style: normal;
  font-weight: 300;

  transition: 0.1s ease-in-out;
`;
