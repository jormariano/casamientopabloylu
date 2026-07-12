import { IconType } from 'react-icons';
import { FaRegCalendar } from 'react-icons/fa';
import { MdAccessTime } from 'react-icons/md';
import { BsHouseDoor } from 'react-icons/bs';
import { FiMapPin } from 'react-icons/fi';

export type EventCards = {
  id: number;
  label: string;
  description: string;
  icon: IconType;
};

export const cards: EventCards[] = [
  {
    id: 1,
    label: 'Fecha',
    description: '7 de Febrero de 2027',
    icon: FaRegCalendar,
  },
  {
    id: 2,
    label: 'Hora',
    description: '11:30 hs.',
    icon: MdAccessTime,
  },
  {
    id: 3,
    label: 'Lugar',
    description: 'Quinta Las Elenas',
    icon: BsHouseDoor,
  },
  {
    id: 4,
    label: 'Dirección',
    description: '161 y 40 Lisandro Olmos',
    icon: FiMapPin,
  },
];
