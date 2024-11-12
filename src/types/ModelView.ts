import { MutableRefObject } from "react";
import type { OrbitControls as OrbitControlsImpl } from 'three-stdlib'
import { Group, Object3DEventMap } from "three";

export interface ModelView {
   index: number;
   groupRef: MutableRefObject<Group<Object3DEventMap>>;
   gsapType: string;
   controlRef: MutableRefObject<OrbitControlsImpl | null>;
   setRotationState: (value: number) => void;
   item: ModelItem;
   size: string;
}

export type ModelItem = {
   title: string;
   color: string[];
   img: string;
};
