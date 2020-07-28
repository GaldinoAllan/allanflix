import React from 'react';
import VideoIframeResponsive from './VideoIframeResponsive';
import {
  BannerMainContainer,
  ContentAreaContainer,
  ContentAreaContainerItem,
  ContentAreaContainerTitle,
  // ContentAreaContainerCategory,
  ContentAreaContainerDescription,
  WatchButton,
} from './styles';

interface BannerMainProps {
  videoTitle: string;
  videoDescription: string;
  url: string;
}

const getYoutubeID = (yurl: string): string => {
  return yurl.replace(
    /^.*((youtu.be\/)|(v\/)|(\/u\/\w\/)|(embed\/)|(watch\?))\??v?=?([^#&?]*).*/,
    '$7',
  );
};

const BannerMain: React.FC<BannerMainProps> = ({
  videoTitle,
  videoDescription,
  url,
}) => {
  const youtubeID = getYoutubeID(url);
  const bgUrl = `https://img.youtube.com/vi/${youtubeID}/maxresdefault.jpg`;

  return (
    <BannerMainContainer backgroundImage={bgUrl}>
      <ContentAreaContainer>
        <ContentAreaContainerItem>
          <ContentAreaContainerTitle>{videoTitle}</ContentAreaContainerTitle>

          <ContentAreaContainerDescription>
            {videoDescription}
          </ContentAreaContainerDescription>
        </ContentAreaContainerItem>

        <ContentAreaContainerItem>
          <VideoIframeResponsive youtubeID={youtubeID} />
          <WatchButton>Assistir</WatchButton>
        </ContentAreaContainerItem>
      </ContentAreaContainer>
    </BannerMainContainer>
  );
};

export default BannerMain;
