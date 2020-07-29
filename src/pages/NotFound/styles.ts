import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  flex: 1;
  position: relative;
`;

export const CactusImage = styled.img`
  width: 50%;
`;
export const ThornImage = styled.img`
  position: absolute;
  width: 12%;
  top: 40%;
  left: 40%;
`;

export const Text = styled.p`
  color: var(--white);
  padding-top: 50px;
  font-size: 24px;
`;

export const Button = styled.div`
  border: 1px solid var(--white);
  border-radius: 5px;
  margin: 8px;

  /* @media (max-width: 800px) {
    border: none;
    position: fixed;
    left: 0;
    right: 0;
    bottom: 0;
    background: var(--primary);
    border-radius: 0;
    border: 0;
    text-align: center;
  } */
`;
