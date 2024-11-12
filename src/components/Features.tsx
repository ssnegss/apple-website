import { useGSAP } from "@gsap/react";
import { animateWithGsap } from "../utils/animations";
import { explore1Img, explore2Img, exploreVideo } from "../utils";
import { useRef } from "react";

const Features = () => {
   const videoRef = useRef<HTMLVideoElement>();

   useGSAP(() => {
      animateWithGsap("#features__title", { opacity: 1, y: 0, duration: 2 });
      animateWithGsap(
         ".features__img",
         { scale: 1, opacity: 1, ease: "power1", duration: 2 },
         { scrub: 5.5 }
      );
   }, []);

   return (
      <section className="section section--gray features">
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
                     ref={videoRef}
                     id="exploreVideo"
                     className="features__galleryVideo"
                     preload="none"
                     muted
                     autoPlay
                  >
                     <source src={exploreVideo} type="video/mp4" />
                  </video>
               </div>
               <div className="features__galleryItem">
                  <img
                     src={explore1Img}
                     alt="Explore"
                     className="features__img"
                  />
               </div>
               <div className="features__galleryItem">
                  <img
                     src={explore2Img}
                     alt="Explore"
                     className="features__img"
                  />
               </div>
            </div>
         </div>
      </section>
   );
};

export default Features;
