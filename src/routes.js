import { BrowserRouter, Switch, Route } from 'react-router-dom';
import React from 'react';

import Main from './pages/Main';
import Emails from './pages/Emails'

export default function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Main} />
        <Route path="/mongodbemails" exact component={Emails} />
      </Switch>
    </BrowserRouter>
  );
}
