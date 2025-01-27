import gsap from "gsap"
import * as THREE from "three";
import { ScrollTrigger } from "gsap/all"
import { RefObject } from "react";
import type { AnimationProps, ScrollProps } from "../types/Gsap";

gsap.registerPlugin(ScrollTrigger);

export const animateWithGsap = (target: string, animationProps: AnimationProps, scrollProps?: ScrollProps) => {
  gsap.to(target, {
    ...animationProps,
    scrollTrigger: {
      trigger: target,
      toggleActions: 'restart reverse restart reverse',
      start: 'top 90%',
      ...scrollProps,
    }
  })
}

export const animateWithGsapTimeline = (
  timeline: GSAPTimeline, 
  rotationRef: RefObject<THREE.Group>, 
  rotationState: number, 
  firstTarget: string, 
  secondTarget: string, 
  animationProps: AnimationProps
) => {
  timeline.to(rotationRef.current!.rotation, {
    y: rotationState,
    duration: 1,
    ease: 'power2.inOut'
  })

  timeline.to(
    firstTarget,
    {
      ...animationProps,
      ease: 'power2.inOut'
    },
    '<'
  )

  timeline.to(
    secondTarget,
    {
      ...animationProps,
      ease: 'power2.inOut'
    },
    '<'
  )
}