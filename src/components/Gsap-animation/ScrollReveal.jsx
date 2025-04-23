import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import React, { useEffect, useRef } from 'react';
gsap.registerPlugin(ScrollTrigger);
const ScrollReveal = ({ children, direction = 'up', delay = 1, duration = 1.5}) => {
    const ref=useRef(null)
    useEffect(() => {
        const el = ref.current;
       
        const yOffset = direction === 'up' ? 50 : -50;
    
        gsap.fromTo(el,
          { y: yOffset, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            delay,
            duration,
            ease: 'power2.out',
            scrollTrigger: {
              trigger: el,
              start: 'top top',
              end: 'bottom 20%',
              scrub: true,
              toggleActions: 'play complete none none',
            },
          }
        );
      }, [direction]);
      return <div ref={ref}>{children}</div>;
};

export default ScrollReveal;