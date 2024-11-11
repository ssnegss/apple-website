import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { FC } from "react";
import { rightImg, watchImg } from "../utils";
import VideoCarousel from "./VideoCarousel";

const Highlights: FC = () => {
   useGSAP(() => {
      gsap.to("#highlights__title", { opacity: 1 });
      gsap.to(".highlights__watchBtn", {
         opacity: 1,
         duration: 1,
         y: 0,
         stagger: 0.25,
      });
   }, []);

   return (
      <section id="highlights" className="highlights">
         <div className="highlights__title-block container">
            <h2 className="h2 highlights__title" id="highlights__title">
               Get the highlights.
            </h2>
            <div className="highlights__watchBtns">
               <div className="highlights__watchBtn">
                  Watch the film
                  <img src={watchImg} alt="watch" />
               </div>
               <div className="highlights__watchBtn">
                  Watch the event
                  <img src={rightImg} alt="right" />
               </div>
            </div>
         </div>
         <VideoCarousel />
      </section>
   );
};

export default Highlights;
