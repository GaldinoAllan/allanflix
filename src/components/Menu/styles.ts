import styled from 'styled-components';

export const Header = styled.div`
  nav {
    width: 100%;
    height: 94px;
    z-index: 100;

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
  }

  body {
    --bodyPaddingTop: 94px;
    padding-top: var(--bodyPaddingTop);
  }

  img {
    max-width: 168px;
  }

  @media (max-width: 800px) {
    img {
      max-width: 105px;
    }

    nav {
      height: 40px;
      justify-content: center;
    }

    body {
      --bodyPaddingTop: 90px;
      padding-top: var(--bodyPaddingTop);
    }

    > a {
      position: fixed;
      left: 0;
      right: 0;
      bottom: 0;
      background: var(--primary);
      border-radius: 0;
      border: 0;
      text-align: center;
    }
  }
`;

export const Button = styled.div`
  border: 1px solid var(--white);
  border-radius: 5px;

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
