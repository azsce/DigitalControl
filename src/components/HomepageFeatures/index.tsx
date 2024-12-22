import clsx from "clsx";
import Heading from "@theme/Heading";
import styles from "./styles.module.css";
import { JSX } from "react";

type FeatureItem = {
  title: string;
  // Svg: React.ComponentType<React.ComponentProps<'svg'>>;
  description: JSX.Element;
};

const FeatureList: FeatureItem[] = [
  {
    title: "Comprehensive Tutorials",
    // Svg: require('@site/static/img/undraw_digital_control_tutorials.svg').default,
    description: (
      <>
        Our tutorials cover all aspects of digital control systems, from basic
        concepts to advanced techniques.
      </>
    ),
  },
  {
    title: "Hands-On Examples",
    // Svg: require('@site/static/img/undraw_hands_on_examples.svg').default,
    description: (
      <>
        Learn by doing with practical examples and exercises that reinforce key
        concepts and skills.
      </>
    ),
  },
  {
    title: "Expert Guidance",
    // Svg: require('@site/static/img/undraw_expert_guidance.svg').default,
    description: (
      <>
        Get insights and tips from industry experts to help you master digital
        control systems.
      </>
    ),
  },
];

function Feature({
  title,
  //  Svg,
  description,
}: FeatureItem) {
  return (
    <div className={clsx("col col--4")}>
      {/* <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div> */}
      <div className="text--center padding-horiz--md">
        <Heading as="h3">{title}</Heading>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures(): JSX.Element {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
