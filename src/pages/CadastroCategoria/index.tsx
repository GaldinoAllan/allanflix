import React, { useState, useCallback } from 'react';
import { Link } from 'react-router-dom';

import PageDefault from '../../components/PageDefault';
import Input from '../../components/Input';
import Button from '../../components/Button';

import { Container, Title, Form, ButtonStyle } from './styles';

interface Categoria {
  nome: string;
  descricao: string;
  cor: string;
}

const CadastroCategoria: React.FC = () => {
  const valoresIniciais = {
    nome: '',
    descricao: '',
    cor: '',
  };

  const [categorias, setCategorias] = useState<Categoria[]>([]);
  const [values, setValues] = useState<Categoria>(valoresIniciais);

  const setValue = useCallback(
    (key, value) =>
      setValues({
        ...values,
        [key]: value,
      }),
    [values],
  );

  const handleSubmit = useCallback(
    e => {
      e.preventDefault();

      if (values.nome === '' || values.descricao === '') {
        return;
      }

      setCategorias([...categorias, values]);
      setValues(valoresIniciais);
    },
    [categorias, valoresIniciais, values],
  );

  const handleChange = useCallback(
    e => {
      setValue(e.target.getAttribute('name'), e.target.value);
    },
    [setValue],
  );

  return (
    <PageDefault>
      <Container>
        <Title>Nova Categoria</Title>
        <Form onSubmit={e => handleSubmit(e)}>
          <Input
            label="Nome da Categoria"
            type="text"
            name="nome"
            value={values.nome}
            onChange={e => handleChange(e)}
          />

          <Input
            as="textarea"
            label="Descrição"
            type="textarea"
            name="descricao"
            value={values.descricao}
            onChange={handleChange}
          />

          <Input
            label="Cor"
            type="color"
            name="cor"
            value={values.cor}
            onChange={handleChange}
          />
          <ButtonStyle>
            <Button>Cadastrar</Button>
            <Button>Limpar</Button>
          </ButtonStyle>
        </Form>

        <ul>
          {categorias.map(categoria => (
            <li key={categoria.nome}>{categoria.nome}</li>
          ))}
        </ul>

        <Link to="/">Ir para home</Link>
      </Container>
    </PageDefault>
  );
};
export default CadastroCategoria;
