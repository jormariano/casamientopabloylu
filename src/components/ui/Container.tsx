import { ContainerProps } from '@/src/types/container.types';
import clsx from 'clsx';

const Container = ({ children, className }: ContainerProps) => {
  return <div className={clsx('w-full', className)}>{children}</div>;
};

export default Container;
