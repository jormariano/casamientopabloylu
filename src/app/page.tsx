import Hero from '@/src/components/sections/Hero';
import EventDetails from '@/src/components/sections/EventDetails';
import RSVP from '../components/sections/RSVP';
import Map from '../components/sections/Map';
import ContainerDivider from '../components/ui/ContainerDivider';
import Footer from '../components/sections/Footer';

export default function Home() {
  return (
    <main className="flex flex-1 w-full flex-col items-center">
      <Hero />
      <EventDetails />
      <ContainerDivider />
      <RSVP />
      <ContainerDivider />
      <Map />
      <ContainerDivider />
      <Footer />
    </main>
  );
}
