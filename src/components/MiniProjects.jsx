import { SiTailwindcss, SiJavascript, SiReact, SiGithub,SiCss3 } from "react-icons/si";
import { FaExternalLinkAlt } from "react-icons/fa";
import SubHeading from "./SubHeading";
import { animate, easeInOut, easeOut, motion, scale } from "framer-motion";
export default function MiniProjects(){
const miniProjects = [
  {
    title: "Razorpay Clone",
    description: "Responsive Razorpay UI clone using Tailwind CSS.",
    github: "https://github.com/avinashchaturvedi2002/razorpay-clone",
    live: "https://razorpay-clone-4r7u.vercel.app/",
    icon: <SiTailwindcss className="text-blue-600" />,
  },
  {
    title: "Manit-Weather",
    description: "Weather app fetching data via API with geolocation and UV index display.",
    github: "https://github.com/avinashchaturvedi2002/manit-weather",
    live: "https://manit-weather.vercel.app/",
    icon: <SiReact className="text-cyan-300" />,
  },
  {
    title: "Amazon Clone",
    description: "E‑commerce UI clone built with HTML & CSS; replicates Amazon’s layout and responsive design.",
    github: "https://github.com/avinashchaturvedi2002/Amazon-Clone",
    live: undefined, // no live link
    icon: <SiCss3 className="text-orange-600" />,
  },
  {
    title: "Tic‑Tac‑Toe Game",
    description: "Classic Tic‑Tac‑Toe built with vanilla JavaScript—interactive and fun.",
    github: "https://github.com/avinashchaturvedi2002/Tic-Tac-Toe",
    live: undefined,
    icon: <SiJavascript className="text-yellow-400" />,
  },
  {
    title: "Rock‑Paper‑Scissors",
    description: "Simple RPS game with JavaScript logic and UI.",
    github: "https://github.com/avinashchaturvedi2002/Rock-Paper-Scissors",
    live: undefined,
    icon: <SiJavascript className="text-yellow-400" />,
  },
  {
    title: "Currency Converter",
    description: "Fetches live currency rates via API and converts currencies dynamically.",
    github: "https://github.com/avinashchaturvedi2002/Currency-Converter",
    live: undefined,
    icon: <SiJavascript className="text-yellow-400" />,
  },
  {
    title: "Food‑Rescue",
    description: "Platform connecting restaurants & NGOs to reduce food waste—built with VB.NET.",
    github: "https://github.com/avinashchaturvedi2002/Food-Rescue",
    live: undefined,
    icon: <img src="/visual-basic.png" className="w-5 h-5" />,
  },
  
  {
    title: "Avinash Adventures",
    description: "Blog-style travel site showcasing adventures with responsive design.",
    github: "https://github.com/avinashchaturvedi2002/avinash-adventures",
    live: undefined,
    icon: <SiCss3 className="text-orange-600" />,
  },
  {
    title: "Password Generator",
    description: "Random password generator with copy-to-clipboard and strength meter.",
    github: "https://github.com/avinashchaturvedi2002/password-generator",
    live: undefined,
    icon: <SiJavascript className="text-yellow-400" />,
  },
];
return(
  <div className="max-w-6xl mx-auto px-4 py-10">
   <h3 className={` pb-2 text-2xl sm:text-4xl  font-semibold opacity-80 text-center bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 bg-clip-text text-transparent  bg-[length:200%_200%] animate-gradient `}>
      Mini Projects
    </h3>
  
  <div className="grid mt-4 sm:grid-cols-2 lg:grid-cols-3 gap-6">
    {miniProjects.map((project) => (
      <motion.div
  key={project.title}
  initial={{ opacity: 0, scale: 0.95, y: 20 }}
  whileInView={{ opacity: 1, scale: 1, y: 0 }}
  viewport={{  amount: 0.3 }}
  transition={{ duration: 0.6, ease: "easeOut" }}
  className="bg-[#121212] opacity-80 border border-white/10 h-36 p-4 rounded-xl transition relative"
>
        <div className="text-lg font-semibold mb-2 flex items-center space-x-2">
          <span>{project.icon}</span>
          <span>{project.title}</span>
        </div>
        <p className="text-sm text-gray-300 mb-4">{project.description}</p>
        <div className="flex space-x-3 text-sm absolute bottom-2">
          {project.github && (
            <a href={project.github} target="_blank" className="flex items-center space-x-1 hover:text-purple-400 transition">
              <SiGithub /><span>GitHub</span>
            </a>
          )}
          {project.live && (
            <a href={project.live} target="_blank" className="flex items-center space-x-1 hover:text-purple-400 transition">
              <FaExternalLinkAlt /><span>Live</span>
            </a>
          )}
        </div>
      </motion.div>
    ))}
  </div>
</div>
)

}