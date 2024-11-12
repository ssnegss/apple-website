import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { chipImg, frameImg, frameVideo } from "../utils";

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
         <div className="container">
            <div className="howItWorks__chipWrapper">
               <div id="chip" className="howItWorks__chip">
                  <img src={chipImg} alt="chip" />
               </div>
            </div>
            <div className="howItWorks__title">
               A17 Pro chip. <br /> A monster win for gaming.
            </div>
            <div className="howItWorks__subtitle">
               It's here. The biggest redesign in the history of Apple GPUs.
            </div>
            <div className="howItWorks__videoFrameBlock">
               <div className="howItWorks__videoFrame">
                  <img src={frameImg} alt="frame" />
                  <div className="howItWorks__video">
                     <video>
                        <source src={frameVideo} type="video/mp4" />
                     </video>
                  </div>
               </div>
            </div>
         </div>
      </section>
   );
};

export default HowItWorks;
