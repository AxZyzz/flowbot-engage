import React, { useEffect, useRef, useState } from "react";
import { cn } from "@/lib/utils";

interface RevealProps {
  className?: string;
  children: React.ReactNode;
  as?: keyof JSX.IntrinsicElements;
}

const Reveal: React.FC<RevealProps> = ({ className, children, as: Tag = "div" as any }) => {
  const ref = useRef<HTMLElement | null>(null);
  const [visible, setVisible] = useState(false);

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

  return (
    <Tag
      ref={ref as any}
      className={cn(
        visible ? "animate-enter" : "opacity-0 translate-y-2",
        "transition-all duration-300 will-change-transform will-change-opacity",
        className
      )}
    >
      {children}
    </Tag>
  );
};

export default Reveal;
