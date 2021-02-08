import React from 'react';
import styled, { css } from 'styled-components';
import colors from '../commons/colors';

type ButtonProps = {
  variant?: 'primary' | 'secondary';
};

export const Button: React.FC<ButtonProps> = ({ children, variant }) => (
  <StyledButton variant={variant}>{children}</StyledButton>
);

const styles = {
  primary: css`
    color: ${colors.WHITE};
    background-color: ${colors.BLUE};
  `,
  secondary: css`
    color: ${colors.BLUE};
    background-color: ${colors.WHITE};
    border: 2px solid ${colors.BLUE};
  `,
};

const StyledButton = styled.button<Pick<ButtonProps, 'variant'>>`
  font-size: 1em;
  margin: 1em;
  padding: 0.25em 1em;
  border-radius: 3px;
  ${({ variant }) => (variant ? styles[variant] : styles.primary)}
`;
