import { motion } from "motion/react";
import { useState } from "react";

export default function Card({ imgSrc }) {
  const [isHovered,setIsHovered] = useState(false)
  
  const imageVariant = {
    notHovered:{rotateY:0},
    hovered:{rotateY:180}
  }
  const blockVariant = {
    notHovered:{rotateY:180},
    hovered:{rotateY:0}
  }

  return (
    <div
    onMouseEnter={()=>setIsHovered(true)}
    onMouseLeave={()=>setIsHovered(false)}
    className="w-[313px] min-h-[556px] relative overflow-clip">
      <motion.img
      initial={'notHovered'}
      variants={imageVariant}
      animate={isHovered? "hovered":"notHovered"}
      transition={{duration:0.4}}
      className="cardImage z-10 relative"
      src={imgSrc} alt="" />
      <motion.div 
      initial={"notHovered"}
      variants={blockVariant}
      animate={isHovered? "hovered":"notHovered"}
      transition={{duration:0.4,}}
      className="w-full h-full bg-[#fffffff2] absolute top-0 left-0 rounded-[30px] overflow-hidden "></motion.div>
    </div>
  );
}
