import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { FC } from "react";
import { rightImg, watchImg } from "../utils";

const Highlights: FC = () => {
   useGSAP(() => {
      gsap.to("#highlights__title", { opacity: 1 });
   }, []);

   return (
      <section id="highlights" className="container highlights">
         <div className="highlights__title-block">
            <h2 className="h2 highlights__title" id="highlights__title">
               Get the highlights
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
      </section>
   );
};

export default Highlights;
