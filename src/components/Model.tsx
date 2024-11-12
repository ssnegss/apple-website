import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import * as THREE from "three";
import type { OrbitControls } from 'three-stdlib'
import { animateWithGsapTimeline } from "../utils/animations";
import { PhoneModelSizeValue } from "../types/PhoneModel";
import { ModelItem } from "../types/ModelView";
import ModelView from "./ModelView";
import { useState, useRef, useEffect } from "react";
import { yellowImg } from "../utils";
import { Canvas } from "@react-three/fiber";
import { View } from "@react-three/drei";
import { models, sizes } from "../constants";

const Model = () => {
   const [size, setSize] = useState<PhoneModelSizeValue>("small");
   const [model, setModel] = useState<ModelItem>({
      title: "Iphone 15 Pro in Natural Titanium",
      color: ["#8F8A81", "#FFE7B9", "#6F6C64"],
      img: yellowImg,
   });

   // camera control for the model view
   const cameraControlSmall = useRef<OrbitControls | null>(null);
   const cameraControlLarge = useRef<OrbitControls | null>(null);

   // models
   const small = useRef(new THREE.Group());
   const large = useRef(new THREE.Group());

   //rotation
   const [smallRotation, setSmallRotation] = useState<number>(0);
   const [largeRotation, setLargeRotation] = useState<number>(0);

   const tl = gsap.timeline();

   useEffect(() => {
      if (size === "large") {
         animateWithGsapTimeline(tl, small, smallRotation, "#view1", "#view2", {
            transform: "translateX(-100%)",
            duration: 2,
         });
      }

      if (size === "small") {
         animateWithGsapTimeline(tl, large, largeRotation, "#view2", "#view1", {
            transform: "translateX(0)",
            duration: 2,
         });
      }
   }, [size]);

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
                  <Canvas
                     className="model__canvas"
                     eventSource={
                        document.getElementById("root") as HTMLElement
                     }
                  >
                     <View.Port />
                  </Canvas>
               </div>
               <div className="model__data">
                  <div className="model__name">{model.title}</div>
                  <div className="model__colorsBlock">
                     <ul className="model__colorsList">
                        {models.map((modelOption, i) => (
                           <li
                              key={i}
                              className="model__colorOption"
                              style={{
                                 backgroundColor: modelOption.color[0],
                                 borderColor:
                                    model === modelOption
                                       ? "white"
                                       : "transparent",
                              }}
                              onClick={() => setModel(modelOption)}
                           />
                        ))}
                     </ul>
                     <button className="model__sizes">
                        {sizes.map(({ label, value }) => (
                           <span
                              className="model__size"
                              key={label}
                              onClick={() => {
                                 setSize(value);
                              }}
                              style={{
                                 backgroundColor:
                                    size === value ? "white" : "transparent",
                                 color: size === value ? "black" : "white",
                              }}
                           >
                              {label}
                           </span>
                        ))}
                     </button>
                  </div>
               </div>
            </div>
         </div>
      </section>
   );
};

export default Model;
