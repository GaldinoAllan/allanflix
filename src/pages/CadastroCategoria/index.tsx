import React, { useState, useCallback, useEffect } from 'react';
import { Link } from 'react-router-dom';

import PageDefault from '../../components/PageDefault';
import Input from '../../components/Input';
import Button from '../../components/Button';

import useForm from '../../Hooks/useForm';

import api from '../../service/api';

import { Container, Title, Form, ButtonStyle } from './styles';

interface Categoria {
  id: number;
  titulo: string;
  descricao: string;
  cor: string;
}

const CadastroCategoria: React.FC = () => {
  const valoresIniciais: Categoria = {
    id: 0,
    titulo: '',
    descricao: '',
    cor: '',
  };

  const { values, handleChange, clearForm } = useForm(valoresIniciais);

  const [categorias, setCategorias] = useState<Categoria[]>([]);

  useEffect(() => {
    api.get('categorias').then(response => {
      setCategorias(response.data);
    });
  }, [setCategorias]);

  const handleSubmit = useCallback(
    async e => {
      e.preventDefault();

      if (values.titulo === '' || values.descricao === '') {
        return;
      }

      setCategorias([...categorias, values]);
      await api.post('categorias', values);
      clearForm();
    },
    [clearForm, categorias, values],
  );

  return (
    <PageDefault>
      <Container>
        <Title>Nova Categoria</Title>
        <Form onSubmit={e => handleSubmit(e)}>
          <Input
            label="Título da Categoria"
            type="text"
            name="titulo"
            value={values.titulo}
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
            <Button type="submit">Cadastrar</Button>
            <Button onClick={clearForm}>Limpar</Button>
          </ButtonStyle>
        </Form>

        {categorias.length === 0 && <div>Loading...</div>}

        <ul>
          {categorias.map(categoria => (
            <li key={categoria.id}>{categoria.titulo}</li>
          ))}
        </ul>

        <Link to="/">Ir para home</Link>
      </Container>
    </PageDefault>
  );
};
export default CadastroCategoria;
