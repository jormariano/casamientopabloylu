import clsx from 'clsx';
import { InfoCardProps } from '@/src/types/infoCard.types';

const InfoCard = ({ icon, title, children, className }: InfoCardProps) => {
  const Icon = icon;
  const size = 30;
  const color = 'text-rust';

  return (
    <div
      className={clsx(
        'bg-cream-2',
        'm-2',
        'px-10',
        'py-5',
        'flex',
        'flex-1',
        'flex-col',
        'items-center',
        'gap-1',
        'rounded-md',
        'md:px-20',
        'md:py-10',
        className,
      )}
    >
      <Icon size={size} className={color} />
      <h3 className="text-sm font-normal">{title}</h3>
      <p>{children}</p>
    </div>
  );
};

export default InfoCard;
