import {
    SiHtml5,
    SiCss3,
    SiJavascript,
    SiTailwindcss,
    SiReact,
    SiFramer,
    SiNodedotjs,
    SiExpress,
    SiMongodb,
    SiPostman,
    SiRedux,
    SiGit,
    SiGithub,
    SiVercel,
    SiCplusplus,
    SiSocketdotio,
    SiCloudinary,
} from "react-icons/si";
import {motion} from "framer-motion"

export default function AboutMeRightPane(){
    const techStack = [
        { name: "HTML", icon: <SiHtml5 className="text-orange-600" /> },
        { name: "CSS", icon: <SiCss3 className="text-blue-600" /> },
        { name: "JavaScript", icon: <SiJavascript className="text-yellow-400" /> },
        { name: "Tailwind CSS", icon: <SiTailwindcss className="text-cyan-400" /> },
        { name: "React.js", icon: <SiReact className="text-cyan-300" /> },
        { name: "Framer Motion", icon: <SiFramer className="text-white" /> },
        { name: "Node.js", icon: <SiNodedotjs className="text-green-600" /> },
        { name: "Express.js", icon: <SiExpress className="text-gray-400" /> },
        { name: "MongoDB", icon: <SiMongodb className="text-green-500" /> },
        { name: "Postman", icon: <SiPostman className="text-orange-500" /> },
        { name: "Redux", icon: <SiRedux className="text-purple-500" /> },
        { name: "Git", icon: <SiGit className="text-red-500" /> },
        { name: "GitHub", icon: <SiGithub className="text-white" /> },
        { name: "Vercel", icon: <SiVercel className="text-white" /> },
        { name: "C++", icon: <SiCplusplus className="text-blue-400" /> },
        { name: "Socket.io", icon: <SiSocketdotio className="text-gray-300" /> },
        { name: "Cloudinary", icon: <SiCloudinary className="text-blue-300" /> },
    ];

    return (
        <div className="sm:w-2/3 px-2 sm:px-4 mt-4">
            <motion.div
                className="flex flex-col border-b p-4 border-white/20"
                whileInView={{opacity:100,x:0,y:0}}
                initial={{opacity:0,x:30,y:30}}
                transition={{duration:0.6}}
            >
                {/* Adjusted Heading */}
                <h3 className="font-semibold text-lg sm:text-2xl">Education</h3>

                <p className="mt-2 flex flex-row justify-between items-baseline">
                    <span className="font-semibold text-sm sm:text-lg">Maulana Azad National Institute Of Technology, Bhopal</span>
                    <span className="font-medium text-xs sm:text-base text-white/70 text-right whitespace-nowrap">2024-2027</span>
                </p>
                <p className="flex flex-row justify-between items-baseline -mt-1">
                    <span className="font-medium text-sm sm:text-base">Masters in Computer Applications</span>
                    <span className="font-medium text-xs sm:text-base text-white/70 text-right whitespace-nowrap">CGPA: 9.7</span>
                </p>

                <p className="mt-4 flex flex-row justify-between items-baseline">
                    <span className="font-semibold text-sm sm:text-lg">Kristu Jayanti College, Bengaluru</span>
                    <span className="font-medium text-xs sm:text-base text-white/70 text-right whitespace-nowrap">2024-2027</span>
                </p>
                <p className="flex flex-row justify-between items-baseline -mt-1">
                    <span className="font-medium text-sm sm:text-base">Bachelors in Computer Applications</span>
                    <span className="font-medium text-xs sm:text-base text-white/70 text-right whitespace-nowrap">CGPA: 8.8</span>
                </p>
            </motion.div>

            <motion.div className="flex flex-col border-b p-4 border-white/20" whileInView={{opacity:100,x:0,y:0}} initial={{opacity:0,x:30,y:30}} transition={{duration:0.6}}>
                {/* Adjusted Heading */}
                <h3 className="font-semibold text-lg sm:text-2xl">Experience</h3>
                <p className="mt-2 font-medium flex flex-row justify-between"><span>Online Tutor - Instant International</span><span className="text-right text-white/70">2022-2024</span></p>
                <p className="flex justify-between "><span>Filo Ed Tech</span></p>
                <ul className="mt-2 flex flex-col space-y-4" >
                    <li className="border-l-2 border-white px-4">Conducted over 1000 instant sessions clearing doubts of students from the US and UK in computer science and mathematics.</li>
                    <li className="border-l-2 border-white px-4">Maintained an average rating of 4.8/5. Held private sessions for Indian students for academic improvement.</li>
                </ul>
            </motion.div>

            <motion.div className="flex flex-col p-4" whileInView={{opacity:100,x:0,y:0}} initial={{opacity:0,x:30,y:30}} transition={{duration:0.6}}>
                {/* Adjusted Heading */}
                <h3 className="font-semibold text-lg sm:text-2xl">Tech Stack</h3>
                <div className="flex w-full flex-wrap mt-2">
                    {techStack.map(ts => {
                        return (
                            <span className="flex items-center justify-center space-x-2 border rounded-3xl border-white/20 px-4 py-2 m-1 transition duration-300 ease-in-out hover:border-white hover:shadow-lg hover:shadow-white/20" key={ts.name}>
                                {ts.icon}
                                <span>{ts.name}</span>
                            </span>
                        );
                    })}
                </div>
            </motion.div>
        </div>
    );
}