import { FC, useEffect, useState } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { heroVideo, smallHeroVideo } from "../utils";
import { MD_BREAK } from "../constants/media";

const Hero: FC = () => {
   const [videoSrc, setVideoSrc] = useState(
      window.innerWidth < MD_BREAK ? smallHeroVideo : heroVideo
   );

   const handleVideoSrcSet = () => {
      if (window.innerWidth < MD_BREAK) {
         setVideoSrc(smallHeroVideo);
      } else {
         setVideoSrc(heroVideo);
      }
   };

   useEffect(() => {
      window.addEventListener("resize", handleVideoSrcSet);

      return () => {
         window.removeEventListener("resize", handleVideoSrcSet);
      };
   }, []);

   useGSAP(() => {
      gsap.to("#hero__title", { opacity: 1 });
      gsap.to("#hero__cta", { opacity: 1, y: -50 });
   }, []);

   return (
      <section className="container hero">
         <h2 id="hero__title" className="hero__title">
            iPhone 15 Pro
         </h2>
         <div className="hero__video">
            <video autoPlay muted playsInline={true} key={videoSrc}>
               <source src={videoSrc} type="video/mp4" />
            </video>
         </div>
         <div id="hero__cta" className="hero__cta">
            <a href="#highlights" className="btn btn--primary hero__ctaBtn">
               Buy
            </a>
            <p className="hero__ctaText">From $199/month of $999</p>
         </div>
      </section>
   );
};

export default Hero;
