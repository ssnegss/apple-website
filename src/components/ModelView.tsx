import { Html, PerspectiveCamera, View } from "@react-three/drei";
import { ModelView as ModelViewType } from "../types/ModelView";
import { FC, Suspense } from "react";
import Lights from "./Lights";
import  IPhone  from "./IPhone";

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
      <>
         hello
         <View
            index={index}
            id={gsapType}
            className="model3d"
            style={{ right: index === 2 ? "-100%" : 0 }}
         >
            {/* Ambient Light */}
            <ambientLight intensity={0.3} />
            <PerspectiveCamera makeDefault position={[0, 0, 4]} />
            <Lights />
            <Suspense
               fallback={
                  <Html>
                     <div>Loading</div>
                  </Html>
               }
            >
               {/* <IPhone /> */}
            </Suspense>
         </View>
      </>
   );
};

export default ModelView;
