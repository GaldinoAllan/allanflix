import styled from 'styled-components';

interface InputProps {
  hasValue?: boolean;
  type: string;
}

export const InputText = styled.input<InputProps>`
  &:hover,
  &:focus {
    border-bottom-color: red;
  }
`;
