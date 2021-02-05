import React, { useRef, useState } from 'react';
import { useHistory, Link } from 'react-router-dom';
import { Form, Button, Card, Alert } from 'react-bootstrap';
import { useAuth } from '../contexts/AuthContext';
// import { Formik, Field, Form, FormikHelpers } from 'formik';

export const ForgotPassword: React.FC = () => {
  const history = useHistory();
  const emailRef = useRef<HTMLInputElement>();
  const passwordRef = useRef<HTMLInputElement>();
  const { login, currentUser } = useAuth();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  async function handleSubmit(e) {
    // e.preventDefault();
    // try {
    //   setError('');
    //   setLoading(true);
    //   await login(emailRef.current.value, passwordRef.current.value);
    //   history.push('/');
    // } catch {
    //   setError('Failed to log in');
    // }
    // setLoading(false);
  }

  return (
    <section>
      <Card>
        <Card.Body>
          <h2 className="text-center mb-4">パスワード再発行</h2>
          {currentUser && currentUser.email}
          {error && <Alert variant="danger">{error}</Alert>}
          <Form>
            <Form.Group id="email">
              <Form.Label>メールアドレス</Form.Label>
              <Form.Control type="email" ref={emailRef} required></Form.Control>
            </Form.Group>
            <Button onClick={handleSubmit} disabled={loading} className="w-100" type="submit">
              パスワード再発行
            </Button>
          </Form>
        </Card.Body>
      </Card>
    </section>
  );
};
