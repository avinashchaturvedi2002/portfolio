import Particles from "./components/Particles"
import  NavBar from "./components/NavBar"
import ShinyText from "./components/ShinyText"
import { FaArrowDown } from "react-icons/fa";
import TypingEffect from "./components/TypingEffect";
import SubHeading from "./components/SubHeading";
import AboutMeRightPane from "./components/AboutMeRightPane";
import AboutMeLeftPane from "./components/AboutMeLeftPane";
import ProjectStack from "./components/ProjectStack"
import MiniProjects from "./components/MiniProjects";
import ContactDiv from "./components/ContactDiv";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { initGA, logPageView } from "./ga";



export default function App() {
  
  const location = useLocation();

  useEffect(() => {
    initGA();
  }, []);

  useEffect(() => {
    logPageView();
  }, [location]);

  return (
   <div className="roboto  relative min-h-full w-full bg-gradient-to-br from-gray-800 via-black to-gray-800">
      {/* Background Particles */}
      <div className="fixed top-0 left-0 w-full h-16 bg-gradient-to-b from-black/60 to-transparent pointer-events-none z-40" />
      <Particles
        className="fixed top-0 left-0 w-full h-full z-0 pointer-events-none"
        particleColors={['#ffffff']}
        moveParticlesOnHover={true}
        particleHoverFactor={2}
      />

     

      {/* Foreground content */}
      <div className="relative z-10  text-white font-roboto py-2">
        <NavBar />
   <main id="home" className="flex flex-col justify-center items-center relative z-100 mt-32   sm:mt-44" >

    <ShinyText text={'Actively seeking job opportunities'}/>
    <div className="intro roboto  mt-4 font-extrabold text-5xl text-center leading-snug">
    Transforming Ideas <br />into  Impactful Web Applications
    </div>
    <div className="roboto mt-6 text-center text-lg font-semibold leading-relaxed p-2">
      Hey, I'm Avinash Chaturvedi, a Full Stack Developer focused on building fast, intuitive, and meaningful digital experiences  <br /> — from frontend interfaces to robust backend systems.
    </div>
    <div className="button-box space-y-6 sm:space-x-6 sm:space-y-0 mt-6 flex items-center justify-center flex-col sm:flex-row w-auto">
      <button onClick={()=>{window.open("https://www.linkedin.com/in/avinash-chaturvedi/","_blank")}} className="px-8 py-2  rounded-3xl border border-white w-52 flex flex-row items-center justify-around transition ease-in-out hover:scale-110 group"><span className="group-hover:animate-wave">👋</span> Let's connect</button>
      <button onClick={()=>{window.open("https://drive.google.com/file/d/1bbiGBw_SIbu5kUjfejiN7sZx7vwnVjfl/view?usp=sharing","_blank")}} className="px-8 py-2 rounded-3xl border border-white w-52 flex flex-row items-center justify-around transition ease-in-out hover:scale-110 group">My Resume <FaArrowDown className="mt-1 group-hover:animate-bounce"/></button>
    </div>
    </main>
    <section id="about" className="w-screen mt-52 flex flex-col items-center justify-center ">
      <TypingEffect text="GET TO KNOW ME"/>
      <SubHeading text="About Me"/>
      <div className="flex flex-col sm:flex-row sm:w-9/12  mt-10">
        <AboutMeLeftPane/>
        <AboutMeRightPane/>
      </div>
    </section>
    <section id="project" className="w-screen mt-44 flex flex-col items-center justify-center">
  <TypingEffect text="EXPLORE MY CREATIONS"/>
  <SubHeading text="Projects"/>
  <ProjectStack />
  <MiniProjects/>

</section>
<section id="contact" className="w-screen  mt-44 flex flex-col items-center justify-center ">
    <TypingEffect text="GET IN TOUCH"/>
      <SubHeading text="Contact Me"/>
      <ContactDiv/>
</section>

  
      <footer className="w-full border-t border-white/20 p-8 text-center mt-20">
        © 2025 Avinash Chaturvedi. All rights reserved.
      </footer>
  
      </div>
    </div>
  );
}


