import { useEffect, useRef, useState } from 'react';

interface ScrollAnimationProps {
  children: React.ReactNode;
  className?: string;
  animation?: 'fadeInUp' | 'fadeInScale' | 'slideInLeft' | 'slideInRight';
  delay?: number;
}

export const ScrollAnimation: React.FC<ScrollAnimationProps> = ({
  children,
  className = '',
  animation = 'fadeInUp',
  delay = 0
}) => {
  const [isVisible, setIsVisible] = useState(false);
  const elementRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => {
            setIsVisible(true);
          }, delay);
        }
      },
      {
        threshold: 0.1,
        rootMargin: '-50px 0px -50px 0px'
      }
    );

    if (elementRef.current) {
      observer.observe(elementRef.current);
    }

    return () => observer.disconnect();
  }, [delay]);

  const animationClass = isVisible ? `animate-${animation.replace(/([A-Z])/g, '-$1').toLowerCase()}` : 'scroll-hidden';

  return (
    <div
      ref={elementRef}
      className={`${animationClass} ${className}`}
      style={{ animationDelay: isVisible ? `${delay}ms` : undefined }}
    >
      {children}
    </div>
  );
};