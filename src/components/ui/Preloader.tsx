import { motion } from "motion/react";
import { useEffect, useState } from "react";

export function Preloader() {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const hasVisited = sessionStorage.getItem("hasVisited");
    if (hasVisited) {
      setIsVisible(false);
      return;
    }

    const timer = setTimeout(() => {
      setIsVisible(false);
      sessionStorage.setItem("hasVisited", "true");
    }, 2500);

    return () => clearTimeout(timer);
  }, []);

  if (!isVisible) return null;

  return (
    <motion.div
      className="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-primary"
      initial={{ y: 0 }}
      animate={{ y: "-100%" }}
      transition={{ duration: 0.8, ease: [0.4, 0, 0.2, 1], delay: 2.5 }}
      onAnimationComplete={() => setIsVisible(false)}
    >
      <div className="flex flex-col items-center">
        <svg
          width="120"
          height="140"
          viewBox="0 0 120 140"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="mb-6"
        >
          <motion.path
            d="M60 5L10 25V65C10 100 30 130 60 135C90 130 110 100 110 65V25L60 5Z"
            stroke="white"
            strokeWidth="4"
            strokeLinecap="round"
            strokeLinejoin="round"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{ pathLength: 1, opacity: 1 }}
            transition={{ duration: 1.5, ease: "easeInOut" }}
          />
          <motion.path
            d="M60 25L30 35V65C30 90 45 110 60 115C75 110 90 90 90 65V35L60 25Z"
            fill="white"
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.8, delay: 1, ease: "backOut" }}
          />
        </svg>

        <div className="overflow-hidden">
          <motion.h1
            className="text-2xl font-bold tracking-[0.2em] text-white uppercase"
            initial={{ y: "100%" }}
            animate={{ y: 0 }}
            transition={{ duration: 0.5, delay: 1.5 }}
          >
            Bilpam Shield
          </motion.h1>
        </div>
      </div>
    </motion.div>
  );
}
