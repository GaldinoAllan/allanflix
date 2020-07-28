import React from 'react';
import { Link } from 'react-router-dom';
import { Content, HeaderContainer, Button } from './styles';
import logo from '../../assets/allanflix.png';
import ButtonLink from '../ButtonLink';

const Header: React.FC = () => (
  <Content>
    <HeaderContainer>
      <Link to="/">
        <img src={logo} alt="allanflix" />
      </Link>

      <Button>
        <ButtonLink goto="cadastro/video">Novo vídeo</ButtonLink>
      </Button>
    </HeaderContainer>
  </Content>
);

export default Header;
