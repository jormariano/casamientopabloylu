import { FaRegCalendar } from 'react-icons/fa';
import { MdAccessTime } from 'react-icons/md';
import { BsHouseDoor } from 'react-icons/bs';
import { FiMapPin } from 'react-icons/fi';

const EventDetails = () => {
  const cards = [
    {
      id: 1,
      label: 'Fecha',
      description: '7 de Febrero de 2027',
      icon: <FaRegCalendar className="text-rust" size={40} />,
    },
    {
      id: 2,
      label: 'Hora',
      description: '11:30 hs.',
      icon: <MdAccessTime className="text-rust" size={40} />,
    },
    {
      id: 3,
      label: 'Lugar',
      description: 'Quinta Las Helenas',
      icon: <BsHouseDoor className="text-rust" size={40} />,
    },
    {
      id: 4,
      label: 'Dirección',
      description: '161 y 40 Lisandro Olmos',
      icon: <FiMapPin className="text-rust" size={40} />,
    },
  ];
  return (
    <section className="flex flex-1 flex-col items-center font-bold">
      <h2>La info</h2>
      <div className="grid grid-cols-2 p-1">
        {cards.map((card, id) => {
          return (
            <article
              key={id}
              className="bg-cream-2 m-2 px-20 py-10 flex flex-1 flex-col items-center gap-1 rounded-md"
            >
              {card.icon}
              <h3>{card.label}</h3>
              <p>{card.description}</p>
            </article>
          );
        })}
      </div>
    </section>
  );
};

export default EventDetails;
