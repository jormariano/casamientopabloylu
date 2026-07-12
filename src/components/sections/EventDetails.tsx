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
            const Icon = card.icon;

            return (
              <InfoCard>
                <article
                  key={card.id}
                  className="bg-cream-2 m-2 px-10 py-5 flex flex-1 flex-col items-center gap-1 rounded-md md:px-20 md:py-10"
                >
                  <Icon size={30} className="text-rust" />
                  <h3 className="text-sm font-normal">{card.label}</h3>
                  <p>{card.description}</p>
                </article>
              </InfoCard>
            );
          })}
        </div>
      </Section>
    </Container>
  );
};

export default EventDetails;
