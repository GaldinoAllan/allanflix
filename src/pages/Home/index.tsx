import React, { useEffect, useState } from 'react';

import PageDefault from '../../components/PageDefault';
import BannerMain from '../../components/BannerMain';
import Carousel from '../../components/Carousel';

import { Loading } from './styles';

import api from '../../service/api';

interface Videos {
  titulo: string;
  descricao: string;
  url: string;
}

interface CategoryData {
  id: number;
  titulo: string;
  link?: string | undefined;
  descricao: string;
  cor: string;
  videos: Videos[];
}

const Home: React.FC = () => {
  const [dadosIniciais, setDadosIniciais] = useState<CategoryData[]>([]);

  useEffect(() => {
    api.get('categorias?_embed=videos').then(response => {
      try {
        setDadosIniciais(response.data);
      } catch (err) {
        console.log(err.message);
        throw new Error('Não foi possível pegar os dados!');
      }
    });
  }, []);

  return (
    <PageDefault>
      {dadosIniciais.length === 0 && <Loading>Loading...</Loading>}

      {dadosIniciais.map((categoria, index) => {
        if (index === 0) {
          return (
            <>
              <BannerMain
                key={categoria.id}
                videoTitle={categoria.videos[0].titulo}
                url={categoria.videos[0].url}
                videoDescription={categoria.videos[0].descricao}
              />

              <Carousel
                ignoreFirstVideo
                key={categoria.id}
                category={categoria}
              />
            </>
          );
        }

        return <Carousel key={categoria.id} category={categoria} />;
      })}
    </PageDefault>
  );
};

export default Home;
