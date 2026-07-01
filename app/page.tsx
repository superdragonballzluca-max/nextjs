import Hero from './sections/Hero';
import About from './sections/About';
import Facts from './sections/Facts';

export default function Home() {
  return (
    <>
      <Hero />
      <main id="id">
        <About />
        <Facts />
      </main>
    </>
  );
}
