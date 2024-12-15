import TextSection from './TextSection';
import { motion } from "motion/react";
import { useState } from "react";

export default function Card({ imgSrc,name, color,cardLogo,title }) {
  const [isHovered,setIsHovered] = useState(false)
  const letterArray = name.split('')
  const imageVariant = {
    notHovered:{rotateY:0},
    hovered:{rotateY:180}
    
  }
  const blockVariant = {
    notHovered:{rotateY:180},
    hovered:{rotateY:0}
  }

  return (
    <div className="flex flex-col">
    <div
    onMouseEnter={()=>setIsHovered(true)}
    onMouseLeave={()=>setIsHovered(false)}
    className="w-[313px] min-h-[556px] relative overflow-clip cursor-pointer">
      <motion.img
      initial={'notHovered'}
      variants={imageVariant}
      animate={isHovered? "hovered":"notHovered"}
      transition={{duration:0.35}}
      className="cardImage z-10 relative"
      src={imgSrc} alt="" />
      <motion.div 
      initial={"notHovered"}
      variants={blockVariant}
      animate={isHovered? "hovered":"notHovered"}
      transition={{duration:0.35,}}
      style={{
        backgroundColor: `${color}`
      }}
      className={`w-full h-[99%] absolute top-0 left-0 rounded-[15px] overflow-hidden flex flex-col justify-center leading-[1.0] 
       text-black items-center text-[50px] `}>
        <img className="absolute right-[20px] top-[20px]" src={cardLogo} alt="" />
        <img className="absolute left-[20px] bottom-[20px]" src={cardLogo} alt="" />
      {letterArray.map((letter,index)=>{
        return (<p key={name + index}>{letter}</p>)
      })}
      </motion.div>
    </div>
  <TextSection   title={title} isHovered={isHovered}/>
    </div>
  );
}
