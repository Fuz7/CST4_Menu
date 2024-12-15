import Card from "./Card";
import theFool from "../assets/images/theFool.jpg";
import theMagician from "../assets/images/theMagician.jpg";
import theEmpress from "../assets/images/theEmpress.jpg";
import theEmperor from "../assets/images/theEmperor.jpg";
import theHierophant from "../assets/images/theHierophant.jpg";
import dionaldologo from "../assets/images/dionaldologo.svg";
import nerosalogo from "../assets/images/nerosalogo.svg";
import bardagologo from "../assets/images/bardagologo.svg";
import baguiologo from "../assets/images/baguiologo.svg";
import macabentalogo from "../assets/images/macabentalogo.svg";

export default function CardSection() {
  return (
    <section className="flex px-[80px] justify-evenly w-full">
      <Card
        imgSrc={theEmperor}
        name={"Bagiuo"}
        color={"#7ED9D4"}
        cardLogo={baguiologo}
        title={"DFA/NFA"}
        link={"https://fuz7.github.io/DFA_NFA/"}
      />
       <Card
        imgSrc={theHierophant}
        name={"Macabenta"}
        color={"#76D196"}
        cardLogo={macabentalogo}
        title={"PDA"}
        link={
          "https://cheezypotatoes.github.io/Deterministic-PushDown-Automata-Project/"
        }
      />

      <Card
        imgSrc={theEmpress}
        name={"Bardago"}
        color={"#C78AF9"}
        cardLogo={bardagologo}
        title={"CFG"}
        link={"https://fuz7.github.io/CFG/"}
      />
      <Card
        imgSrc={theFool}
        name={"Dionaldo"}
        color={"#FF9759"}
        cardLogo={dionaldologo}
        title={"Tower Of Hanoi"}
        link={"https://tower-of-hanoi-ecru.vercel.app/"}
      />
      <Card
        imgSrc={theMagician}
        name={"Nerosa"}
        color={"#F3C7C7"}
        cardLogo={nerosalogo}
        title={"Turing Machine"}
        link={"https://fuz7.github.io/turingMachine/"}
      />


 

   
    </section>
  );
}
