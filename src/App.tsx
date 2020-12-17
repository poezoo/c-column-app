import * as React from 'react';

import { BrowserRouter as Router, Switch, Route, Link, useRouteMatch, useParams } from 'react-router-dom';
import { Top } from './pages/Top';
import { About } from './pages/About';
import { Column } from './pages/Column';
import { Contact } from './pages/Contact';
import { MyPage } from './pages/MyPage';
import { Signup } from './pages/Signup';

import { Header } from './components/Header';
const App = () => (
  <Router>
    <Header />
    <Switch>
      <Route path="/signup">
        <Signup />
      </Route>
      <Route path="/about">
        <About />
      </Route>
      <Route path="/column">
        <Column />
      </Route>
      <Route path="/contact">
        <Contact />
      </Route>
      <Route path="/mypage">
        <MyPage />
      </Route>
      <Route exact path="/">
        <Top />
      </Route>
    </Switch>
  </Router>
);
export default App;
