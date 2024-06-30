import { ReactNode } from 'react';
import styled from '@emotion/styled';

interface CardProps {
  children: ReactNode;
  className?: string;
  [propName: string]: unknown;
}

const Card = ({ children, className = '', ...others }: CardProps) => {
  return (
    <StyledCard
      className={`bg-white rounded-xl transition-all duration-300 shadow-sm ${className} `}
      {...others}
    >
      {children}
    </StyledCard>
  );
};

const StyledCard = styled.div`
  background-color: hsla(0, 0%, 100%, 0.05);
  box-shadow: inset 0 0 0 1px hsla(0, 0%, 100%, 0.05);
`;

export default Card;
