import React, { useState } from 'react';
import { useHistory, Link } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';
import { Button, Card, Alert } from 'react-bootstrap';

export const UpdateProfile: React.FC = () => {
  const { updateEmail, updatePassword, currentUser } = useAuth();
  const history = useHistory();
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const handleUpdateProfile = () => {
    // try {
    //   setError('');
    //   setLoading(true);
    // } catch {
    //   setError('Failed to logout');
    // }
    // history.push('/');
    // setLoading(false);
  };
  return (
    <section>
      <Card>
        <Card.Body>
          <h2 className="text-center mb-4">プロフィール変更</h2>
          {error && <Alert variant="danger">{error}</Alert>}
          <strong>Email: {currentUser.email}</strong>
          <div className="w-100 text-center mt-2">
            <Button onClick={handleUpdateProfile} disabled={loading}>
              更新する
            </Button>
          </div>
        </Card.Body>
      </Card>
    </section>
  );
};
