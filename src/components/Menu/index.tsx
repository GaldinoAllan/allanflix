import React from 'react';
import { Header, Button } from './styles';
import logo from '../../assets/allanflix.png';
import ButtonLink from '../ButtonLink';

const Menu: React.FC = () => (
  <Header>
    <nav>
      <a href="/">
        <img src={logo} alt="allanflix" />
      </a>

      <Button>
        <ButtonLink goto="/">Novo vídeo</ButtonLink>
      </Button>
    </nav>
  </Header>
);

export default Menu;
