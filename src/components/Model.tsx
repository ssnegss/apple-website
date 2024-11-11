import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import ModelView from "./ModelView";

const Model = () => {
   useGSAP(() => {
      gsap.to("#model__title", {
         y: 0,
         opacity: 1,
         duration: 1,
      });
   }, []);

   return (
      <section className="section model">
         <div className="container">
            <h2 className="h2 model__title" id="model__title">
               Take a closer look.
            </h2>
            <div className="model__container">
               <div className="model__inner">
                  <ModelView />
               </div>
            </div>
         </div>
      </section>
   );
};

export default Model;
