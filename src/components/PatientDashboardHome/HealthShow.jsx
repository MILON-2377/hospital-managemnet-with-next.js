"use client";
import { motion, useMotionValue, useTransform, } from "framer-motion";
import { useEffect } from "react";

export default function HealthShow({ healthPercentage }) {
  const borderPercentage = useMotionValue(0);

  // Calculate the rotation needed to fill the circular border
  const rotate = useTransform(borderPercentage, [0, 100], ["0deg", "360deg"]);

  useEffect(() => {
    // Animate the border percentage to the healthPercentage when component mounts
    borderPercentage.set(healthPercentage);
  }, [healthPercentage, borderPercentage]);

  return (
    <div className="relative w-44 h-44">
      <div className="absolute inset-0 flex items-center justify-center">
        <p className="text-[12px] font-[500] text-center text-gray-500">
          Last visit 24 Aug, 2024
        </p>
      </div>
      <motion.div
        className="w-44 h-44 rounded-full border-[14px] border-green-500 border-b-gray-100 flex items-center justify-center"
        style={{
          borderImage: `conic-gradient(
              #4caf50 0%,
              #4caf50 ${rotate.get()}%,
              transparent ${rotate.get()}%,
              transparent 100%
            )`,
        }}
      />
    </div>
  );
}
