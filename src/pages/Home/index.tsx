import React, { useEffect, useState } from 'react';
import dadosIniciais from '../../data/dados_iniciais.json';

import PageDefault from '../../components/PageDefault';
import BannerMain from '../../components/BannerMain';
import Carousel from '../../components/Carousel';

import api from '../../service/api';

interface Videos {
  titulo: string;
  url: string;
}

interface LinkExtra {
  text: string;
  url: string;
}

interface CategoryData {
  id: number;
  titulo: string;
  link?: string | undefined;
  cor: string;
  link_extra?: LinkExtra;
  videos: Videos[];
}

const Home: React.FC = () => {
  const [categorias, setCategorias] = useState<CategoryData[]>([]);

  useEffect(() => {
    api.get('categorias?_embed=videos').then(response => {
      setCategorias(response.data);
    });
  }, []);

  return (
    <PageDefault>
      <BannerMain
        videoTitle={dadosIniciais.categorias[0].videos[0].titulo}
        url={dadosIniciais.categorias[0].videos[0].url}
        videoDescription="O que é Front-end? Trabalhando na área os termos HTML, CSS e JavaScript fazem parte da rotina das desenvolvedoras e desenvolvedores. Mas o que eles fazem, afinal? Descubra com a Vanessa!"
      />

      {categorias.map(categoria => {
        if (categoria.id === 0) {
          return (
            <Carousel
              ignoreFirstVideo
              key={categoria.id}
              category={categoria}
            />
          );
        }

        return <Carousel key={categoria.id} category={categoria} />;
      })}
    </PageDefault>
  );
};

export default Home;
