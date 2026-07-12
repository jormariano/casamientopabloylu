import Hero from '@/src/components/sections/Hero';
import EventDetails from '@/src/components/sections/EventDetails';

export default function Home() {
  return (
    <main className="flex flex-1 w-full flex-col items-center">
      <Hero />
      <EventDetails />
    </main>
  );
}
