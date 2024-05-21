import Hero from "./hero";
export default function HeroSection(hero) {
  return (
    <section className="my-12 overflow-hidden rounded-2xl">
      <Hero {...hero} />
    </section>
  );
}
