import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import GradientChangingText from "./GradientChangingText";
export default function SubHeading({text,className=""})
{

  return (
    <motion.div initial={{opacity:0,y:30}} whileInView={{opacity:1,y:0}} transition={{duration:0.3}} >
    <GradientChangingText text={text} className={className}/>
  </motion.div>
  )
  
}