import Hero from './Hero';
import About from './About';

export default function Home() {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 w-full">
      <Hero />
      <About />
    </div>
  );
}
