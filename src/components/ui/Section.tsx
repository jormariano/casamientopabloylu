import clsx from 'clsx';
import { ContainerProps } from '@/src/types/container.types';

const Section = ({ children, className }: ContainerProps) => {
  return (
    <section
      className={clsx(
        'text-cream',
        'p-10',
        'flex',
        'flex-1',
        'flex-col',
        'items-center',
        'gap-2',
        className,
      )}
    >
      {children}{' '}
    </section>
  );
};

export default Section;
