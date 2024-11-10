import { highlightsSlides } from "../constants";
import { HighlightSlide } from "../types/HighlightSlide";

const VideoCarousel = () => {
   return (
      <>
         <div className="videoCarousel__slides">
            {highlightsSlides.map((slide: HighlightSlide, i: number) => (
               <div
                  key={slide.id}
                  id={`slide-${i}`}
                  className="videoCarousel__slide"
               >
                  <div className="videoCarousel__slideVideo">
                     <video playsInline={true} preload="auto" muted>
                        <source src={slide.video} type="video/mp4" />
                     </video>
                  </div>
                  <div className="videoCarousel__slideText">
                     {slide.textLists.map((slideText, j) => (
                        <div key={i}>{slideText}</div>
                     ))}
                  </div>
               </div>
            ))}
         </div>
      </>
   );
};

export default VideoCarousel;
