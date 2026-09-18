'use client';

import React, { useEffect, useState } from 'react';
import { motion, useSpring, useMotionValue } from 'framer-motion';

export const BuildCursor: React.FC = () => {
  const [cursorText, setCursorText] = useState<string | null>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [isTouchDevice, setIsTouchDevice] = useState(true);

  const mouseX = useMotionValue(-100);
  const mouseY = useMotionValue(-100);

  const springConfig = { damping: 28, stiffness: 350, mass: 0.5 };
  const smoothX = useSpring(mouseX, springConfig);
  const smoothY = useSpring(mouseY, springConfig);

  useEffect(() => {
    // Detect touch device
    const isTouch = window.matchMedia('(pointer: coarse)').matches;
    setIsTouchDevice(isTouch);
    if (isTouch) return;

    const handleMouseMove = (e: MouseEvent) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
      if (!isVisible) setIsVisible(true);

      // Check target or parent for data-cursor
      let target = e.target as HTMLElement | null;
      let foundText: string | null = null;

      while (target && target !== document.body) {
        if (target.dataset && target.dataset.cursor) {
          foundText = target.dataset.cursor;
          break;
        }
        target = target.parentElement;
      }

      setCursorText(foundText);
    };

    const handleMouseLeave = () => {
      setIsVisible(false);
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    document.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, [mouseX, mouseY, isVisible]);

  if (isTouchDevice || !isVisible) return null;

  return (
    <motion.div
      className="custom-build-cursor fixed top-0 left-0 pointer-events-none z-[99999]"
      style={{
        x: smoothX,
        y: smoothY,
        translateX: '-50%',
        translateY: '-50%'
      }}
    >
      {cursorText ? (
        <motion.div
          initial={{ scale: 0.6, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.6, opacity: 0 }}
          transition={{ duration: 0.2, ease: 'easeOut' }}
          className="flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-gradient-to-r from-[#f02a8f] via-[#ff4f78] to-[#ff6657] text-white text-xs font-mono font-bold tracking-wider uppercase shadow-[0_0_25px_rgba(240,42,143,0.6)] whitespace-nowrap"
        >
          <span>{cursorText}</span>
        </motion.div>
      ) : (
        <motion.div
          initial={{ scale: 0.5, opacity: 0 }}
          animate={{ scale: 1, opacity: 0.8 }}
          transition={{ duration: 0.15 }}
          className="w-2.5 h-2.5 rounded-full bg-[#f02a8f] shadow-[0_0_12px_rgba(240,42,143,0.9)]"
        />
      )}
    </motion.div>
  );
};
