"use client"
import Image from 'next/image'
import { MotionDiv } from '../utils/motionTags'
import { transition, variants } from '../utils/framer_variants'
import { Badge } from '@/components/ui/badge'
import { Tooltip, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip'
import { TooltipContent } from '@radix-ui/react-tooltip'
import { useState } from 'react'
import { PROJECTS } from '../utils/data'
import { cn } from '@/lib/utils'
import { Swiper as SwiperTypes } from 'swiper/types'
import { Swiper, SwiperSlide } from "swiper/react"
import "swiper/css"

const ProjectsPage = () => {
  const [currentProject, setCurrentProject] = useState(PROJECTS[0])
  const [swiper, setSwiper] = useState<SwiperTypes>()

  const onSlideChange = (items:any) => {
     setCurrentProject(PROJECTS[items?.activeIndex])
  }

  // get current index
  const index = PROJECTS.findIndex((project)=>project.title === currentProject.title) + 1

  const nexTo = () => {
    swiper?.slideNext()
  }

  const prevTo = () => {
    swiper?.slidePrev()
  }



  return (
    <div className='grid place-items-center lg:pt-0 sm:pt-32 pt-20 min-h-screen container'>
      <div className="mt-32">
        <MotionDiv 
          initial="initial"
          animate="animate"
          variants={variants.moveUp}
          transition={transition.moveUp}
          className='text-center mb-10'
          >
          <h3 className='text-white font-bold text-2xl'>
            My <span className='text-emerald-700'>Projects</span>
          </h3>
        </MotionDiv>

        <MotionDiv
         initial="initial"
         animate="animate"
         variants={variants.moveDown}
         transition={transition.moveDown}
         className='flex lg:flex-row flex-col-reverse lg:gap-0 gap-10 lg:pb-0 pb-7 items-center w-full'
        >
          <div className="flex-1 space-y-3 text-white">
            <h2 className='text-6xl font-semibold text-emerald-600'>{index < 10 ? `0${index}` : index}</h2>
            <h3 className='text-2xl font-semibold'>{currentProject.title}</h3>
            <p className='w-10/12 text-sm font-semibold'>
              {currentProject.desc}
            </p>

            <div className="mt-2 font-semibold tracking-wider space-x-2 space-y-2">
              {currentProject.stack.map((item)=> (
                  <Badge key={item} variant={"outline"} className='text-emerald-700'>
                   {item}
                  </Badge>
              ))}
            </div>
            <br />
            <div className="flex gap-x-3">
              <TooltipProvider delayDuration={200}>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <button className='bg-accent p-2.5 rounded-full '>
                      <Image className='' src={"/mdi--github.png"} alt='github' width={40} height={40}  />
                    </button>
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>Github</p>
                  </TooltipContent>
                </Tooltip>

                <Tooltip>
                  <TooltipTrigger asChild>
                    <button className='bg-accent p-2.5 rounded-full'>
                      <Image className='bg-black' src={"/grommet-icons--projects.png"} alt='live project' width={40} height={40}  />  
                    </button>
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>Live Preview</p>
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>
            </div>
          </div>

          {/* swiper */}
          <div className="flex-1 flex items-center flex-col">
             <Swiper 
                breakpoints={{
                  499: {
                    slidesPerView: 1
                  },
                  999: {
                    slidesPerView: 1.4
                  }
                }}
                spaceBetween={20}
                className='w-full md:max-w-lg max-w-[250px]'
                onSlideChange={onSlideChange}
                onSwiper={(swiper) => setSwiper(swiper)}
             >
               {PROJECTS.map((project, i) => (
                 <SwiperSlide 
                  key={project.id}
                  className={cn(index - 1 !== i && "opacity-45")}
                 >
                   <Image 
                    src={"/pic.jpg"}
                    alt={project.title}
                    width={300}
                    height={100}
                    className='object-contain'
                   />
                 </SwiperSlide>
               ))}
             </Swiper>
             <div className="flex ml-6 mt-4 gap-x-4">
               <button onClick={prevTo} disabled={index === 1} >
                 <Image 
                   src={"/ooui--arrow-next-rtl.png"} 
                   alt='prev'
                   width={55}
                   height={55}
                   className={cn(index === 1 ? "bg-white/10" : "bg-emerald-700", "rounded-md")}
                  />
               </button>

               <button onClick={nexTo} disabled={index === PROJECTS.length} >
                 <Image 
                   src={"/ooui--arrow-next-ltr.png"} 
                   alt='next'
                   width={55}
                   height={55}
                   className={cn(index === PROJECTS.length ? "bg-white/15" : "bg-emerald-700", "rounded-md")}
                  />
               </button>
             </div>
          </div>
        </MotionDiv>
      </div>
    </div>
  )
}

export default ProjectsPage
