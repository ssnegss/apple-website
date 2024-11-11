import { useEffect, useRef, useState } from "react";
import { highlightsSlides } from "../constants";
import { HighlightSlide } from "../types/HighlightSlide";
import gsap from "gsap";
import { pauseImg, playImg, replayImg } from "../utils";
import { useGSAP } from "@gsap/react";

const VideoCarousel = () => {
   const videoRef = useRef([]);
   const videoSpanRef = useRef([]);
   const videoDivRef = useRef([]);

   const [video, setVideo] = useState({
      isEnd: false,
      startPlay: false,
      videoId: 0,
      isLastVideo: false,
      isPlaying: false,
   });

   const [loadedData, setLoadedData] = useState([]);

   const { isEnd, startPlay, videoId, isLastVideo, isPlaying } = video;

   useGSAP(() => {
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
         } else {
            startPlay && videoRef.current[videoId].play();
         }
      }
   }, [startPlay, videoId, isPlaying, loadedData]);

   const handleLoadedMetadata = (i, e) =>
      setLoadedData((prevVideo) => [...prevVideo, e]);

   useEffect(() => {
      const currentProgress = 0;
      let span = videoSpanRef.current;

      if (span[videoId]) {
         let animation = gsap.to(span[videoId], {
            onUpdate: () => {},

            onComplete: () => {},
         });
      }
   }, [videoId, startPlay]);

   const handleProcess = (type, i) => {
      switch (type) {
         case "video-end":
            setVideo((prevVideo) => ({
               ...prevVideo,
               isEnd: true,
               videoId: i + 1,
            }));
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
                  <div
                     key={slide.id}
                     id='video'
                     className="videoCarousel__slide"
                  >
                     <div className="videoCarousel__slideVideo">
                        <video
                           playsInline={true}
                           preload="auto"
                           muted
                           ref={(el) => (videoRef.current[slideIndex] = el)}
                           onPlay={() => {
                              setVideo((prevVideo) => ({
                                 ...prevVideo,
                                 isPlaying: true,
                              }));
                           }}
                           onLoadedMetadata={(e) =>
                              handleLoadedMetadata(slideIndex, e)
                           }
                        >
                           <source src={slide.video} type="video/mp4" />
                        </video>
                     </div>
                     <div className="videoCarousel__slideText">
                        {slide.textLists.map((slideText, slideTextindex) => (
                           <div key={slideTextindex}>{slideText}</div>
                        ))}
                     </div>
                  </div>
               )
            )}
         </div>
         <div className="videoCarousel__bulletsBlock">
            <div className="videoCarousel__bullets">
               {videoRef.current.map((_, spanIndex) => (
                  <span
                     key={spanIndex}
                     ref={(el) => (videoDivRef.current[spanIndex] = el)}
                     className="videoCarousel__bullet"
                  >
                     <span
                        className="videoCarousel__bulletInner"
                        ref={(el) => (videoSpanRef.current[spanIndex] = el)}
                     />
                  </span>
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
