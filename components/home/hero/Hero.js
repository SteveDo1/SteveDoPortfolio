import { StandardButton } from "@/components/buttons/StandardButton";
import { Reveal } from "@/components/utils/Reveal";
import { DotGrid } from "./DotGrid";
import styles from "./hero.module.scss";
import { TypeAnimation } from 'react-type-animation';

export const Hero = () => {
  return (
    <section className={`section-wrapper ${styles.hero}`}>
      <div className={styles.copyWrapper}>
        <Reveal>
          <h1 className={styles.title}>
            hi, i&apos;m steve<span>.</span>
          </h1>
        </Reveal>
        <Reveal>
          <h2 className={styles.subTitle}>
            I&apos;m a <span>
              <TypeAnimation
              preRenderFirstString={true}
              sequence={[
                'Full Stack Developer.',
                1300,
                'problem solver.',
                1300,
                'continuous learner.',
                1300,
                'mechanical keyboard hobbyist.',
                1300,
                'gamer.',
                1300,
              ]}
              speed={40}
              repeat={Infinity}
              />
              </span>
          </h2>
        </Reveal>
        <Reveal>
          <p className={styles.aboutCopy}>
            I&apos;m a recent new grad that spent the last couple of years building and scaling software for
            some pretty cool companies. I also come from a business background where I hope to transfer my knowledge into the tech industry.
            <br />Let&apos;s connect! 🤙 
          </p>
        </Reveal>
        <Reveal>
          <StandardButton
            onClick={() => document.getElementById("contact")?.scrollIntoView()}
          >
            Contact me
          </StandardButton>
        </Reveal>
      </div>
      <DotGrid />
    </section>
  );
};
