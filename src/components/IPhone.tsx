/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Author: polyman (https://sketchfab.com/Polyman_3D)
License: CC-BY-4.0 (http://creativecommons.org/licenses/by/4.0/)
Source: https://sketchfab.com/3d-models/apple-iphone-15-pro-max-black-df17520841214c1792fb8a44c6783ee7
Title: Apple iPhone 15 Pro Max Black
*/

import * as THREE from "three";
import React, { FC, useEffect } from "react";
import { useGLTF, useTexture } from "@react-three/drei";
import { ModelProps } from "../types/ModelView";

const Model: FC<ModelProps> = (props: ModelProps) => {
   const { nodes, materials } = useGLTF("/models/scene.glb");

   const texture = useTexture(props.item.img);

   useEffect(() => {
      Object.entries(materials).map(([materialName, material]) => {
         if (
            material instanceof THREE.MeshStandardMaterial ||
            material instanceof THREE.MeshBasicMaterial
         ) {
            // Exclude specific materials by their names
            if (
               materialName !== "zFdeDaGNRwzccye" &&
               materialName !== "ujsvqBWRMnqdwPx" &&
               materialName !== "hUlRcbieVuIiOXG" &&
               materialName !== "jlzuBkUzuJqgiAK" &&
               materialName !== "xNrofRCqOXXHVZt"
            ) {
               material.color.set(props.item.color[0]); // Ensure props.item.color[0] is a valid color string or a THREE.Color object
               material.needsUpdate = true;
            }
         }
      });
   }, [materials, props.item]);

   return (
      <group {...props} dispose={null}>
         <mesh
            castShadow
            receiveShadow
            geometry={(nodes.ttmRoLdJipiIOmf as THREE.Mesh).geometry}
            material={materials.hUlRcbieVuIiOXG}
            scale={new THREE.Vector3(0.01, 0.01, 0.01)}
         />
         <mesh
            castShadow
            receiveShadow
            geometry={(nodes.DjsDkGiopeiEJZK as THREE.Mesh).geometry}
            material={materials.PaletteMaterial001}
            scale={new THREE.Vector3(0.01, 0.01, 0.01)}
         />
         <mesh
            castShadow
            receiveShadow
            geometry={(nodes.buRWvyqhBBgcJFo as THREE.Mesh).geometry}
            material={materials.PaletteMaterial002}
            scale={new THREE.Vector3(0.01, 0.01, 0.01)}
         />
         <mesh
            castShadow
            receiveShadow
            geometry={(nodes.MrMmlCAsAxJpYqQ_0 as THREE.Mesh).geometry}
            material={materials.dxCVrUCvYhjVxqy}
            scale={new THREE.Vector3(0.01, 0.01, 0.01)}
         />
         <mesh
            castShadow
            receiveShadow
            geometry={(nodes.wqbHSzWaUxBCwxY_0 as THREE.Mesh).geometry}
            material={materials.MHFGNLrDQbTNima}
            scale={new THREE.Vector3(0.01, 0.01, 0.01)}
         />
         <mesh
            castShadow
            receiveShadow
            geometry={(nodes.QvGDcbDApaGssma as THREE.Mesh).geometry}
            material={materials.kUhjpatHUvkBwfM}
            scale={new THREE.Vector3(0.01, 0.01, 0.01)}
         />
         <mesh
            castShadow
            receiveShadow
            geometry={(nodes.vFwJFNASGvEHWhs as THREE.Mesh).geometry}
            material={materials.RJoymvEsaIItifI}
            scale={new THREE.Vector3(0.01, 0.01, 0.01)}
         />
         <mesh
            castShadow
            receiveShadow
            geometry={(nodes.evAxFwhaQUwXuua as THREE.Mesh).geometry}
            material={materials.KSIxMqttXxxmOYl}
            scale={new THREE.Vector3(0.01, 0.01, 0.01)}
         />
         <mesh
            castShadow
            receiveShadow
            geometry={(nodes.USxQiqZgxHbRvqB as THREE.Mesh).geometry}
            material={materials.mcPrzcBUcdqUybC}
            scale={new THREE.Vector3(0.01, 0.01, 0.01)}
         />
         <mesh
            castShadow
            receiveShadow
            geometry={(nodes.TvgBVmqNmSrFVfW as THREE.Mesh).geometry}
            material={materials.pIhYLPqiSQOZTjn}
            scale={new THREE.Vector3(0.01, 0.01, 0.01)}
         />
         <mesh
            castShadow
            receiveShadow
            geometry={(nodes.GuYJryuYunhpphO as THREE.Mesh).geometry}
            material={materials.eShKpuMNVJTRrgg}
            scale={new THREE.Vector3(0.01, 0.01, 0.01)}
         />
         <mesh
            castShadow
            receiveShadow
            geometry={(nodes.pvdHknDTGDzVpwc as THREE.Mesh).geometry}
            material={materials.xdyiJLYTYRfJffH}
            scale={new THREE.Vector3(0.01, 0.01, 0.01)}
         />
         <mesh
            castShadow
            receiveShadow
            geometry={(nodes.CfghdUoyzvwzIum as THREE.Mesh).geometry}
            material={materials.jpGaQNgTtEGkTfo}
            scale={new THREE.Vector3(0.01, 0.01, 0.01)}
         />
         <mesh
            castShadow
            receiveShadow
            geometry={(nodes.DjdhycfQYjKMDyn as THREE.Mesh).geometry}
            material={materials.ujsvqBWRMnqdwPx}
            scale={new THREE.Vector3(0.01, 0.01, 0.01)}
         />
         <mesh
            castShadow
            receiveShadow
            geometry={(nodes.usFLmqcyrnltBUr as THREE.Mesh).geometry}
            material={materials.sxNzrmuTqVeaXdg}
            scale={new THREE.Vector3(0.01, 0.01, 0.01)}
         />
         <mesh
            castShadow
            receiveShadow
            geometry={(nodes.xXDHkMplTIDAXLN as THREE.Mesh).geometry}
            material={materials.pIJKfZsazmcpEiU}
            scale={new THREE.Vector3(0.01, 0.01, 0.01)}
         >
            <meshStandardMaterial roughness={1} map={texture} />
         </mesh>
         <mesh
            castShadow
            receiveShadow
            geometry={(nodes.vELORlCJixqPHsZ as THREE.Mesh).geometry}
            material={materials.zFdeDaGNRwzccye}
            scale={new THREE.Vector3(0.01, 0.01, 0.01)}
         />
         <mesh
            castShadow
            receiveShadow
            geometry={(nodes.EbQGKrWAqhBHiMv as THREE.Mesh).geometry}
            material={materials.TBLSREBUyLMVtJa}
            scale={new THREE.Vector3(0.01, 0.01, 0.01)}
         />
         <mesh
            castShadow
            receiveShadow
            geometry={(nodes.EddVrWkqZTlvmci as THREE.Mesh).geometry}
            material={materials.xNrofRCqOXXHVZt}
            scale={new THREE.Vector3(0.01, 0.01, 0.01)}
         />
         <mesh
            castShadow
            receiveShadow
            geometry={(nodes.KSWlaxBcnPDpFCs as THREE.Mesh).geometry}
            material={materials.yQQySPTfbEJufve}
            scale={new THREE.Vector3(0.01, 0.01, 0.01)}
         />
         <mesh
            castShadow
            receiveShadow
            geometry={(nodes.TakBsdEjEytCAMK as THREE.Mesh).geometry}
            material={materials.PaletteMaterial003}
            scale={new THREE.Vector3(0.01, 0.01, 0.01)}
         />
         <mesh
            castShadow
            receiveShadow
            geometry={(nodes.IykfmVvLplTsTEW as THREE.Mesh).geometry}
            material={materials.PaletteMaterial004}
            scale={new THREE.Vector3(0.01, 0.01, 0.01)}
         />
         <mesh
            castShadow
            receiveShadow
            geometry={(nodes.wLfSXtbwRlBrwof as THREE.Mesh).geometry}
            material={materials.oZRkkORNzkufnGD}
            scale={new THREE.Vector3(0.01, 0.01, 0.01)}
         />
         <mesh
            castShadow
            receiveShadow
            geometry={(nodes.WJwwVjsahIXbJpU as THREE.Mesh).geometry}
            material={materials.yhcAXNGcJWCqtIS}
            scale={new THREE.Vector3(0.01, 0.01, 0.01)}
         />
         <mesh
            castShadow
            receiveShadow
            geometry={(nodes.YfrJNXgMvGOAfzz as THREE.Mesh).geometry}
            material={materials.bCgzXjHOanGdTFV}
            scale={new THREE.Vector3(0.01, 0.01, 0.01)}
         />
         <mesh
            castShadow
            receiveShadow
            geometry={(nodes.DCLCbjzqejuvsqH as THREE.Mesh).geometry}
            material={materials.vhaEJjZoqGtyLdo}
            scale={new THREE.Vector3(0.01, 0.01, 0.01)}
         />
         <mesh
            castShadow
            receiveShadow
            geometry={(nodes.CdalkzDVnwgdEhS as THREE.Mesh).geometry}
            material={materials.jlzuBkUzuJqgiAK}
            scale={new THREE.Vector3(0.01, 0.01, 0.01)}
         />
         <mesh
            castShadow
            receiveShadow
            geometry={(nodes.NtjcIgolNGgYlCg as THREE.Mesh).geometry}
            material={materials.PpwUTnTFZJXxCoE}
            scale={new THREE.Vector3(0.01, 0.01, 0.01)}
         />
         <mesh
            castShadow
            receiveShadow
            geometry={(nodes.pXBNoLiaMwsDHRF as THREE.Mesh).geometry}
            material={materials.yiDkEwDSyEhavuP}
            scale={new THREE.Vector3(0.01, 0.01, 0.01)}
         />
         <mesh
            castShadow
            receiveShadow
            geometry={(nodes.IkoiNqATMVoZFKD as THREE.Mesh).geometry}
            material={materials.hiVunnLeAHkwGEo}
            scale={new THREE.Vector3(0.01, 0.01, 0.01)}
         />
         <mesh
            castShadow
            receiveShadow
            geometry={(nodes.rqgRAGHOwnuBypi as THREE.Mesh).geometry}
            material={materials.HGhEhpqSBZRnjHC}
            scale={new THREE.Vector3(0.01, 0.01, 0.01)}
         />
      </group>
   );
};

export default Model;

useGLTF.preload("/models/scene.glb");
