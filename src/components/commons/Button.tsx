import React, { FC, ReactNode } from 'react';
import styled, { css } from 'styled-components';
import colors from '../commons/colors';

type ButtonProps = {
  children: ReactNode;
  variant?: 'primary' | 'secondary';
};

const styles = {
  primary: css`
    color: ${colors.WHITE};
    background-color: ${colors.BLUE};
    border-style: none;
  `,
  secondary: css`
    color: ${colors.BLUE};
    background-color: ${colors.WHITE};
    border: 2px solid ${colors.BLUE};
  `,
};

export const Button: FC<ButtonProps> = ({ children, variant }) => (
  <StyledButton variant={variant}>{children}</StyledButton>
);

const StyledButton = styled.button`
  font-size: 1em;
  margin: 1em;
  padding: 0.25em 1em;
  border-radius: 3px;
  ${({ variant }) => (variant ? styles[variant] : styles.primary)}
`;
