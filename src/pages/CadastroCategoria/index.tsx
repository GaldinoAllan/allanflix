import React from 'react';
import { Link } from 'react-router-dom';

import PageDefault from '../../components/PageDefault';

import { Container } from './styles';

const CadastroCategoria: React.FC = () => (
  <PageDefault>
    <Container>
      <h1>Cadastro de Categoria</h1>
      <form>
        <label>
          Nome da Categoria:
          <input type="text" />
        </label>

        <button type="submit">Cadastrar</button>
      </form>
      <Link to="/">Ir para home</Link>
    </Container>
  </PageDefault>
);
export default CadastroCategoria;
