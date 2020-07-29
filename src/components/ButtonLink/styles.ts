import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Button = styled(Link)`
  box-sizing: border-box;
  cursor: pointer;
  padding: 16px 24px;
  font-style: normal;
  font-weight: bold;
  font-size: 16px;
  outline: none;
  border-radius: 5px;
  text-decoration: none;
  display: flex;
  justify-content: center;
  transition: opacity 0.3s;

  &:hover,
  &:focus {
    opacity: 0.5;
  }
`;
