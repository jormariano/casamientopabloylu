import { ReactNode } from 'react';
import { IconType } from 'react-icons';

export interface InfoCardProps {
  icon: IconType;
  title: string;
  children: ReactNode;
  className?: string;
}
