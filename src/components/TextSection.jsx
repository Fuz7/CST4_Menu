import { motion, useAnimate } from "motion/react";
import { useEffect, useRef } from "react";

export default function TextSection({ title,isHovered }) {

  const [scope,animate] = useAnimate()
  const animated = useRef(false)
  useEffect(()=>{
    if(isHovered && animated.current === false){
      animated.current = true;
      const animateSpan = async()=>{

        await animate("span",{minHeight:"53px",},{duration:0.4})
        await animate("span",{width:"313px",},{duration:0.2})
        await animate("span",{left:"auto",},{duration:0})
        await animate("p",{opacity:"1",},{duration:0})
        await animate("span",{right:"0px",},{duration:0})
        await animate("span",{width:"0px",},{duration:0.5})
        
      }
      animateSpan()
    }
  },[isHovered,animate])
  return (
    <div ref={scope} className="relative text-[36px] flex justify-center mt-[20px]">
      <motion.p 
      initial={{opacity:0}}
      className="leading-[1] mt-[10px]"
      >{title}</motion.p>
      <motion.span 
      initial={{left:"0px",minHeight:"0px", width:'10px' }}

      className="absolute top-[-5px] left-0 min-h-[47px] w-full bg-[#ffffff]">

      </motion.span>
    </div>
  );
}
