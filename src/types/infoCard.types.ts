import { IconType } from 'react-icons';

export interface InfoCardProps {
  icon: IconType;
  title: string;
  children: React.ReactNode;
  className?: string;
}
