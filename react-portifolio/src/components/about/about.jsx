// import React from "react" // React não é usado diretamente neste código

import styles from "./about.module.css"; // Importa estilos CSS
import { getImageUrl } from "../../utils"; // Função para obter endereços de imagens

export const About = () => {
  return (
    <section className={styles.container} id="about">
      {/* Título da seção */}
      <h2 className={styles.title}>About</h2>

      {/* Container para o conteúdo */}
      <div className={styles.content}>
        {/* Imagem da pessoa */}
        <img
          src={getImageUrl("about/about-lado.png")}
          alt="Me sitting with a laptop"
          className={styles.aboutImage}
        />

        {/* Lista de habilidades */}
        <ul className={styles.aboutItems}>
          {/* Item da lista (habilidade Frontend Developer) */}
          <li className={styles.aboutItem}>
            <img src={getImageUrl("about/cursorIcon.png")} alt="Cursor icon" />
            <div className={styles.aboutItemText}>
              <h3>Frontend Developer</h3>
              <p>
                I'm a frontend developer with experience in building responsive
                and optimized sites
              </p>
            </div>
          </li>

          {/* Item da lista (habilidade UI Designer) */}
          <li className={styles.aboutItem}>
            <img src={getImageUrl("about/serverIcon.png")} alt="Server icon" />
            <div className={styles.aboutItemText}>
              <h3>UI Designer</h3>
              <p>
                I have designed multiple landing pages and have created design
                systems as well
              </p>
            </div>
          </li>

          {/* Item da lista (habilidade Backend Developer) */}
          <li className={styles.aboutItem}>
            <img src={getImageUrl("about/cursorIcon.png")} alt="UI icon" />
            <div className={styles.aboutItemText}>
              <h3>Backend Developer</h3>
              <p>
                I have experience developing fast and optimized back-end systems
                and APIs
              </p>
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
};
