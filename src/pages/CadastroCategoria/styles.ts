import styled from 'styled-components';

export const Container = styled.div`
  color: var(--white);

  flex: 1;
  padding-top: 50px;
  padding-left: 5%;
  padding-right: 5%;
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
`;

export const Title = styled.h1``;

export const ButtonContainer = styled.div``;

export const Button = styled.button`
  border: 1px solid var(--white);
  width: 120px;
  background: var(--black);
  border-radius: 5px;
  color: var(--white);
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
