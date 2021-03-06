import styled from 'styled-components';
import { shade } from 'polished';

export const Container = styled.button`
  background: var(--primary);
  border: 1px solid var(--white);
  height: 48px;
  border-radius: 10px;
  border: 0;
  padding: 0 16px;
  color: var(--white);
  width: 100%;
  font-weight: 500;
  margin: 16px 8px;
  transition: background-color 0.2s;

  &:hover {
    background: ${shade(0.2, '#ff2d55')};
  }
`;
