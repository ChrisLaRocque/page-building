import CarouselHero from "./carousel-hero";
import Split from "./split";
import HeroSection from "./hero-section";
import Cards from "./cards";
import FAQ from "./faq";
import IconCards from "./icon-cards";

export default function SectionResolver({ section }) {
  switch (section._type) {
    case "carouselHero":
      return <CarouselHero {...section} />;
    case "hero":
      return <HeroSection {...section} />;
    case "split":
      return <Split {...section} />;
    case "cards":
      return <Cards {...section} />;
    case "frequentlyAskedQuestions":
      return <FAQ {...section} />;
    case "iconCards":
      return <IconCards {...section} />;
    default:
      console.log("no component", section);
      return null;
  }
}
