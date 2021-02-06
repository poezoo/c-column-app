import React, { useState, useRef } from 'react';
import { useHistory, Link } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';
import { Button, Card, Alert, Form } from 'react-bootstrap';

export const UpdateProfile: React.FC = () => {
  const emailRef = useRef<HTMLInputElement>();
  const passwordRef = useRef<HTMLInputElement>();
  const passwordConfirmRef = useRef<HTMLInputElement>();
  const { currentUser, updatePassword, updateEmail } = useAuth();
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const history = useHistory();

  function handleSubmit(e) {
    e.preventDefault();
    if (passwordRef.current.value !== passwordConfirmRef.current.value) {
      return setError('Passwords do not match');
    }

    const promises = [];
    setLoading(true);
    setError('');

    if (emailRef.current.value !== currentUser.email) {
      promises.push(updateEmail(emailRef.current.value));
    }
    if (passwordRef.current.value) {
      promises.push(updatePassword(passwordRef.current.value));
    }

    Promise.all(promises)
      .then(() => {
        history.push('/');
      })
      .catch(() => {
        setError('Failed to update account');
      })
      .finally(() => {
        setLoading(false);
      });
  }

  return (
    <>
      <Card>
        <Card.Body>
          <h2 className="text-center mb-4">プロフィール更新</h2>
          {error && <Alert variant="danger">{error}</Alert>}
          <Form onSubmit={handleSubmit}>
            <Form.Group id="email">
              <Form.Label>メールアドレス</Form.Label>
              <Form.Control type="email" ref={emailRef} required defaultValue={currentUser.email} />
            </Form.Group>
            <Form.Group id="password">
              <Form.Label>パスワード</Form.Label>
              <Form.Control type="password" ref={passwordRef} placeholder="変更しない場合は空のままにしてください" />
            </Form.Group>
            <Form.Group id="password-confirm">
              <Form.Label>Password Confirmation</Form.Label>
              <Form.Control
                type="password"
                ref={passwordConfirmRef}
                placeholder="変更しない場合は空のままにしてください"
              />
            </Form.Group>
            <Button disabled={loading} className="w-100" type="submit">
              更新する
            </Button>
          </Form>
        </Card.Body>
      </Card>
      <div className="w-100 text-center mt-2">
        <Link to="/">更新しない</Link>
      </div>
    </>
  );
};
