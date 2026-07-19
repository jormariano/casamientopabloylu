import Container from '../ui/Container';
import Section from '../ui/Section';
import SectionTitle from '../ui/SectionTitle';
import InfoCard from '../ui/InfoCard';
import { cards } from '@/src/constants/eventDetails.constants';

const EventDetails = () => {
  return (
    <Container>
      <Section className="text-ink font-bold text-center pt-2">
        <SectionTitle>La info</SectionTitle>
        <div className="grid grid-cols-1 gap-4 p-1 md:grid-cols-2 justify-items-center">
          {cards.map((card, index) => {
            const isLast = index === cards.length - 1;

            return (
              <div
                key={card.id}
                className={`${isLast ? 'md:col-span-2 justify-self-center w-full md:w-1/2' : 'w-full'}`}
              >
                <InfoCard icon={card.icon} title={card.label}>
                  {card.description}
                </InfoCard>
              </div>
            );
          })}
        </div>
      </Section>
    </Container>
  );
};

export default EventDetails;
