import React, { useState } from 'react';
import { useHistory, Link } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';
import { Button, Card, Alert } from 'react-bootstrap';

export const MyPage: React.FC = () => {
  const { logout, currentUser } = useAuth();
  const history = useHistory();
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const handleLogout = () => {
    try {
      setError('');
      setLoading(true);
      logout();
    } catch {
      setError('Failed to logout');
    }
    history.push('/');
    setLoading(false);
  };
  return (
    <section>
      <Card>
        <Card.Body>
          <h2 className="text-center mb-4">マイページ</h2>
          {error && <Alert variant="danger">{error}</Alert>}
          <div>
            <strong>Email: {currentUser.email}</strong>
          </div>
          <Link to="/update-profile">プロフィール更新</Link>
          <Button className="w-100" variant="link" onClick={handleLogout} disabled={loading}>
            ログアウトする
          </Button>
        </Card.Body>
      </Card>
    </section>
  );
};
