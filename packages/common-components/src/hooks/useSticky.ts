import {MutableRefObject, useEffect, useState} from "react";


export default function useSticky(stickyRef:  MutableRefObject<HTMLElement | null>, threshold?: number) {
  const [isSticky, setIsSticky] = useState(false);
  useEffect(() => {
    const stickyElement = stickyRef.current;
    const observer = new IntersectionObserver(
      ([e]) => {
        setIsSticky(!e.isIntersecting);
      },
      {threshold: [threshold || 0]}
    );
    if (stickyElement) observer.observe(stickyElement);
    return () => observer.disconnect();

  }, []);

  return {
    isSticky
  }
}