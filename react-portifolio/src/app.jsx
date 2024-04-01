import styles from "./app.module.css";
import { About } from "./components/about/about";
import { Contact } from "./components/contact/contact";
import { Experience } from "./components/experience/experience";
import { Hero } from "./components/hero/hero";
import { Navbar } from "./components/navbar/navbar";
import { Projects } from "./components/projects/projects";

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

export default App;
