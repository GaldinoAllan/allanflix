import React from 'react';
import { Link } from 'react-router-dom';

import PageDefault from '../../components/PageDefault';

import { Container } from './styles';

const CadastroVideo: React.FC = () => (
  <PageDefault>
    <Container>
      <h1>Cadastro de Video</h1>
      <Link to="/cadastro/categoria">Cadastrar Categoria</Link>
    </Container>
  </PageDefault>
);
export default CadastroVideo;
