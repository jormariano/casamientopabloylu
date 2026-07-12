import Hero from '@/components/Hero';
import EventDetails from '@/components/EventDetails';

export default function Home() {
  return (
    <main className="flex flex-1 w-full flex-col items-center">
      <Hero />
      <EventDetails />
    </main>
  );
}
