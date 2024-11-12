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
         { scale: 1, opacity: 1, ease: "power1", duration: 1 },
         { scrub: 5.5 }
      );
      animateWithGsap(".features__textBlock", {
         y: 0,
         opacity: 1,
         ease: "power2.inOut",
         duration: 1,
      });
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
            <div className="features__text">
               <div className="features__textBlock">
                  iPhone 15 Pro is{" "}
                  <span>
                     the first iPhone to feature an aerospace-grade titanium
                     design,
                  </span>{" "}
                  using the same alloy that spacecraft use for missions to Mars.
               </div>
               <div className="features__textBlock">
                  Titanium has one of the best strength-to-weight ratios of any
                  metal, making these our <span>lightest Pro models ever.</span>{" "}
                  You'll notice the difference the moment you pick one up.
               </div>
            </div>
         </div>
      </section>
   );
};

export default Features;
