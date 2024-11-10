import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { FC } from "react";

const Highlights: FC = () => {
   useGSAP(() => {
      gsap.to("#highlights__title", { opacity: 1 });
   }, []);

   return (
      <section id="highlights" className="container highlights">
         <div>
            <div>
               <h2 className="h2 highlights__title" id="highlights__title">
                  Get the highlights
               </h2>
            </div>
         </div>
      </section>
   );
};

export default Highlights;
