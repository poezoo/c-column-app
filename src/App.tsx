import * as React from 'react';
import { Container } from 'react-bootstrap';

import { BrowserRouter as Router, Switch, Route, Link, useRouteMatch, useParams } from 'react-router-dom';

import { AuthProvider } from './contexts/AuthContext';
import { PrivateRoute } from './components/PrivateRoute';
import { Top } from './pages/Top';
import { About } from './pages/About';
import { Column } from './pages/Column';
import { Contact } from './pages/Contact';
import { MyPage } from './pages/MyPage';
import { UpdateProfile } from './pages/UpdateProfile';
import { Signup } from './pages/Signup';
import { Login } from './pages/Login';
import { ForgotPassword } from './pages/ForgotPassword';

import { Header } from './components/Header';
const App = () => {
  return (
    <Router>
      <AuthProvider>
        <Header />
        <Container className="d-flex align-items-center justify-content-center" style={{ minHeight: '100vh' }}>
          <div className="w-100" style={{ maxWidth: '600px' }}>
            <Switch>
              <Route path="/signup" component={Signup} />
              <Route path="/login" component={Login} />
              <Route path="/forgot-password" component={ForgotPassword} />
              <PrivateRoute path="/about" component={About} />
              <PrivateRoute path="/column" component={Column} />
              <PrivateRoute path="/contact" component={Contact} />
              <PrivateRoute path="/mypage" component={MyPage} />
              <PrivateRoute path="/update-profile" component={UpdateProfile} />
              <PrivateRoute exact path="/" component={Top} />
            </Switch>
          </div>
        </Container>
      </AuthProvider>
    </Router>
  );
};
export default App;
