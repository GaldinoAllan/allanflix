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

export const ButtonMobile = styled.div`
  @media (max-width: 800px) {
    border-radius: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    position: fixed;
    left: 0;
    right: 0;
    bottom: 0;
  }
`;
