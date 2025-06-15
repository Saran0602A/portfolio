"use client";

import React, { useEffect, useState } from "react";

// Optional helper for class merging (replace with your logic or library if needed)
function cn(...classes) {
  return classes.filter(Boolean).join(" ");
}

function Metorids() {
  const [meteorStyles, setMeteorStyles] = useState([]);

  useEffect(() => {
    const number = 20;
    const minDelay = 0.2;
    const maxDelay = 1.2;
    const minDuration = 2;
    const maxDuration = 10;
    const angle = 215;

    const styles = new Array(number).fill(null).map(() => ({
      "--angle": -angle + "deg",
      top: "-5%",
      left: `calc(0% + ${Math.floor(Math.random() * window.innerWidth)}px)`,
      animationDelay: Math.random() * (maxDelay - minDelay) + minDelay + "s",
      animationDuration:
        Math.floor(Math.random() * (maxDuration - minDuration) + minDuration) +
        "s",
    }));

    setMeteorStyles(styles);
  }, []);

  return (
    <>
      {meteorStyles.map((style, idx) => (
        <span
          key={idx}
          style={style}
          className={cn(
            "pointer-events-none absolute size-0.5 rotate-[var(--angle)] animate-meteor rounded-full bg-zinc-500 shadow-[0_0_0_1px_#ffffff10]"
          )}
        >
          <div className="pointer-events-none absolute top-1/2 -z-10 h-px w-[50px] -translate-y-1/2 bg-gradient-to-r from-zinc-500 to-transparent" />
        </span>
      ))}
    </>
  );
}

export default Metorids;
