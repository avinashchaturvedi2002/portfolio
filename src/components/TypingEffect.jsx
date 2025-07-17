import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Typewriter } from "react-simple-typewriter";
export default function TypingEffect({text="hello"})
{
   const [ref, inView] = useInView({
    triggerOnce: false,
  });
  return (
    <motion.h4
      ref={ref}
      initial={{ opacity: 0 }}
      animate={inView ? { opacity: 1 } : {}}
      transition={{ duration: 0.5 }}
      className=" font-semibold text-center mb-4"
    >
      {inView && (
        <Typewriter
          words={[text]}
          loop={1}
          cursor
          cursorStyle=""
          typeSpeed={60}
          deleteSpeed={0}
          delaySpeed={1000}
        />
      )}
    </motion.h4>
  );

}