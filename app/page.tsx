import { ArrowUpRight } from "lucide-react";
import { FaLinkedinIn, FaGithub } from "react-icons/fa";
import { MotionDiv } from "./utils/motionTags";
import { transition, variants } from "./utils/framer_variants";
import { HoverBorderGradient } from "@/components/ui/hover-border-gradient";


export default function Home() {
  return (
          <div className="h-dvh overflow-hidden flex justify-center items-center ">
             <MotionDiv 
                initial="initial" 
                animate="animate" 
                variants={variants.moveRight}
                transition={transition.moveRight}
                className="flex flex-col items-center gap-5 relative">
               <p className=" text-emerald-500 text-xl font-medium">Frontend Developer</p>
                <h1 className="text-5xl font-bold text-center text-white">Hello, my name is Rodel Libed</h1>
                <p className="text-center text-white/55 text-xl mx-5">
                  an aspiring self-taught frontend developer 
                  with a passion for creating beautiful and functional web applications.
                </p>
                <div className="flex flex-col gap-3">
                 <HoverBorderGradient className="flex gap-2">
                   <span>Download CV</span>
                   <ArrowUpRight />
                 </HoverBorderGradient>
                </div>
                <div className="flex gap-3">
                <FaGithub size={30} color="white"  />
                <FaLinkedinIn size={30} color="white" />
                </div>  
             </MotionDiv>
          </div>  
    
  )
}
