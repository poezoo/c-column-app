import React, { useRef, useState } from 'react';
import { Form, Button, Card, Alert } from 'react-bootstrap';
import { useAuth } from '../contexts/AuthContext';
import { BootstrapedContainer } from '../components/commons/Wrapper';

// import { Formik, Field, Form, FormikHelpers } from 'formik';
export const Signup: React.FC = () => {
  const emailRef = useRef<HTMLInputElement>();
  const passwordRef = useRef<HTMLInputElement>();
  const passwordConfirmRef = useRef<HTMLInputElement>();
  const { signup, currentUser } = useAuth();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  async function handleSubmit(e) {
    e.preventDefault();
    if (passwordRef.current.value !== passwordConfirmRef.current.value) {
      return setError('パスワードが一致しません');
    }

    try {
      setError('');
      setLoading(true);
      await signup(emailRef.current.value, passwordRef.current.value);
    } catch {
      setError('Failed to create an account');
    }
    setLoading(false);
  }

  return (
    <BootstrapedContainer>
      <Card>
        <Card.Body>
          <h2 className="text-center mb-4">アカウント登録</h2>
          {currentUser && currentUser.email}
          {error && <Alert variant="danger">{error}</Alert>}
          <form>
            <Form.Group id="email">
              <Form.Label>メールアドレス</Form.Label>
              <Form.Control type="email" ref={emailRef} required></Form.Control>
            </Form.Group>
            <Form.Group id="password">
              <Form.Label>パスワード</Form.Label>
              <Form.Control type="password" ref={passwordRef} required></Form.Control>
            </Form.Group>
            <Form.Group id="password-confirm">
              <Form.Label>パスワード確認</Form.Label>
              <Form.Control type="password" ref={passwordConfirmRef} required></Form.Control>
            </Form.Group>
            <Button onClick={handleSubmit} disabled={loading} className="w-100" type="submit">
              登録する
            </Button>
          </form>
        </Card.Body>
      </Card>
    </BootstrapedContainer>
  );
};
