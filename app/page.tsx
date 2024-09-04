import { Github, Linkedin, AtSign, MoveRight  } from "lucide-react"
import { TECH, PROJECTS } from "./utils/data"
import Image from "next/image"
import Link from "next/link"
import Card from "@/components/Card"
export default function Home() {
  return (
    <main 
    className="h-auto lg:h-full antialiased 
    max-w-[1300px] mx-auto p-6 sm:px-16 md:px-20
    py-[50px] md:py-[90px]">
         {/* Hero Section */}
      
           <section className="flex flex-col lg:justify-between justify-normal w-full lg:w-[550px] mr-auto lg:fixed text-white space-y-3 mb-3 lg:mb-0">
               <h1 className="md:text-5xl text-4xl font-bold inline-block">Rodel Libed</h1>
               <h2 className="font-medium text-secondary text-xl md:text-2xl">Frontend Developer</h2>
               <p className="text-lg max-w-[350px] text-white/50 font-light">I build responsive, elegant products and digital experiences for the web and mobile.</p>
               <div className="flex gap-3 text-white/50">
                <AtSign size={25} />
                <Github  size={25} />
                <Linkedin  size={25}/>
               </div>
           </section>

         <div className="w-full lg:w-1/2 ml-0 lg:ml-auto relative pb-20 sm:pb-0">
           {/* About Section */}
           <section className="text-white mt-24 sm:mt-32 lg:mt-0">
             <h1 className="text-xl md:text-2xl font-semibold text-emerald-700 mb-4">About</h1>
             <p className="space-y-5 text-lg text-white/50 font-light">
             I am an enthusiastic and self-motivated individual with a passion for front-end development.
              I have dedicated time to learning and honing my skills to become a proficient front-end developer.
               My journey into the world of coding has been fueled by a deep curiosity, a commitment to staying 
               current with industry trends, and a strong willingness to learn. I am always eager to expand my knowledge 
               and adapt to new technologies to enhance my development skills.
               When I&apos;m not in front of the screen, you&apos;ll often find me with a guitar in hand, exploring new tunes and rhythms.
               Grateful for the constant blessings in my life and the opportunities that come my way. God is so good ❤️
             </p>
           </section>
          {/* Techstack Section */}
           <section className="text-white my-24 sm:my-32">
              <h1 className="text-xl md:text-2xl font-semibold text-emerald-700 mb-4">Technologies</h1>
              <ul className="inline-flex flex-wrap gap-3">
                {TECH.map((techstacks)=>(
                   <li key={techstacks.id} className="rounded-full flex items-center space-x-2 px-3 py-2 bg-emerald-500/20">
                     <img src={techstacks.icon} alt="" width={20} height={20} />
                     <span>{techstacks.name}</span>
                   </li>
                ))}
              </ul>
           </section>
          {/* Experience Section */}
           <section className="text-white my-24 sm:my-32">
            <div className="rounded-xl shadow-lg transition-all duration-300 ease-in-out cursor-pointer
                hover:bg-emerald-500/20 hover:backdrop-blur-sm hover:-translate-y-1 hover:shadow-xl p-4">
             <h1 className="text-xl md:text-2xl font-semibold text-emerald-700 mb-4">Experience</h1>
             <span className="text-sm text-white/50">March-May 2023</span>
             <h4>Frontend Developer Intern - Pixel8</h4>
             <span className="text-sm text-white/50">Legazpi City Albay, Philippines</span>
             <p className="mt-3 text-sm text-white/50">
              ➡️ Joined in a existing project called JuanHR Mobile <br />
              ➡️ Collaborated with the design team to transform mockups and wireframes into responsive and visually appealing web interfaces. <br />
              ➡️ Identifying and resolving frontend issues, such as layout problems and responsive design challenges <br />
              ➡️ Developed some features needed to the project <br />
              ➡️ We used technologies like Vue.js, Quasar Framework, and Axios for data fetching to build the web app
             </p>

             <div className="inline-flex items-center gap-1 mt-2 group">
             <h2>View Resume</h2>
             <MoveRight className="transition-transform duration-100 ease-in-out group-hover:translate-x-2" />
             </div>
            </div>
           </section>

           {/* Projects */}
           <section className="text-white"> 
            <h1 className="text-xl md:text-2xl font-semibold text-emerald-700 mb-4">Projects</h1>
            <div className="space-y-3 ">
             {PROJECTS.map((data)=>(
              <div key={data.id}>
                 <Card  project={data} />
              </div>
             ))}
            </div>

             
             <div className="inline-flex items-center gap-1 mt-2 group">
             <h2 className=" ">Show more  <span className="block h-[2px] w-0 bg-emerald-500 transition-all  duration-300 ease-in-out group-hover:w-full"></span></h2>
             <MoveRight className="transition-transform duration-100 ease-in-out group-hover:translate-x-2" />
             </div>
           </section>

           <section id="footer" className="mt-20">
              <div className="flex flex-col md:flex-row justify-between items-center ">
              <p className="text-sm font-light text-white/50">All rights reserved. © 2024 <span className="text-white font-medium"> Rodel Libed.</span></p>
              <Image src="/cat.gif" height={100} width={100} alt="My cat" />
              </div>
           </section>

         </div>
        
       
    </main>
  )
}
