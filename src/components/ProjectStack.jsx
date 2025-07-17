
import { 
  SiReact, 
  SiNodedotjs, 
  SiExpress,  
  SiSocketdotio, 
  SiCloudinary, 
  SiTailwindcss, 
  SiJsonwebtokens ,
  SiRazorpay,
  SiFirebase,
  SiChartdotjs,
  SiGithub,
  SiFramer,
  SiMongodb
} from "react-icons/si";
import { FaExternalLinkAlt } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";

const ProjectStack = () => {

  const techStackBookBarter = [
  { name: "React.js", icon: <SiReact className="text-cyan-300" /> },
  { name: "Node.js", icon: <SiNodedotjs className="text-green-600" /> },
  { name: "Express.js", icon: <SiExpress className="text-gray-400" /> },
  { name: "Socket.io", icon: <SiSocketdotio className="text-gray-300" /> },
  { name: "Cloudinary", icon: <SiCloudinary className="text-blue-300" /> },
  { name: "JWT Auth", icon: <SiJsonwebtokens className="text-orange-400" /> }, 
  { name: "Tailwind CSS", icon: <SiTailwindcss className="text-cyan-400" /> },
  { name: "Google Auth", icon: <FcGoogle className="text-xl" /> },
  {name:"Razorpay", icon:<SiRazorpay className="text-blue-600"/>} 
];
const techStackManitType = [
  { name: "React.js", icon: <SiReact className="text-cyan-300" /> },
  { name: "Firebase", icon: <SiFirebase className="text-yellow-400" /> },
  { name: "Tailwind CSS", icon: <SiTailwindcss className="text-cyan-400" /> },
  { name: "Framer Motion", icon: <SiFramer className="text-pink-400" /> },
  { name: "Google Auth", icon: <FcGoogle className="text-xl" /> },
  { name: "Chart.js", icon: <SiChartdotjs className="text-red-400" /> },
  { name: "MongoDB", icon: <SiMongodb className="text-green-500" /> },
  { name: "Node.js", icon: <SiNodedotjs className="text-green-600" /> },
  { name: "Express.js", icon: <SiExpress className="text-gray-400" /> },
];

  return (
    <div className="relative w-full  max-w-4xl mx-auto px-4 py-8">
      {/* Container for the sticky project cards */}
      <div className="relative">
       
         
          
<div
  className={`
    sticky 
    mt-4 sm:mt-8
    bg-gradient-to-br from-gray-800 via-[#0f0f0f] to-gray-800
    overflow-hidden
    rounded-xl shadow-2xl
    p-6 sm:p-8 border border-white/20
    transform transition-all duration-300 ease-in-out
    flex flex-col md:flex-row items-center justify-between gap-6
    hover:scale-[1.01] hover:shadow-purple-500/50
    z-[30]
  `}
  style={{ top: `0rem` }}
>
  {/* Left text column */}
  <div className="w-full md:w-1/2 flex flex-col space-y-4">
    <div className="text-2xl sm:text-3xl font-semibold p-2 border-b border-white/20 w-full">
      MANIT Type
    </div>
    <div className="mt-2 text-gray-100 text-sm sm:text-base">
      Campus-exclusive real-time typing competition platform for MANIT.
      <ul className="list-disc list-inside mt-2 space-y-1">
        <li>Google login restricted to stu.manit.ac.in, accurate WPM & leaderboard tracking.</li>
        <li>Framer Motion animations, multi-mode typing, MongoDB-based stat history, progress graphs.</li>
        <li>Secure auth, segmented leaderboards by mode.</li>
      </ul>
      <div className="flex w-full flex-wrap mt-3">
        {techStackManitType.map((ts) => (
          <span
            key={ts.name}
            className="flex items-center justify-center space-x-2 border rounded-3xl border-white/20 px-2 py-1 m-1 text-xs sm:text-sm transition duration-300 ease-in-out hover:border-white hover:shadow-lg hover:shadow-white/20"
          >
            {ts.icon}
            <span>{ts.name}</span>
          </span>
        ))}
      </div>
      
    </div>
     <div className="flex items-center space-x-4">
      <button onClick={()=>{window.open("https://github.com/avinashchaturvedi2002/MANIT-TYPE.git","_blank")}}  className="flex space-x-2 items-center px-3 py-2 rounded-lg border text-sm ease-in-out duration-500 hover:bg-slate-600 border-white/20"><SiGithub/><span>GitHub</span></button>
      <button onClick={()=>{window.open("https://manit-type-mftz.vercel.app/","_blank")}}  className="flex space-x-2 items-center px-3 py-2 rounded-lg border text-sm ease-in-out duration-500 hover:bg-blue-600 border-white/20"><FaExternalLinkAlt/><span>Live Site</span></button>
    </div>
  </div>

  {/* Right image column */}
  <div className="w-full md:w-9/12 relative mt-6 md:mt-0 md:absolute md:-bottom-2 md:-right-1/4 md:hover:bottom-20 md:hover:right-24 transition-all duration-700 ease-in-out">
    <img
      src="/manittype.png"
      alt="Book Barter Preview"
      className="w-full object-cover rounded-2xl border-2 border-white/50"
    />
  </div>
</div>
<div
  className={`
    sticky 
    mt-4 sm:mt-8
    bg-gradient-to-br from-gray-800 via-[#0f0f0f] to-gray-800
    overflow-hidden
    rounded-xl shadow-2xl
    p-6 sm:p-8 border border-white/20
    transform transition-all duration-300 ease-in-out
    flex flex-col md:flex-row items-center justify-between gap-6
    hover:scale-[1.01] hover:shadow-purple-500/50
    z-[40]
  `}
  style={{ top: `8rem` }}
>
  {/* Left text column */}
  <div className="w-full md:w-1/2 space-y-4 flex flex-col">
    <div className="text-2xl sm:text-3xl font-semibold p-2 border-b border-white/20 w-full">
      Book Barter
    </div>
    <div className="mt-2 text-gray-100 text-sm sm:text-base">
      Full-stack book exchange platform with real-time communication and location-aware discovery.
      <ul className="list-disc list-inside mt-2 space-y-1">
        <li>Real-time chat system using Socket.IO</li>
        <li>MongoDB geospatial queries, infinite scroll, mobile-first UX</li>
        <li>Image uploads, Google login, secure transactions</li>
      </ul>
      <div className="flex w-full flex-wrap mt-3">
        {techStackBookBarter.map((ts) => (
          <span
            key={ts.name}
            className="flex items-center justify-center space-x-2 border rounded-3xl border-white/20 px-2 py-1 m-1 text-xs  transition duration-300 ease-in-out hover:border-white hover:shadow-lg hover:shadow-white/20"
          >
            {ts.icon}
            <span>{ts.name}</span>
          </span>
        ))}
      </div>
    </div>
    <div className="flex items-center space-x-4">
      <button onClick={()=>{window.open("https://github.com/avinashchaturvedi2002/book-barter.git","_blank")}} className="flex space-x-2 items-center px-3 py-2 rounded-lg border text-sm ease-in-out duration-500 hover:bg-slate-600 border-white/20"><SiGithub/><span>GitHub</span></button>
      <button onClick={()=>{window.open("https://book-barter-live.netlify.app/","_blank")}} className="flex space-x-2 items-center px-3 py-2 rounded-lg border text-sm ease-in-out duration-500 hover:bg-blue-600 border-white/20"><FaExternalLinkAlt/><span>Live Site</span></button>
    </div>
  </div>

  {/* Right image column */}
  <div className="w-full md:w-9/12 relative mt-6 md:mt-0 md:absolute md:-bottom-9 md:-right-1/4 md:hover:bottom-10 md:hover:right-24 transition-all duration-700 ease-in-out">
    <img
      src="/bookbarter.png"
      alt="Book Barter Preview"
      className="w-full object-cover rounded-2xl border-2 border-blue-400"
    />
  </div>
</div>
        
      </div>
    </div>
  );
};

export default ProjectStack;