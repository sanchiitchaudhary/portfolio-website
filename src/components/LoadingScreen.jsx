import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';

export default function LoadingScreen({ isLoading }) {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    if (!isLoading) return;
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          return 100;
        }
        return prev + 5;
      });
    }, 45);

    return () => clearInterval(interval);
  }, [isLoading]);

  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-surface-950 overflow-hidden"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, y: -40, transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] } }}
        >
          {/* Background subtle glow */}
          <div className="absolute w-[500px] h-[500px] rounded-full bg-accent-600/10 blur-[120px] pointer-events-none animate-pulse-glow" />

          <div className="flex flex-col items-center gap-8 relative z-10">
            {/* Dual rotating neon rings + SC branding */}
            <div className="relative w-24 h-24 flex items-center justify-center">
              {/* Outer ring */}
              <motion.div
                className="absolute inset-0 rounded-full border-2 border-transparent border-t-accent-500 border-r-cyan-400"
                animate={{ rotate: 360 }}
                transition={{ duration: 1.8, repeat: Infinity, ease: 'linear' }}
              />

              {/* Inner ring */}
              <motion.div
                className="absolute inset-2 rounded-full border-2 border-transparent border-b-accent-400 border-l-pink-500"
                animate={{ rotate: -360 }}
                transition={{ duration: 2.5, repeat: Infinity, ease: 'linear' }}
              />

              {/* Central initials */}
              <motion.span
                className="text-xl font-extrabold text-gradient font-heading"
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
              >
                SC
              </motion.span>
            </div>

            {/* Percentage counter & progress bar */}
            <div className="flex flex-col items-center gap-3 w-48">
              <div className="w-full h-1 bg-surface-800 rounded-full overflow-hidden p-0.5">
                <motion.div
                  className="h-full bg-gradient-to-r from-accent-500 via-accent-400 to-cyan-400 rounded-full"
                  style={{ width: `${progress}%` }}
                  transition={{ ease: 'easeOut' }}
                />
              </div>

              <div className="flex items-center justify-between w-full text-xs font-mono text-surface-400">
                <span className="tracking-widest uppercase text-accent-400/80">INITIALIZING</span>
                <span className="font-bold text-surface-200">{progress}%</span>
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
