import Container from '../ui/Container';
import Section from '../ui/Section';
import SectionTitle from '../ui/SectionTitle';
import InfoCard from '../ui/InfoCard';
import { cards } from '@/src/constants/eventDetails.constants';

const EventDetails = () => {
  return (
    <Container>
      <Section className="text-ink font-bold text-center">
        <SectionTitle>La info</SectionTitle>
        <div className="grid grid-cols-1 p-1 md:grid-cols-2">
          {cards.map((card) => {
            return (
              <InfoCard key={card.id} icon={card.icon} title={card.label}>
                {card.description}
              </InfoCard>
            );
          })}
        </div>
      </Section>
    </Container>
  );
};

export default EventDetails;
