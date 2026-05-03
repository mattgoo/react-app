import { gsap } from 'gsap';

export interface RevealOptions {
  y?: number;
  duration?: number;
  stagger?: number;
  delay?: number;
  ease?: string;
}

export function revealOnEnter(
  targets: gsap.TweenTarget,
  opts: RevealOptions = {},
): gsap.core.Tween {
  const y = opts.y ?? 20;
  const ensureRest = () => {
    gsap.set(targets, { opacity: 1, y: 0, clearProps: 'opacity,transform' });
  };
  return gsap.fromTo(
    targets,
    { opacity: 0, y },
    {
      opacity: 1,
      y: 0,
      duration: opts.duration ?? 0.5,
      stagger: opts.stagger ?? 0.08,
      delay: opts.delay ?? 0,
      ease: opts.ease ?? 'power2.out',
      onComplete: ensureRest,
      onInterrupt: ensureRest,
    },
  );
}
