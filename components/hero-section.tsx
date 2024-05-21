import Hero from "./hero";
export default function HeroSection(hero) {
  return (
    <section className="my-12 px-4 lg:px-0">
      <Hero {...hero} />
    </section>
  );
}
