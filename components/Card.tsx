import React from 'react'
import Link from 'next/link'
import { Github, Linkedin, AtSign, MoveRight, MoveUpRight  } from "lucide-react"
import { Meteors } from './ui/meteor'
interface Props {
    id: number
    title: string
    github: string
    linkurl: string
    desc: string
    image: string
    stack: string[]
}


interface ProjectCardProps {
    project: Props;
    
  }
  

const Card = ({project}:ProjectCardProps) => {
  return (
    <div className="flex flex-col-reverse md:flex-row  gap-3 rounded-xl shadow-lg transition-all duration-300 ease-in-out cursor-pointer
                hover:bg-emerald-500/20 hover:backdrop-blur-sm hover:-translate-y-1 hover:shadow-xl p-2" >
           <div className='h-auto md:h-full '>
              <img src={project.image} alt=""   className="w-[150px] h-[80px] object-cover rounded-xl" />
           </div>
             <div className='space-y-3  w-full  h-auto md:h-full'>
             <h1>{project.title}</h1>
                <div className="flex items-center gap-3 text-sm text-white/50">
                  <Link className="flex items-center gap-1" href={project.github} target='_blank'>Github <Github size={16} /></Link>
                  <Link className="flex items-center gap-1" href={project.linkurl} target='_blank'>Link <MoveUpRight size={16} /></Link>
                </div>
                <p className='text-sm font-light text-white/50'>{project.desc}</p>
                <ul className="inline-flex flex-wrap gap-3 py-2">
                  {project.stack?.map((techstack)=>(
                    <li className='rounded-full
                     flex items-center px-3 py-1 bg-emerald-500/20
                     text-sm font-light text-white/50'
                      key={techstack}>
                        {techstack}
                    </li>
                  ))}
                </ul>
             </div>

             
               
             </div>
  )
}

export default Card
