import React from 'react';
import { Content, HeaderContainer, LinkHome, Button } from './styles';
import logo from '../../assets/allanflix.png';
import ButtonLink from '../ButtonLink';

const Header: React.FC = () => (
  <Content>
    <HeaderContainer>
      <LinkHome to="/">
        <img src={logo} alt="allanflix" />
      </LinkHome>

      <Button>
        <ButtonLink goto="cadastro/video">Novo vídeo</ButtonLink>
      </Button>
    </HeaderContainer>
  </Content>
);

export default Header;
