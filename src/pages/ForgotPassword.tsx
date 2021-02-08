import React, { useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { Form, Button, Card, Alert } from 'react-bootstrap';
import { useAuth } from '../contexts/AuthContext';
import { BootstrapedContainer } from '../components/commons/Wrapper';

export const ForgotPassword: React.FC = () => {
  const emailRef = useRef<HTMLInputElement>();
  const { resetPassword } = useAuth();
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState('');
  const [error, setError] = useState('');

  async function handleSubmit(e) {
    e.preventDefault();
    try {
      setError('');
      setLoading(true);
      await resetPassword(emailRef.current.value);
      setMessage('Check your inbox for further instructions');
    } catch {
      setError('Failed to reset');
    }
    setLoading(false);
  }

  return (
    <BootstrapedContainer>
      <Card>
        <Card.Body>
          <h2 className="text-center mb-4">パスワード再発行</h2>
          {error && <Alert variant="danger">{error}</Alert>}
          {message && <Alert variant="success">{message}</Alert>}
          <Form onSubmit={handleSubmit}>
            <Form.Group id="email">
              <Form.Label>メールアドレス</Form.Label>
              <Form.Control type="email" ref={emailRef} required></Form.Control>
            </Form.Group>
            <Button onClick={handleSubmit} disabled={loading} className="w-100" type="submit">
              パスワード再発行
            </Button>
          </Form>
          <div className="w-100 text-center mt-3">
            <Link to="/login">ログイン</Link>
          </div>
        </Card.Body>
      </Card>
      <div className="w-100 text-center mt-2">
        アカウントが必要ですか? <Link to="/signup">アカウント登録</Link>
      </div>
    </BootstrapedContainer>
  );
};
