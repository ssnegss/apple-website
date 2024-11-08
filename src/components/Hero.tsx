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
   }, []);

   return (
      <section className="container hero">
         <div>
            <h2 id="hero__title" className="hero__title">
               iPhone 15 Pro
            </h2>
            <div className="hero__video">
               <video autoPlay muted playsInline={true} key={videoSrc}>
                  <source src={videoSrc} type="video/mp4" />
               </video>
            </div>
         </div>
      </section>
   );
};

export default Hero;
