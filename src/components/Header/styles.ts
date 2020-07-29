import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Content = styled.div`
  height: 94px;

  @media (max-width: 800px) {
    height: 50px;
  }
`;

export const HeaderContainer = styled.nav`
  z-index: 100;
  width: 100%;
  height: 94px;

  display: flex;
  justify-content: space-between;
  align-items: center;

  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  padding-left: 5%;
  padding-right: 5%;

  background: var(--black);
  border-bottom: 2px solid var(--primary);

  @media (max-width: 800px) {
    height: 50px;
    justify-content: center;
  }
`;

export const LinkHome = styled(Link)`
  img {
    max-width: 168px;
  }

  @media (max-width: 800px) {
    img {
      max-width: 105px;
    }
  }
`;

export const Button = styled.div`
  border: 1px solid var(--white);
  border-radius: 5px;
  color: var(--white);

  @media (max-width: 800px) {
    border: none;
    position: fixed;
    left: 0;
    right: 0;
    bottom: 0;
    background: var(--primary);
    border-radius: 0;
    border: 0;
    text-align: center;
  }
`;
