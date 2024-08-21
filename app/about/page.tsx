import React from 'react'
import { MotionButton, MotionDiv, MotionImage, MotionTabs } from '../utils/motionTags'
import { transition, variants } from '../utils/framer_variants'
import { TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import Image from 'next/image'
import Link from 'next/link'


const LOGO = [
   { id: 1, logo: "/devicon--nextjs.png", name: "Next.js" },
   { id: 2, logo: "/devicon--typescript.png", name: "Typescript"},
   { id: 3, logo: "/logos--javascript.png", name: "Javascript"},
   { id: 4, logo: "/logos--nestjs.png", name: "Nest.js" },
   { id: 5, logo: "/logos--nodejs-icon.png", name: "Node.js" },
   { id: 6, logo: "/logos--postgresql.png", name: "Postgresql" },
   { id: 7, logo: "/logos--react-query-icon.png", name: "React Query" },
   { id: 8, logo: "/vscode-icons--file-type-css.png", name: "Css" },
   { id: 9, logo: "/vscode-icons--file-type-html.png", name: "HTML" },
   { id: 10, logo: "/logos--react.png", name: "React.js" },
   { id: 10, logo: "/devicon--tailwindcss.png", name: "TailwindCSS" },

]

const AboutPage = () => {
  return (
    <div className='max-w-4xl mx-auto min-h-screen pt-32 2xl:pt-60 pb-4 text-white'>
      <div className="flex md:flex-row flex-col items-center justify-between gap-7 md:gap-0 w-full">
        <div className="flex md:flex-row flex-col gap-x-7 sm:gap-y-0 gap-y-4 items-center ">
          <MotionImage 
            initial="initial"
            animate="animate"
            variants={variants.scale}
            transition={transition.scale}
            src={"/pic.jpg"}
            alt="My image"
            width={155}
            height={155}
            className='md:w-36 w-38 rounded-full'
          />
          <MotionDiv
           initial="initial"
           animate="animate"
           variants={variants.moveDown}
           transition={transition.moveDown}
           className='sm:text-left text-center'
          >
            <h3 className='mb-3 text-2xl font-bold text-center'>
              Rodel <span className='text-emerald-700'>Libed</span>
            </h3>
            <h5 className=' text-sm text-white/30'>
              Alicia Isabela, Philippines
            </h5>
          </MotionDiv>
        </div>

        <MotionButton initial="initial"
        animate="animate"
        variants={variants.moveDown}
        transition={transition.moveDown}
        variant={"outline"}
        size={"lg"}
        className='bg-emerald-700 border-none rounded-full'
        >
          Frontend Developer
      </MotionButton>
      </div>

      <MotionTabs
      initial="initial"
      animate="animate"
      variants={variants.moveUp}
      transition={transition.moveUp}
      className='leading-7 mt-10 '
      defaultValue='about'
      >
       <TabsList className='bg-black text-white'>
         <TabsTrigger value='about'>About</TabsTrigger>
         <TabsTrigger value='skills'>Skills</TabsTrigger>
         <TabsTrigger value='experience'>Experience</TabsTrigger>
       </TabsList>

       <TabsContent value='about'>
         <h6 className="text-lg text-emerald-700 font-bold">Who I am?</h6>
         <p className="text-sm mt-2 leading-normal">
           Hello👋 my name is Rodel Libed aspiring Software Engineer. Graduated with a degree of Information Technology at Isabela State University.
           I am an enthusiastic and self-motivated individual with a passion for web and mobile developer. I have dedicated time to learning and honing my skills to become a proficient web developer. My journey into the world of coding has been fueled by a deep curiosity, a commitment to staying current with industry trends, and a strong willingness to learn. I am always eager to expand my knowledge and adapt to new technologies to enhance my development skills.
         </p>
       </TabsContent>
       <TabsContent value='skills'>
         <h6 className="text-lg text-emerald-700 font-bold">My Skills</h6>
           <div className='mt-4 grid grid-cols-5  md:grid-cols-4 lg:grid-cols-5 gap-4'>
             
              {LOGO.map((skill)=>{
                return (
                <div key={skill.id} className='w-14 flex flex-col justify-center items-center gap-1'>
                  <Image src={skill.logo} alt="Logo" width={30} height={30} />
                  <h3 className='text-sm font-medium text-center'>{skill.name}</h3>
                </div>
                )
              })}
             
           </div>
       </TabsContent>
       <TabsContent value='experience'>
       <h6 className="text-lg text-emerald-700 font-bold">My Experience</h6>
         <p className="text-sm mt-2 leading-normal">
          Frontend Developer Intern |  Pixel8 Web Solutions & Consultancy Inc. <br />
          March 2023 - May 2023  |  WFH <br />
          ●	Front-end Developer of JuanHR Mobile Project <br />
          ●	Collaborated with the design team to transform mockups and wireframes into responsive and visually appealing web interfaces. <br />
          ●	Identifying and resolving frontend issues, such as layout problems and responsive design challenges

         </p>
       </TabsContent>

      </MotionTabs>
    </div>
  )
}

export default AboutPage
