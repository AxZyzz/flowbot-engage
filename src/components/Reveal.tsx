import React, { useEffect, useRef, useState } from "react";
import { cn } from "@/lib/utils";

interface RevealProps {
  className?: string;
  children: React.ReactNode;
  as?: keyof JSX.IntrinsicElements;
}

let revealInstanceCounter = 0;

const Reveal: React.FC<RevealProps> = ({ className, children, as: Tag = "div" as any }) => {
  const ref = useRef<HTMLElement | null>(null);
  const [visible, setVisible] = useState(false);
  const [instanceIndex] = useState(() => revealInstanceCounter++);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisible(true);
            io.disconnect();
          }
        });
      },
      { threshold: 0.15 }
    );

    io.observe(el);
    return () => io.disconnect();
  }, []);

  const comingFromLeft = instanceIndex % 2 === 0;

  return (
    <Tag
      ref={ref as any}
      className={cn(
        visible
          ? "opacity-100 translate-x-0"
          : comingFromLeft
            ? "opacity-0 -translate-x-6"
            : "opacity-0 translate-x-6",
        "transition-all duration-500 ease-out will-change-transform will-change-opacity",
        className
      )}
    >
      {children}
    </Tag>
  );
};

export default Reveal;
