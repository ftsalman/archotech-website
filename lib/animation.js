import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

let isRegistered = false;

export const premiumEase = "power4.out";
export const premiumEaseSoft = "power3.out";

/* Register GSAP plugin */
export function registerGsap() {
  if (typeof window === "undefined" || isRegistered) return;

  gsap.registerPlugin(ScrollTrigger);
  isRegistered = true;
}

/* Check if animation should run */
export function canAnimate() {
  if (typeof window === "undefined") return false;

  return !window.matchMedia("(prefers-reduced-motion: reduce)").matches;
}

/* Reveal animation on scroll */
export function revealOnScroll(targets, options = {}) {
  if (!canAnimate()) return;

  registerGsap();

  const {
    trigger,
    start = "top 86%",
    y = 40,
    stagger = 0,
    duration = 0.9,
    ease = "power3.out",
    scrub,
  } = options;

  const resolvedTrigger = trigger || targets;

  return gsap.fromTo(
    targets,
    {
      y: y,
      autoAlpha: 0,
    },
    {
      y: 0,
      autoAlpha: 1,
      duration: duration,
      stagger: stagger,
      ease: ease,
      scrollTrigger: {
        trigger: resolvedTrigger,
        start: start,
        scrub: scrub,
      },
    }
  );
}

/* Mask reveal animation */
export function revealMask(targets, options = {}) {
  if (!canAnimate()) return;

  registerGsap();

  const {
    trigger,
    start = "top 84%",
    y = 28,
    stagger = 0,
    duration = 1,
    ease = premiumEase,
    scrub,
    clipStart = "inset(0 0 16% 0 round 1.75rem)",
    clipEnd = "inset(0 0 0% 0 round 1.75rem)",
    scale = 1.04,
  } = options;

  const resolvedTrigger = trigger || targets;

  return gsap.fromTo(
    targets,
    {
      y: y,
      autoAlpha: 0,
      scale: scale,
      clipPath: clipStart,
    },
    {
      y: 0,
      autoAlpha: 1,
      scale: 1,
      clipPath: clipEnd,
      duration: duration,
      stagger: stagger,
      ease: ease,
      scrollTrigger: {
        trigger: resolvedTrigger,
        start: start,
        scrub: scrub,
      },
    }
  );
}

export { gsap, ScrollTrigger };