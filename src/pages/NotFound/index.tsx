import React from 'react';

import {
  Container,
  Button,
  Image,
  ThornImage,
  CactusImage,
  Text,
} from './styles';

import cactus from '../../assets/404.svg';
import thorn from '../../assets/thorn.svg';
import ButtonLink from '../../components/ButtonLink';

const NotFound: React.FC = () => (
  <Container>
    <Image>
      <ThornImage src={thorn} alt="thorn" />
      <CactusImage src={cactus} alt="404" />
    </Image>
    <Text>
      <p>You look like a little lost</p>
      <Button>
        <ButtonLink goto="/">Take me Home</ButtonLink>
      </Button>
    </Text>
  </Container>
);

export default NotFound;
