import Hero from './sections/Hero';
import About from './sections/About';
import Facts from './sections/Facts';
import Resume from './sections/Resume'

export default function Home() {
  return (
    <>
      <Hero />
      <main id="id">
        <About />
        <Facts />
        <Resume/>
      </main>
    </>
  );
}
