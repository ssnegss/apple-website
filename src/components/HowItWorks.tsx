import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { chipImg } from "../utils";

const HowItWorks = () => {
   useGSAP(() => {
      gsap.from("#chip", {
         scrollTrigger: {
            trigger: "#chip",
            start: "20% bottom",
         },
         opacity: 0,
         scale: 2,
         duration: 2,
         ease: "power2.inOut",
      });
   }, []);

   return (
      <section className="section howItWorks">
         <div id="chip" className="howItWorks__chip">
            <img src={chipImg} alt="chip" />
         </div>
      </section>
   );
};

export default HowItWorks;
