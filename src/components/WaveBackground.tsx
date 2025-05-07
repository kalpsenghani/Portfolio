
import React, { useEffect, useRef } from 'react';

const WaveBackground = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    
    const ctx = canvas.getContext('2d');
    if (!ctx) return;
    
    // Set canvas to full screen
    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    
    window.addEventListener('resize', handleResize);
    handleResize();
    
    // Wave parameters
    const waves = [
      { y: 0.5, amplitude: 25, frequency: 0.02, speed: 0.01, color: 'rgba(66, 99, 235, 0.05)' },
      { y: 0.6, amplitude: 15, frequency: 0.03, speed: 0.015, color: 'rgba(110, 89, 240, 0.05)' },
      { y: 0.7, amplitude: 30, frequency: 0.01, speed: 0.005, color: 'rgba(65, 88, 208, 0.03)' },
    ];
    
    let animationFrameId: number;
    let phase = 0;
    
    // Animation loop
    const render = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      waves.forEach(wave => {
        ctx.beginPath();
        ctx.moveTo(0, canvas.height * wave.y);
        
        // Draw wave path
        for (let x = 0; x < canvas.width; x++) {
          const dx = x * wave.frequency;
          const y = Math.sin(dx + phase * wave.speed) * wave.amplitude + canvas.height * wave.y;
          ctx.lineTo(x, y);
        }
        
        // Complete the wave path
        ctx.lineTo(canvas.width, canvas.height);
        ctx.lineTo(0, canvas.height);
        ctx.closePath();
        
        // Fill the wave
        ctx.fillStyle = wave.color;
        ctx.fill();
      });
      
      // Update phase for animation
      phase += 0.5;
      animationFrameId = requestAnimationFrame(render);
    };
    
    render();
    
    // Cleanup
    return () => {
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);
  
  return <canvas ref={canvasRef} className="fixed inset-0 z-0 blur-md" />;
};

export default WaveBackground;
