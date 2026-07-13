import { SectionTitleProps } from '@/src/types/sectionTitle.types';
import clsx from 'clsx';

const SectionTitle = ({ children, className }: SectionTitleProps) => {
  return (
    <h2
      className={clsx(
        'text-2xl',
        'md:text-3xl',
        'font-bold',
        'text-center',
        className,
      )}
    >
      {children}
    </h2>
  );
};

export default SectionTitle;
