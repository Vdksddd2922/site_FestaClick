import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import SplitType from 'split-type';

gsap.registerPlugin(ScrollTrigger);

interface AnimatedTitleProps {
  children: React.ReactNode;
  className?: string;
  as?: React.ElementType;
}

const AnimatedTitle: React.FC<AnimatedTitleProps> = ({ children, className = '', as: Tag = 'h2' }) => {
  const titleRef = useRef<HTMLElement>(null);

  useEffect(() => {
    if (!titleRef.current) return;

    const split = new SplitType(titleRef.current, { types: 'lines,words,chars' });

    split.lines?.forEach((line) => {
      (line as HTMLElement).style.overflow = 'hidden';
      (line as HTMLElement).style.paddingBottom = '0.05em';
    });

    split.chars?.forEach((char) => {
      (char as HTMLElement).style.display = 'inline-block';
    });

    const ctx = gsap.context(() => {
      gsap.from(split.chars, {
        y: '100%',
        opacity: 0,
        duration: 0.3,
        stagger: 0.03,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: titleRef.current,
          start: "top 85%",
          toggleActions: "play none none none",
        },
      });
    }, titleRef);

    return () => {
      ctx.revert();
      split.revert();
    };
  }, [children]);

  // We add a wrapper to allow SplitType to process elements without breaking React's reference
  return (
    <Tag className={className}>
      <span ref={titleRef as any} className="block">
        {children}
      </span>
    </Tag>
  );
};

export default AnimatedTitle;
