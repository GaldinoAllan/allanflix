import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Home from '../pages/Home';
import CadastroVideo from '../pages/CadastroVideo';
import CadastroCategoria from '../pages/CadastroCategoria';

const Routes: React.FC = () => (
  <Switch>
    <Route path="/" exact component={Home} />
    <Route path="/cadastro/video" component={CadastroVideo} />
    <Route path="/cadastro/categoria" component={CadastroCategoria} />
    <Route component={() => <div>404</div>} />
  </Switch>
);

export default Routes;
