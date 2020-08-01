import React, { useState, useCallback, useEffect } from 'react';
import { useHistory } from 'react-router-dom';

import PageDefault from '../../components/PageDefault';
import Input from '../../components/Input';
import Button from '../../components/Button';

import useFormVideos from '../../Hooks/useFormVideos';

import api from '../../service/api';

import { Container, Title, Form, ButtonStyle } from './styles';

interface Video {
  id: number;
  categoria: string;
  titulo: string;
  descricao: string;
  url: string;
}

interface Categoria {
  id: number;
  titulo: string;
  descricao: string;
  cor: string;
}

const CadastroVideo: React.FC = () => {
  const history = useHistory();

  const valoresIniciais: Video = {
    id: 0,
    categoria: '',
    titulo: '',
    descricao: '',
    url: '',
  };

  const { values, handleChange, clearForm } = useFormVideos(valoresIniciais);
  const [categorias, setCategorias] = useState<Categoria[]>([]);

  const categoryTitles = categorias.map(({ titulo }) => titulo);

  useEffect(() => {
    api.get('categorias').then(response => {
      setCategorias(response.data);
    });
  }, [setCategorias]);

  const handleSubmit = useCallback(
    async e => {
      e.preventDefault();

      const categoriaEscolhida = categorias.find(categoria => {
        return categoria.titulo === values.categoria;
      });

      if (
        values.titulo === '' ||
        values.url === '' ||
        values.descricao === ''
      ) {
        return;
      }

      const novoVideo = {
        titulo: values.titulo,
        url: values.url,
        categoriaId: categoriaEscolhida?.id,
        descricao: values.descricao,
      };

      console.log(novoVideo);

      await api.post('videos', novoVideo);
      clearForm();
      history.push('/');
    },
    [clearForm, values, categorias, history],
  );

  return (
    <PageDefault>
      <Container>
        <Title>Cadastro de Video</Title>
        <Form onSubmit={e => handleSubmit(e)}>
          <Input
            label="Título do Video"
            type="text"
            name="titulo"
            value={values.titulo}
            onChange={e => handleChange(e)}
          />

          <Input
            label="URL"
            type="text"
            name="url"
            value={values.url}
            onChange={handleChange}
          />

          <Input
            label="Categoria"
            type="text"
            name="categoria"
            value={values.categoria}
            onChange={handleChange}
            suggestions={categoryTitles}
          />

          <Input
            as="textarea"
            label="Descrição"
            type="textarea"
            name="descricao"
            value={values.descricao}
            onChange={handleChange}
          />

          <ButtonStyle>
            <Button type="submit">Cadastrar</Button>
            <Button onClick={clearForm}>Limpar</Button>
          </ButtonStyle>
        </Form>
      </Container>
    </PageDefault>
  );
};

export default CadastroVideo;
