import * as React from 'react';
import { useLocation } from 'react-router-dom';
import { Navbar, Nav } from 'react-bootstrap';
import { useAuth } from '../../contexts/AuthContext';

export const Header: React.FC = () => {
  const location = useLocation();
  const { currentUser } = useAuth();
  return (
    <Navbar bg="light" variant="light">
      <Navbar.Brand href="/">c-therapy-app</Navbar.Brand>
      <Nav className="mr-auto" activeKey={location.pathname} defaultActiveKey="/">
        {currentUser ? (
          <>
            <Nav.Link href="/">Top</Nav.Link>
            <Nav.Link href="/about">About</Nav.Link>
            <Nav.Link href="/contact">お問い合わせ</Nav.Link>
            <Nav.Link href="/mypage">マイページ</Nav.Link>
            <Nav.Link href="/column">コラム法</Nav.Link>
          </>
        ) : (
          <>
            <Nav.Link href="/signup">アカウント登録</Nav.Link>
            <Nav.Link href="/login">ログイン</Nav.Link>
          </>
        )}
      </Nav>
    </Navbar>
  );
};
