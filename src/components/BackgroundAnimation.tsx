
import React from 'react';
import WaveBackground from './WaveBackground';

const BackgroundAnimation = () => {
  return (
    <div className="fixed inset-0 overflow-hidden z-0">
      {/* Pure black background */}
      <div className="absolute inset-0 bg-black"></div>
      
      {/* Wave animation */}
      <WaveBackground />
      
      {/* Subtle grid pattern */}
      <div className="absolute inset-0 bg-grid-white/[0.01] bg-[length:50px_50px]"></div>
      
      {/* Noise texture */}
      <div className="absolute inset-0 opacity-5" style={{ 
        backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")` 
      }}></div>
    </div>
  );
};

export default BackgroundAnimation;
