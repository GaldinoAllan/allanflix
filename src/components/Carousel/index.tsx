import React from 'react';
import {
  VideoCardGroupContainer,
  SliderItem,
  Title,
  ExtraLink,
} from './styles';
import VideoCard from './VideoCard';

import Slider from './Slider';

interface Videos {
  titulo: string;
  url: string;
}

interface LinkExtra {
  text: string;
  url: string;
}

interface CategoryData {
  titulo: string;
  link?: string | undefined;
  cor: string;
  link_extra?: LinkExtra;
  videos: Videos[];
}

interface VideoCardProps {
  ignoreFirstVideo?: boolean;
  category: CategoryData;
}

const Carousel: React.FC<VideoCardProps> = ({ ignoreFirstVideo, category }) => {
  const categoryTitle = category.titulo;
  const categoryColor = category.cor;
  const categoryExtraLink = category.link_extra;
  const { videos } = category;

  return (
    <VideoCardGroupContainer>
      {categoryTitle && (
        <>
          <Title style={{ backgroundColor: categoryColor || 'red' }}>
            {categoryTitle}
          </Title>
          {categoryExtraLink && (
            <ExtraLink href={categoryExtraLink.url} target="_blank">
              {categoryExtraLink.text}
            </ExtraLink>
          )}
        </>
      )}
      <Slider>
        {videos.map((video, index) => {
          if (ignoreFirstVideo && index === 0) {
            return null;
          }

          return (
            <SliderItem key={video.titulo}>
              <VideoCard
                videoTitle={video.titulo}
                videoURL={video.url}
                categoryColor={categoryColor}
              />
            </SliderItem>
          );
        })}
      </Slider>
    </VideoCardGroupContainer>
  );
};

export default Carousel;
