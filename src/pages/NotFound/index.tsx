import React from 'react';

import { Link } from 'react-router-dom';
import {
  Container,
  Image,
  ThornImage,
  CactusImage,
  Text,
  ButtonMobile,
} from './styles';

import cactus from '../../assets/404.svg';
import thorn from '../../assets/thorn.svg';
import Button from '../../components/Button';

const NotFound: React.FC = () => (
  <Container>
    <Image>
      <ThornImage src={thorn} alt="thorn" />
      <CactusImage src={cactus} alt="404" />
    </Image>
    <Text>
      <p>You look like a little lost</p>
      <ButtonMobile>
        <Button>
          <Link to="/">Go Home</Link>
        </Button>
      </ButtonMobile>
    </Text>
  </Container>
);

export default NotFound;
