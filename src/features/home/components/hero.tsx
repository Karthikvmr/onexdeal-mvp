import Container from "@/components/common/Container";

import HeroContent from "./HeroContent";
import HeroIllustration from "./HeroIllustration";

const Hero = () => {
  return (
    <section className="bg-slate-50 py-20">
      <Container>
        <div className="grid items-center gap-16 lg:grid-cols-2">
          <HeroContent />

          <HeroIllustration />
        </div>
      </Container>
    </section>
  );
};

export default Hero;