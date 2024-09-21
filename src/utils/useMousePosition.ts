import { useMotionValue } from "framer-motion";
import { useEffect } from "react";

export const useMousePosition = () => {
  const x = useMotionValue<number>(0);
  const y = useMotionValue<number>(0);

  useEffect(() => {
    const updateMousePosition = (ev: MouseEvent) => {
      x.set(ev.clientX);
      y.set(ev.clientY);
    };

    window.addEventListener("mousemove", updateMousePosition);

    return () => {
      window.removeEventListener("mousemove", updateMousePosition);
    };
  }, [x, y]);

  return { x, y };
};
