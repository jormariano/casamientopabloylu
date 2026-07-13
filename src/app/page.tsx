import Hero from '@/src/components/sections/Hero';
import EventDetails from '@/src/components/sections/EventDetails';
import RSVP from '../components/sections/RSVP';
import ContainerDiveder from '../components/ui/ContainerDiveder';

export default function Home() {
  return (
    <main className="flex flex-1 w-full flex-col items-center">
      <Hero />
      <ContainerDiveder />
      <EventDetails />
      <ContainerDiveder />
      <RSVP />
      <ContainerDiveder />
    </main>
  );
}
