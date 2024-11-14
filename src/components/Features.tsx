import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { animateWithGsap } from "../utils/animations";
import { explore1Img, explore2Img, exploreVideo } from "../utils";
import { useRef } from "react";

gsap.registerPlugin(ScrollTrigger);

const Features = () => {
   const videoRef = useRef<HTMLVideoElement>();

   useGSAP(() => {
      gsap.to("#exploreVideo", {
         scrollTrigger: {
            trigger: "#exploreVideo",
            toggleActions: "play pause reverse restart",
            start: "-10% bottom",
         },
         onComplete: () => {
            videoRef.current.play();
         },
      });

      animateWithGsap("#features__title", { opacity: 1, y: 0, duration: 1 });
      animateWithGsap("#features__galleryText", { opacity: 1, duration: 3 });
      animateWithGsap(
         ".features__img",
         { scale: 1, opacity: 1, ease: "power1", duration: 1 },
         { scrub: 5.5 }
      );
      animateWithGsap(".features__text", {
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
               <div className="features__galleryText" id="features__galleryText">
                  <div>iPhone.</div>
                  <div>Forged in titanium.</div>
               </div>
               <div className="features__galleryVideoBlock">
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
               <div className="text">
                  iPhone 15 Pro is{" "}
                  <span>
                     the first iPhone to feature an aerospace-grade titanium
                     design,
                  </span>{" "}
                  using the same alloy that spacecraft use for missions to Mars.
               </div>
               <div className="text">
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
