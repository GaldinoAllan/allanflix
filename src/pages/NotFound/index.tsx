import React from 'react';

import { Container, Button, ThornImage, CactusImage, Text } from './styles';

import cactus from '../../assets/404.svg';
import thorn from '../../assets/thorn.svg';
import ButtonLink from '../../components/ButtonLink';

const NotFound: React.FC = () => (
  <Container>
    <ThornImage src={thorn} alt="thorn" />
    <CactusImage src={cactus} alt="404" />
    <Text>You look like a little lost</Text>
    <Button>
      <ButtonLink goto="/">Take me Home</ButtonLink>
    </Button>
  </Container>
);

export default NotFound;
