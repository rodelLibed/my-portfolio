"use client"
import { ROUTES } from '@/app/utils/data'
import Link from 'next/link'
import { cn } from '@/lib/utils'
import { usePathname } from 'next/navigation'
import MobileMenu from './MobileMenu'
import { MotionButton, MotionLink, MotionList } from '@/app/utils/motionTags'
import { transition, variants } from '@/app/utils/framer_variants'

const NavBar = () => {
  const pathname = usePathname()
  
  return (
   <header className={cn("fixed z-50 left-0 right-0 px-5")}>
      <nav className='flex py-4 justify-between items-center'>
        <MotionLink
         initial="initial"
         animate="animate"
         variants={variants.scale}
         transition={transition.scale} 
         className='text-emerald-700 text-3xl font-bold' href={"/"}>
          RDL
        </MotionLink>
        <ul className='md:flex hidden items-center gap-6 text-[17px] font-medium'>
           {ROUTES.map((route, index)=> {
            const activeLink = pathname === route.path 
             return (
               <MotionList 
                 initial="initial"
                 animate="animate"
                 variants={variants.moveDown}
                 transition={{
                  ...transition.moveDown,
                  delay: index * 0.3,
                 }} 
                 key={route.id}>
                 <Link  className={cn("text-white", activeLink && "text-emerald-600 font-bold")} href={route.path}>{route.name}</Link>
               </MotionList>
             )
           })}
        </ul>
        <MotionButton
         className='bg-emerald-700 border-none hover:bg-white hover:text-black md:inline-block hidden'
         initial="initial"
         animate="animate"
         variants={variants.moveLeft}
         transition={transition.moveLeft}
         variant={"outline"}

         >
          Get in Touch
        </MotionButton>
        <MobileMenu pathname={pathname} />
      </nav>
   </header>
  )
}

export default NavBar
