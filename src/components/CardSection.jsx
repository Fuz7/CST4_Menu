import Card from "./Card"
import theFool from '../assets/images/theFool.jpg'
import theMagician from '../assets/images/theMagician.jpg'
import theEmpress from '../assets/images/theEmpress.jpg'
import theEmperor from '../assets/images/theEmperor.jpg'
import theHierophant from '../assets/images/theHierophant.jpg'

export default function CardSection(){
  
  return(
    <section className="flex px-[80px] justify-evenly w-full">
    <Card imgSrc={theFool}/>
    <Card imgSrc={theMagician}/>
    <Card imgSrc={theEmpress}/>
    <Card imgSrc={theEmperor} />    
    <Card imgSrc={theHierophant}/>
    </section>
  )
}