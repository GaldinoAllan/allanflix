import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  flex: 1;
`;

export const Image = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: relative;
`;

export const CactusImage = styled.img`
  width: 50%;

  @media (max-width: 800px) {
    width: 90%;
  }
`;

export const ThornImage = styled.img`
  position: absolute;
  width: 12%;
  top: 40%;
  left: 40%;

  @media (max-width: 800px) {
    width: 20%;
    top: 42%;
    left: 32%;
  }
`;

export const Text = styled.div`
  display: flex;
  flex-direction: column;
  color: rgb(255, 165, 0);

  p {
    padding-top: 50px;
    font-size: 24px;
  }

  @media (max-width: 800px) {
    padding-top: 50px;
  }
`;

export const Button = styled.div`
  border: 1px solid rgb(34, 181, 88);
  border-radius: 5px;
  margin: 8px;

  @media (max-width: 800px) {
    color: #000;
    border: none;
    position: fixed;
    left: 0;
    right: 0;
    bottom: 0;
    background: rgb(255, 165, 0);
    border-radius: 0;
    border: 0;
    text-align: center;
  }
`;
