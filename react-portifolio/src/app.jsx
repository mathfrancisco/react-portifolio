// Importa o arquivo de estilos CSS específico do componente App
import { useTranslation } from "react-i18next";
import styles from "./app.module.css";
// Importa componentes individuais da pasta components
import { About } from "./components/about/about";
import { Contact } from "./components/contact/contact";
import { Experience } from "./components/experience/experience";
import { Hero } from "./components/hero/hero";
import { Navbar } from "./components/navbar/navbar";
import { Projects } from "./components/projects/projects";
// import "./i18n/index";

// Define o componente principal da aplicação (função App)
function App() {
  return (
    <div className={styles.App}>
    
      <Navbar />
      <Hero />
      <About />
      <Experience />
      <Projects />
      <Contact />
    </div>
  );
}
// Exporta o componente App como componente principal
export default App;
