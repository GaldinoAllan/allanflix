import React, { useState, useCallback, useEffect } from 'react';
import { Link } from 'react-router-dom';

import PageDefault from '../../components/PageDefault';
import Input from '../../components/Input';
import Button from '../../components/Button';

import api from '../../service/api';

import { Container, Title, Form, ButtonStyle } from './styles';

interface Categoria {
  id: number;
  nome: string;
  descricao: string;
  cor: string;
}

const CadastroCategoria: React.FC = () => {
  const valoresIniciais = {
    id: 0,
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

  useEffect(() => {
    api.get('categorias').then(response => {
      setCategorias(response.data);
    });
  }, []);

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

        {categorias.length === 0 && <div>Loading...</div>}

        <ul>
          {categorias.map(categoria => (
            <li key={categoria.id}>{categoria.nome}</li>
          ))}
        </ul>

        <Link to="/">Ir para home</Link>
      </Container>
    </PageDefault>
  );
};
export default CadastroCategoria;
