import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SyntheticEvent, useEffect, useRef, useState } from "react";
import { highlightsSlides } from "../constants";
import { HighlightSlide } from "../types/HighlightSlide";
import { pauseImg, playImg, replayImg } from "../utils";
import { useGSAP } from "@gsap/react";
import { LG_BREAK, MD_BREAK } from "../constants/media";

gsap.registerPlugin(ScrollTrigger);

const VideoCarousel = () => {
   const videoRef = useRef<Array<HTMLVideoElement>>([]);
   const videoSpanRef = useRef<Array<HTMLSpanElement>>([]);
   const videoDivRef = useRef<Array<HTMLDivElement>>([]);

   const [video, setVideo] = useState({
      isEnd: false,
      startPlay: false,
      videoId: 0,
      isLastVideo: false,
      isPlaying: false,
   });

   const [loadedData, setLoadedData] = useState<
      Array<SyntheticEvent<HTMLVideoElement>>
   >([]);

   const { isEnd, startPlay, videoId, isLastVideo, isPlaying } = video;

   useGSAP(() => {
      gsap.to(".videoCarousel__slide", {
         transform: `translateX(${-100 * videoId}%)`,
         duration: 1,
         ease: "power2.io",
      });

      gsap.to("#video", {
         scrollTrigger: {
            trigger: "#video",
            toggleActions: "restart none none none",
         },
         onComplete: () => {
            setVideo((prevVideo) => ({
               ...prevVideo,
               startPlay: true,
               isPlaying: true,
            }));
         },
      });
   }, [isEnd, videoId]);

   useEffect(() => {
      if (loadedData.length > 3) {
         if (!isPlaying) {
            videoRef.current[videoId].pause();
         } else if (startPlay) {
            videoRef.current[videoId].play();
         }
      }
   }, [startPlay, videoId, isPlaying, loadedData]);

   const handleLoadedMetadata = (
      e: SyntheticEvent<HTMLVideoElement>
   ) => {
      setLoadedData((prevVideo) => [...prevVideo, e]);
   };

   useEffect(() => {
      let currentProgress = 0;
      const span = videoSpanRef.current;

      if (span[videoId]) {
         const animation = gsap.to(span[videoId], {
            onUpdate: () => {
               const progress = Math.ceil(animation.progress() * 100);

               if (progress != currentProgress) {
                  currentProgress = progress;
               }

               gsap.to(videoDivRef.current[videoId], {
                  width:
                     window.innerWidth < MD_BREAK
                        ? "10vw"
                        : window.innerWidth < LG_BREAK
                        ? "10vw"
                        : "4vw",
               });

               gsap.to(span[videoId], {
                  width: `${currentProgress}`,
                  backgroundColor: "white",
               });
            },

            onComplete: () => {
               if (isPlaying) {
                  gsap.to(videoDivRef.current[videoId], {
                     width: "10px",
                  });

                  gsap.to(span[videoId], {
                     backgroundColor: "#616161",
                  });
               }
            },
         });

         if (videoId === 0) {
            animation.restart();
         }

         const animationUpdate = () => {
            animation.progress(
               videoRef.current[videoId].currentTime /
                  highlightsSlides[videoId].videoDuration
            );
         };

         if (isPlaying) {
            gsap.ticker.add(animationUpdate);
         } else {
            gsap.ticker.remove(animationUpdate);
         }
      }
   }, [videoId, startPlay]);

   const handleProcess = (type: string, i?: number) => {
      switch (type) {
         case "video-end":
            if (i !== null && i !== undefined) {
               setVideo((prevVideo) => ({
                  ...prevVideo,
                  isEnd: true,
                  videoId: i + 1,
               }));
            }
            break;
         case "video-last":
            setVideo((prevVideo) => ({
               ...prevVideo,
               isLastVideo: true,
            }));
            break;

         case "video-reset":
            setVideo((prevVideo) => ({
               ...prevVideo,
               isLastVideo: false,
               videoId: 0,
            }));
            break;

         case "play":
            setVideo((prevVideo) => ({
               ...prevVideo,
               isPlaying: !isPlaying,
            }));
            break;

         case "pause":
            setVideo((prevVideo) => ({
               ...prevVideo,
               isPlaying: !isPlaying,
            }));
            break;

         default:
            return video;
      }
   };

   const controlBtnSrc = isLastVideo
      ? replayImg
      : !isPlaying
      ? playImg
      : pauseImg;

   const controlBtnAlt = isLastVideo ? "replay" : !isPlaying ? "play" : "pause";

   return (
      <div className="videoCarousel">
         <div className="videoCarousel__slides">
            {highlightsSlides.map(
               (slide: HighlightSlide, slideIndex: number) => (
                  <div key={slide.id} className="videoCarousel__slide">
                     <div className="videoCarousel__slideVideo">
                        <div className="videoCarousel__slideVideoInner">
                           <video
                              playsInline={true}
                              preload="auto"
                              muted
                              id="video"
                              onEnded={() =>
                                 slideIndex === 3
                                    ? handleProcess("video-last")
                                    : handleProcess("video-end", slideIndex)
                              }
                              ref={(el: HTMLVideoElement) =>
                                 (videoRef.current[slideIndex] = el)
                              }
                              onPlay={() => {
                                 setVideo((prevVideo) => ({
                                    ...prevVideo,
                                    isPlaying: true,
                                 }));
                              }}
                              onLoadedMetadata={(
                                 e: SyntheticEvent<HTMLVideoElement>
                              ) => handleLoadedMetadata(e)}
                           >
                              <source src={slide.video} type="video/mp4" />
                           </video>
                           <div className="videoCarousel__slideText">
                              {slide.textLists.map(
                                 (slideText, slideTextindex) => (
                                    <div key={slideTextindex}>{slideText}</div>
                                 )
                              )}
                           </div>
                        </div>
                     </div>
                  </div>
               )
            )}
         </div>
         <div className="videoCarousel__bulletsBlock">
            <div className="videoCarousel__bullets">
               {videoRef.current.map((_, spanIndex) => (
                  <div
                     key={spanIndex}
                     ref={(el: HTMLDivElement) =>
                        (videoDivRef.current[spanIndex] = el)
                     }
                     className="videoCarousel__bullet"
                  >
                     <span
                        className="videoCarousel__bulletInner"
                        ref={(el: HTMLSpanElement) =>
                           (videoSpanRef.current[spanIndex] = el)
                        }
                     />
                  </div>
               ))}
            </div>
            <button
               className="videoCarousel__controlBtn"
               onClick={
                  isLastVideo
                     ? () => handleProcess("video-reset")
                     : !isPlaying
                     ? () => handleProcess("play")
                     : () => handleProcess("pause")
               }
            >
               <img src={controlBtnSrc} alt={controlBtnAlt} />
            </button>
         </div>
      </div>
   );
};

export default VideoCarousel;
