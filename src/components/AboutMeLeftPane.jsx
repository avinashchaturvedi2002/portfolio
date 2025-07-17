import {motion} from "framer-motion"
import { FaLocationDot } from "react-icons/fa6";
export default function AboutMeLeftPane(){
  return(
    <div className="flex p-4 flex-col sm:w-1/3 items-center space-y-2 border-r border-white/20"> 
              <motion.div className="rounded-full border border-white/20 bg-black mt-2" whileInView={{opacity:100,x:0,y:0}} initial={{opacity:0,x:-30,y:30}} transition={{duration:0.6}}>
                <img src="/21BCAB12-removebg-preview.png" alt=""  className="w-40 h-40 rounded-full opacity-80"/>
              </motion.div>
              <motion.div className="text-center px-2 py-4 border-b border-white/20" whileInView={{opacity:100,x:0,y:0}} initial={{opacity:0,x:-30,y:30}} transition={{duration:0.6}}>
                 I’m a developer who loves turning ideas into scalable, user-centric products. I enjoy building full-stack apps from
     the ground up, solving real-world problems, and constantly pushing to learn better ways to ship clean, efficient,
     and production-ready code
              </motion.div>
              <motion.div whileInView={{opacity:100,x:0,y:0}} initial={{opacity:0,x:-30,y:30}} transition={{duration:0.6}}>
                <div className="w-full flex items-center space-x-2"><FaLocationDot/> <span>Bhopal, Madhya Pradesh, India</span></div>
              </motion.div>
            </div>
  )
}