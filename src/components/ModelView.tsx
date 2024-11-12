import {
   Html,
   OrbitControls,
   PerspectiveCamera,
   View,
} from "@react-three/drei";
import * as THREE from "three";
import { ModelView as ModelViewType } from "../types/ModelView";
import { FC, Suspense } from "react";
import Lights from "./Lights";
import IPhone from "./IPhone";
import Loader from "./Loader";

const ModelView: FC<ModelViewType> = ({
   index,
   groupRef,
   gsapType,
   controlRef,
   setRotationState,
   item,
   size,
}: ModelViewType) => {
   return (
      <View
         index={index}
         id={gsapType}
         className="model3d"
         style={{ right: index === 2 ? "-100%" : 0 }}
      >
         <ambientLight intensity={0.3} />
         <PerspectiveCamera makeDefault position={[0, 0, 4]} />
         <Lights />
         <OrbitControls
            makeDefault
            ref={controlRef}
            enableZoom={false}
            enablePan={false}
            rotateSpeed={0.4}
            target={new THREE.Vector3(0, 0, 0)}
            onEnd={() =>
               setRotationState(controlRef.current.getAzimuthalAngle())
            }
         />
         <group
            ref={groupRef}
            name={`${index === 1} ? 'small' : 'large`}
            position={[0, 0, 0]}
         >
            <Suspense
               fallback={
                  <Loader/>
               }
            >
               <IPhone
                  scale={index === 1 ? [15, 15, 15] : [17, 17, 17]}
                  item={item}
                  size={size}
               />
            </Suspense>
         </group>
      </View>
   );
};

export default ModelView;
