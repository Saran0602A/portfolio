

import { motion, useSpring } from "motion/react";
import { useEffect, useRef, useState } from "react";

const Cursor = () => {
  const [isMoving, setIsMoving] = useState(false);
  const lastMousePos = useRef({ x: 0, y: 0 });
  const velocity = useRef({ x: 0, y: 0 });
  const lastUpdateTime = useRef(Date.now());
  const previousAngle = useRef(0);
  const accumulatedRotation = useRef(0);

  const cursorX = useSpring(0, {
    damping: 45,
    stiffness: 400,
    mass: 1,
    restDelta: 0.001,
  });
  const cursorY = useSpring(0, {
    damping: 45,
    stiffness: 400,
    mass: 1,
    restDelta: 0.001,
  });
  const rotation = useSpring(0, {
    damping: 60,
    stiffness: 300,
  });
  const scale = useSpring(1, {
    stiffness: 500,
    damping: 35,
  });

  useEffect(() => {
    const updateVelocity = (currentPos) => {
      const currentTime = Date.now();
      const deltaTime = currentTime - lastUpdateTime.current;

      if (deltaTime > 0) {
        velocity.current = {
          x: (currentPos.x - lastMousePos.current.x) / deltaTime,
          y: (currentPos.y - lastMousePos.current.y) / deltaTime,
        };
      }

      lastUpdateTime.current = currentTime;
      lastMousePos.current = currentPos;
    };

    const smoothMouseMove = (e) => {
      const currentPos = { x: e.clientX, y: e.clientY };
      updateVelocity(currentPos);

      const speed = Math.sqrt(
        velocity.current.x ** 2 + velocity.current.y ** 2
      );

      cursorX.set(currentPos.x);
      cursorY.set(currentPos.y);

      if (speed > 0.1) {
        const currentAngle =
          Math.atan2(velocity.current.y, velocity.current.x) * (180 / Math.PI) +
          90;

        let angleDiff = currentAngle - previousAngle.current;
        if (angleDiff > 180) angleDiff -= 360;
        if (angleDiff < -180) angleDiff += 360;
        accumulatedRotation.current += angleDiff;
        rotation.set(accumulatedRotation.current);
        previousAngle.current = currentAngle;

        scale.set(0.95);
        setIsMoving(true);

        const timeout = setTimeout(() => {
          scale.set(1);
          setIsMoving(false);
        }, 150);

        return () => clearTimeout(timeout);
      }
    };

    let rafId;
    const throttledMouseMove = (e) => {
      if (rafId) return;
      rafId = requestAnimationFrame(() => {
        smoothMouseMove(e);
        rafId = 0;
      });
    };

    document.body.style.cursor = "none";
    window.addEventListener("mousemove", throttledMouseMove);

    return () => {
      window.removeEventListener("mousemove", throttledMouseMove);
      document.body.style.cursor = "auto";
      if (rafId) cancelAnimationFrame(rafId);
    };
  }, [cursorX, cursorY, rotation, scale]);

  return (
    <motion.div
      style={{
        position: "fixed",
        left: cursorX,
        top: cursorY,
        translateX: "-50%",
        translateY: "-50%",
        rotate: rotation,
        scale: scale,
        zIndex: 100,
        pointerEvents: "none",
        willChange: "transform",
      }}
      initial={{ scale: 0 }}
      animate={{ scale: 1 }}
      transition={{
        type: "spring",
        stiffness: 400,
        damping: 30,
      }}
    >
      {/* Custom SVG cursor */}
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width={50}
        height={54}
        viewBox="0 0 50 54"
        fill="none"
        style={{ scale: 0.5 }}
      >
        <g filter="url(#filter0_d)">
          <path
            d="M42.68 41.15L27.51 6.8C26.73 5.03 24.21 5.03 23.39 6.8L7.6 41.15C6.76 42.98 8.53 44.89 10.41 44.2L24.38 39.05C24.88 38.86 25.44 38.86 25.94 39.05L39.81 44.2C41.68 44.89 43.49 42.98 42.68 41.15Z"
            fill="black"
          />
          <path
            d="M43.71 40.69L28.54 6.34C27.36 3.65 23.58 3.7 22.37 6.33L6.57 40.68C5.31 43.42 7.97 46.3 10.8 45.25L24.77 40.11C25.02 40.01 25.3 40.02 25.55 40.11L39.42 45.25C42.23 46.3 44.93 43.43 43.71 40.69Z"
            stroke="white"
            strokeWidth={2.26}
          />
        </g>
        <defs>
          <filter
            id="filter0_d"
            x={0.6}
            y={0.95}
            width={49.06}
            height={52.43}
            filterUnits="userSpaceOnUse"
            colorInterpolationFilters="sRGB"
          >
            <feFlood floodOpacity={0} result="BackgroundImageFix" />
            <feColorMatrix
              in="SourceAlpha"
              type="matrix"
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
              result="hardAlpha"
            />
            <feOffset dy={2.26} />
            <feGaussianBlur stdDeviation={2.26} />
            <feComposite in2="hardAlpha" operator="out" />
            <feColorMatrix
              type="matrix"
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.08 0"
            />
            <feBlend
              mode="normal"
              in2="BackgroundImageFix"
              result="effect1_dropShadow"
            />
            <feBlend
              mode="normal"
              in="SourceGraphic"
              in2="effect1_dropShadow"
              result="shape"
            />
          </filter>
        </defs>
      </svg>
    </motion.div>
  );
};

export default Cursor;
