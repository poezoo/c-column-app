import React, { Component } from 'react';
import styled from 'styled-components';
import { Container } from 'react-bootstrap';

export const BootstrapedContainer: React.FC = ({ children }) => (
  <Container className="d-flex align-items-center justify-content-center" style={{ minHeight: '100vh' }}>
    <div className="w-100" style={{ maxWidth: '600px' }}>
      {children}
    </div>
  </Container>
);
