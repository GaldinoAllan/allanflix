import React from 'react';
import { Link } from 'react-router-dom';

import PageDefault from '../../components/PageDefault';

import { Container } from './styles';

const CadastroCategoria: React.FC = () => (
  <PageDefault>
    <Container>
      <h1>Cadastro de Categoria</h1>
      <Link to="/">Go to Home</Link>
    </Container>
  </PageDefault>
);
export default CadastroCategoria;
