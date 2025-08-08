import React, { useEffect, useRef } from "react";

/****
 * FloatingOrbs – decorative, accessible background elements
 * Uses semantic tokens from index.css. Respects prefers-reduced-motion.
 */
const FloatingOrbs: React.FC = () => {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    // Pointer-follow glow
    const handle = (e: MouseEvent) => {
      const r = el.getBoundingClientRect();
      const x = e.clientX - r.left;
      const y = e.clientY - r.top;
      el.style.setProperty("--px", `${x}px`);
      el.style.setProperty("--py", `${y}px`);
    };
    window.addEventListener("pointermove", handle);
    return () => window.removeEventListener("pointermove", handle);
  }, []);

  return (
    <div ref={ref} aria-hidden className="pointer-events-none absolute inset-0 overflow-hidden">
      {/* radial pointer light */}
      <div
        className="absolute inset-0 opacity-60 mix-blend-screen"
        style={{
          background:
            "radial-gradient(400px 200px at var(--px,50%) var(--py,30%), hsl(var(--glow)/0.35), transparent 60%)",
        }}
      />

      {/* softly floating orbs */}
      <div className="absolute -top-10 -left-10 size-40 rounded-full blur-3xl"
           style={{ background: "radial-gradient(circle at 30% 30%, hsl(var(--brand)/0.45), transparent 60%)" }} />
      <div className="absolute top-20 right-10 size-56 rounded-full blur-3xl animate-float"
           style={{ background: "radial-gradient(circle at 60% 40%, hsl(var(--glow)/0.35), transparent 60%)" }} />
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 size-64 rounded-full blur-3xl animate-float"
           style={{ background: "radial-gradient(circle at 50% 50%, hsl(var(--brand)/0.28), transparent 60%)", animationDelay: '1.5s' }} />
    </div>
  );
};

export default FloatingOrbs;
