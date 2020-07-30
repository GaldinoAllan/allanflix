import React from 'react';
import { Link } from 'react-router-dom';
import { Content, HeaderContainer, LinkHome, ButtonMobile } from './styles';
import logo from '../../assets/allanflix.png';
import Button from '../Button';

const Header: React.FC = () => (
  <Content>
    <HeaderContainer>
      <LinkHome to="/">
        <img src={logo} alt="allanflix" />
      </LinkHome>

      <ButtonMobile>
        <Button>
          <Link to="cadastro/video">Novo vídeo</Link>
        </Button>
      </ButtonMobile>
    </HeaderContainer>
  </Content>
);

export default Header;
