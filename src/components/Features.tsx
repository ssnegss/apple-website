import { useGSAP } from "@gsap/react";
import { animateWithGsap } from "../utils/animations";
import { exploreVideo } from "../utils";

const Features = () => {
   useGSAP(() => {
      animateWithGsap("#features__title", { opacity: 1, y: 0, duration: 2 });
   }, []);

   return (
      <section className="section features">
         <div className="container">
            <h2 className="h2 features__title" id="features__title">
               Explore the full story.
            </h2>
            <div className="features__gallery">
               <div className="features__galleryText">
                  <div>iPhone.</div>
                  <div>Forged in titanium.</div>
               </div>
               <div className="features__galleryItem">
                  <video
                     playsInline
                     id="exploreVideo"
                     className="features__galleryVideo"
                     preload="none"
                     muted
                     autoPlay
                  >
                     <source src={exploreVideo} type="video/mp4" />
                  </video>
               </div>
               <div className="features__galleryItem"></div>
            </div>
         </div>
      </section>
   );
};

export default Features;
