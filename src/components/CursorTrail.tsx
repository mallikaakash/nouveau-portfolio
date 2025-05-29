"use client";

import { useEffect, useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";

type Footprint = {
  id: number;
  x: number;
  y: number;
  rotation: number;
  isLeft: boolean;
  timestamp: number;
};

export default function CursorTrail() {
  const [footprints, setFootprints] = useState<Footprint[]>([]);
  const [lastUpdate, setLastUpdate] = useState(0);
  const lastPositionRef = useRef({ x: 0, y: 0 });
  const updateDelay = 300; // Faster response for quick movement
  const footprintLifetime = 3000; // 3 seconds lifetime
  const stepDelay = 150; // Faster delay between feet for quick movement

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const now = Date.now();
      if (now - lastUpdate < updateDelay) return;
      
      setLastUpdate(now);
      
      // Calculate movement direction based on actual movement
      const deltaX = e.clientX - lastPositionRef.current.x;
      const deltaY = e.clientY - lastPositionRef.current.y;
      const rotation = Math.atan2(deltaY, deltaX) + (Math.PI / 2);
      
      // Update last position
      lastPositionRef.current = { x: e.clientX, y: e.clientY };

      const baseId = now;
      
      // Calculate perpendicular offset for foot positioning
      const perpX = Math.cos(rotation) * 8;
      const perpY = Math.sin(rotation) * 8;
      
      // Calculate both foot positions
      const leftFootX = e.clientX - perpX;
      const leftFootY = e.clientY - perpY + 8;
      const rightFootX = e.clientX + perpX;
      const rightFootY = e.clientY + perpY;
      
      // Determine which foot is lower (higher Y value = lower on screen)
      const leftIsLower = leftFootY > rightFootY;
      
      if (leftIsLower) {
        // Left foot is lower, so it appears first
        const leftFootprint = {
          id: baseId,
          x: leftFootX,
          y: leftFootY,
          rotation: rotation,
          isLeft: true,
          timestamp: now,
        };

        setFootprints(prev => [...prev, leftFootprint]);

        // Right foot appears after delay (upper foot)
        setTimeout(() => {
          const rightFootprint = {
            id: baseId + 1,
            x: rightFootX,
            y: rightFootY,
            rotation: rotation,
            isLeft: false,
            timestamp: now + stepDelay,
          };
          
          setFootprints(prev => [...prev, rightFootprint]);
        }, stepDelay);
      } else {
        // Right foot is lower, so it appears first
        const rightFootprint = {
          id: baseId,
          x: rightFootX,
          y: rightFootY,
          rotation: rotation,
          isLeft: false,
          timestamp: now,
        };

        setFootprints(prev => [...prev, rightFootprint]);

        // Left foot appears after delay (upper foot)
        setTimeout(() => {
          const leftFootprint = {
            id: baseId + 1,
            x: leftFootX,
            y: leftFootY,
            rotation: rotation,
            isLeft: true,
            timestamp: now + stepDelay,
          };
          
          setFootprints(prev => [...prev, leftFootprint]);
        }, stepDelay);
      }
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [lastUpdate, stepDelay]);

  // Remove old footprints based on timestamp
  useEffect(() => {
    const cleanupInterval = setInterval(() => {
      const now = Date.now();
      setFootprints(prev => 
        prev.filter(footprint => now - footprint.timestamp < footprintLifetime)
      );
    }, 500); // Check every 500ms

    return () => clearInterval(cleanupInterval);
  }, [footprintLifetime]);

  return (
    <div className="fixed inset-0 pointer-events-none z-20">
      <AnimatePresence>
        {footprints.map((footprint) => (
          <motion.div
            key={footprint.id}
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 0.8, scale: 1 }}
            exit={{ opacity: 0, scale: 0.5 }}
            transition={{ 
              duration: 0.8, // Faster animation for responsiveness
              opacity: { duration: 0.6 },
              scale: { duration: 0.3 }
            }}
            className="absolute w-4 h-8"
            style={{
              left: footprint.x,
              top: footprint.y,
              transform: `translate(-50%, -50%) rotate(${footprint.rotation}rad)`,
            }}
          >
            <div 
              className={`w-full h-full text-[#3b2c1a] dark:text-[#a99a78] opacity-80 ${
                footprint.isLeft ? "scale-x-[-1]" : ""
              }`}
            >
              <svg 
                viewBox="0 0 24 48" 
                fill="currentColor"
              >
                {footprint.isLeft ? (
                  // Left foot shape - slightly narrower toe
                  <path d="M13,0 C17,0 21,4 21,10 C21,16 17,20 13,20 C9,20 7,16 7,10 C7,4 9,0 13,0 Z M9,22 C13,22 17,25 17,30 C17,35 13,38 9,38 C5,38 1,35 1,30 C1,25 5,22 9,22 Z" />
                ) : (
                  // Right foot shape - slightly wider toe
                  <path d="M15,0 C19,0 23,4 23,10 C23,16 19,20 15,20 C11,20 9,16 9,10 C9,4 11,0 15,0 Z M11,22 C15,22 19,25 19,30 C19,35 15,38 11,38 C7,38 3,35 3,30 C3,25 7,22 11,22 Z" />
                )}
              </svg>
            </div>
          </motion.div>
        ))}
      </AnimatePresence>
    </div>
  );
} 