import { ReactNode } from 'react';

interface ContainerProps {
  children: ReactNode;
  className?: string;
  [propName: string]: ReactNode | string | undefined;
}

const Container = ({ children, className = '', ...rest }: ContainerProps) => {
  return (
    <div className={`bg-red mt-20 mb-10 lg:mt-0 p-9 ${className}`} {...rest}>
      {children}
    </div>
  );
};

export default Container;
