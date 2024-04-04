// import React from "react";

import styles from "./hero.module.css";
import { getImageUrl } from "../../utils";

export const Hero = () => {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>Hi, Im Matheus</h1>
        <p className={styles.description}>
        Welcome to my portfolio! I'm a skilled and
            creative full-stack web developer with a passion for creating beautiful,
            responsive, and user-friendly websites. Reach out if you do like to learn more!
        </p>
        <a href="mailto:math.francisco2@gmail.com" className={styles.contactBtn}>
          Contact Me
        </a>
      </div>
      <img
        src={getImageUrl("hero/about.png")}
        alt="Hero image of me"
        className={styles.heroImg}
      />
      <div className={styles.topBlur} />
      <div className={styles.bottomBlur} />
    </section>
  );
};
