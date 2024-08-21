import Image from "next/image"
import { MotionDiv } from "../utils/motionTags"
import { variants, transition } from "../utils/framer_variants"
import ContactForm from "@/components/ContactForm"

const ContactPage = () => {
  return (
    <div className="container grid place-items-center h-screen 2xl:pt-0 pt-20">
      <div className="absolute left-0 right-0 bottom-0 top-[94px]">
       <Image
        src={"/map.png"}
        alt="map"
        width={1200}
        height={450}
        className="w-full h-full object-contain "
       />
      </div>
      <MotionDiv
       className="z-10"
       initial="initial"
       animate="animate"
       variants={variants.moveUp}
       transition={transition.moveUp}
      >
        <div className="text-center">
          <h3 className="text-white text-3xl font-bold">
            <span className="text-emerald-700">Let&apos;s Work</span> {" "} Together!
          </h3>
          <p className="text-white text-lg">I'd love to hear about your project or how I can help you build something amazing.</p>
        </div>
        <ContactForm />
      </MotionDiv>
    </div>
  )
}

export default ContactPage
