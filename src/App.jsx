import Navbar from "./comonents/Navbar";
import About from "./Pages/About";
import Hero from "./comonents/Hero";
import MyResume from  "./Pages/MyResume";
import Skills from "./Pages/Skills";
import Works from "./Pages/Works";
import Contact from "./Pages/Contact";
import Footer from "./comonents/Footer";
import { motion, useScroll, useSpring } from "framer-motion";

const App = () => {

  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });


  return (
    <>
     
      <Navbar/>  
      <Hero id="hero"/>
      <About id="about"/>
      <MyResume id="resume"/>
      <Skills id="skills"/>
      <Works id="works"/>
      <Contact id="conact"/>
      <motion.div className="progress-bar" style={{ scaleX }} />
      <Footer/>
    </>
  )
}

export default App;