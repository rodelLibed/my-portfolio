"use client"
import { useEffect, useState } from "react"
import {
    Drawer,
    DrawerClose,
    DrawerContent,
    DrawerFooter,
    DrawerHeader,
    DrawerTrigger,
  } from "@/components/ui/drawer"
  
import { Button } from "./ui/button"
import { Menu } from "lucide-react"
import { cn } from "@/lib/utils"
import { ROUTES } from "@/app/utils/data"
import Link from "next/link"

const MobileMenu = ({pathname}:{pathname:string}) => {
    const [open, setOpen] = useState(false)
    
    const handleOpen = () => setOpen(!open)
    
    useEffect(()=>{
       setOpen(false)
    }, [pathname])
    
  return (
    <Drawer open={open}>
      <DrawerTrigger asChild className="md:hidden" onClick={handleOpen}>
         <Button className="rounded-full text-white bg-emerald-700 border-none" variant={"outline"}>
            <Menu />
         </Button>
      </DrawerTrigger>

      <DrawerContent className="bg-black border-none ">
         <div className="max-w-sm mx-auto w-full">
            <DrawerHeader className={'list-none flex flex-col gap-5'}>
            {ROUTES.map((route)=> {
            const activeLink = pathname === route.path 
             return (
               <li key={route.id}>
                 <Link className={cn("text-white", activeLink && "text-emerald-600")} href={route.path}>{route.name}</Link>
               </li>
             )
           })}
            </DrawerHeader>

            <DrawerFooter className="pb-10">
            <Button className='bg-emerald-700 rounded-full mx-auto hover:bg-white hover:text-black md:hidden'>Get in Touch</Button>
            <DrawerClose onClick={handleOpen} className="text-white text-sm text-center">Close Menu</DrawerClose>
            </DrawerFooter>
         </div>
      </DrawerContent>
    </Drawer>
  )
}

export default MobileMenu
