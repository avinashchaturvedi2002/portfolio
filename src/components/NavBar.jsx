
import {FaHome,FaCode,FaLinkedin} from "react-icons/fa"
import { IoIosContact, IoIosMail, IoLogoGithub } from "react-icons/io";

import { SiLeetcode } from "react-icons/si";
export default function NavBar(){
const items = [
    { icon: <FaHome  className='text-white w-6 h-6' />, label: 'Home', targetId: 'home' },
    { icon: <IoIosContact  className='text-white w-6 h-6'/>, label: 'Profile', targetId: 'about' },
    { icon: <FaCode  className='text-white w-6 h-6' />, label: 'Projects', targetId: 'project' },
    { icon: <IoIosMail  className='text-white w-6 h-6'/>, label: 'Contact', targetId: 'contact' },
    { icon: <FaLinkedin  className='text-white w-5 h-5'/>, label: 'LinkedIn', url: 'https://www.linkedin.com/in/avinash-chaturvedi/' },
    { icon: <SiLeetcode  className='text-white w-5 h-5'/>, label: 'LeetCode', url: 'https://www.leetcode.com/u/avinashchaturvedi2002/' },
    { icon: <IoLogoGithub  className='text-white w-6 h-6'/>, label: 'Github', url: 'https://www.github.com/avinashchaturvedi2002/' },

  ];
  const handleClick = (item) => {
    if (item.url) {
      window.open(item.url, "_blank");
    } else if (item.targetId) {
      const element = document.getElementById(item.targetId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth',block:'start' });
      }
    }
  };
  return(
    <div className="w-full flex justify-center items-center ">
    <div className="flex items-center justify-around space-x-4 rounded-3xl border border-white top-4 h-8 py-6 px-4 fixed bg-black z-50">
    {items.map((it)=>{return <button className="flex group rounded-full p-1 hover:bg-gray-400/50 items-center content-center hover:scale-110 transition-all duration-500"  key={it.label} onClick={() => handleClick(it)}>
     {it.icon}
     <span className="absolute top-full mb-2 w-max px-2 py-1 text-xs text-black bg-white rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-50">
    {it.label}
  </span>
    </button>})}
    </div>
    </div>
    
  )

}
  

  