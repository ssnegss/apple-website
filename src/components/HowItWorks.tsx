import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { chipImg, frameImg, frameVideo } from "../utils";
import { useRef } from "react";
import { animateWithGsap } from "../utils/animations";

const HowItWorks = () => {
   const videoRef = useRef(null);

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

      animateWithGsap("#howItWorks__description", {
         y: 0,
         opacity: 1,
         ease: "power2.inOut",
         duration: 1,
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
            <div className="howItWorks__videoFrame">
               <img src={frameImg} alt="frame" />
               <div className="howItWorks__video">
                  <video
                     playsInline
                     preload="none"
                     muted
                     autoPlay
                     ref={videoRef}
                  >
                     <source src={frameVideo} type="video/mp4" />
                  </video>
               </div>
            </div>
            <div className="howItWorks__videoDescription">
               Honkai: Star Rail
            </div>
            <div
               className="howItWorks__description"
               id="howItWorks__description"
            >
               <div className="howItWorks__text">
                  <div className="text">
                     A17 Pro is an entirely new class of iPhone chip that
                     delivers our <span>best graphic performance by far</span> .
                  </div>
                  <div className="text">
                     Mobile <span>games will look and feel so immersive</span>{" "}
                     with incredibly detailed environments and characters.
                  </div>
               </div>

               <div className="howItWorks__gpu">
                  New
                  <span>Pro-class GPU</span>
                  with 6 cores
               </div>
            </div>
         </div>
      </section>
   );
};

export default HowItWorks;
