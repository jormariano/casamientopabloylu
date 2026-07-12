import clsx from 'clsx';

const SectionTitle = ({ children, className }: SectionTitleProps) => {
  return (
    <h2
      className={clsx(
        'text-3xl',
        'md:text-4xl',
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
