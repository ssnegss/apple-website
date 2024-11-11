import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import * as THREE from "three";
import ModelView from "./ModelView";
import { useState, useRef } from "react";
import { PhoneModelSize } from "../types/PhoneModelSize";
import { yellowImg } from "../utils";

const Model = () => {
   const [size, setSize] = useState<PhoneModelSize>("small");
   const [model, setModel] = useState({
      title: "Iphone 15 Pro in Natural Titanium",
      color: ["#8F8A81", "#FFE7B9", "#6F6C64"],
      img: yellowImg,
   });

   // camera control for the model view
   const cameraControlSmall = useRef();
   const cameraControlLarge = useRef();

   // models
   const small = useRef(new THREE.Group());
   const large = useRef(new THREE.Group());

   //rotation
   const [smallRotation, setSmallRotation] = useState<number>(0);
   const [largeRotation, setLargeRotation] = useState<number>(0);

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
                  <ModelView
                     index={1}
                     groupRef={small}
                     gsapType="view1"
                     controlRef={cameraControlSmall}
                     setRotationState={setSmallRotation}
                     item={model}
                     size={size}
                  />
                  <ModelView
                     index={2}
                     groupRef={large}
                     gsapType="view2"
                     controlRef={cameraControlLarge}
                     setRotationState={setLargeRotation}
                     item={model}
                     size={size}
                  />
               </div>
            </div>
         </div>
      </section>
   );
};

export default Model;
