import { experienceContent } from "@/content";
import { StickySplitReveal } from "@/components/motion/sticky-split-reveal";
import { Reveal } from "@/components/motion/reveal";

export function Experience() {
  const images = [
    "/images/experience-1.jpg",
    "/images/experience-2.png"
  ];

  return (
    <div id="experience">
      <StickySplitReveal images={images}>
        <div className="flex flex-col gap-6">
          <Reveal delay={0.1} direction="up">
            <h3 className="text-[var(--color-brass)] tracking-widest text-xs font-bold uppercase">
              {experienceContent.eyebrow}
            </h3>
          </Reveal>
          <Reveal delay={0.3} direction="up">
            <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl text-[var(--color-cream)] leading-tight">
              {experienceContent.headline}
            </h2>
          </Reveal>
          <Reveal delay={0.5} direction="up">
            <p className="text-[var(--color-cream)]/80 text-lg md:text-xl leading-relaxed font-light">
              {experienceContent.body}
            </p>
          </Reveal>
        </div>
      </StickySplitReveal>
    </div>
  );
}
