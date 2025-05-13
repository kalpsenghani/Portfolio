import React, { useEffect } from 'react';

const ModernGradientBackground: React.FC = () => {
  useEffect(() => {
    const particlesContainer = document.getElementById('particles-container');
    if (!particlesContainer) return;
    const particleCount = 80;
    
    function resetParticle(particle: HTMLDivElement) {
      const posX = Math.random() * 100;
      const posY = Math.random() * 100;
      particle.style.left = `${posX}%`;
      particle.style.top = `${posY}%`;
      particle.style.opacity = '0';
      return { x: posX, y: posY };
    }

    function animateParticle(particle: HTMLDivElement) {
      const pos = resetParticle(particle);
      const duration = Math.random() * 10 + 10;
      const delay = Math.random() * 5;
      setTimeout(() => {
        particle.style.transition = `all ${duration}s linear`;
        particle.style.opacity = (Math.random() * 0.3 + 0.1).toString();
        const moveX = pos.x + (Math.random() * 20 - 10);
        const moveY = pos.y - Math.random() * 30;
        particle.style.left = `${moveX}%`;
        particle.style.top = `${moveY}%`;
        setTimeout(() => {
          animateParticle(particle);
        }, duration * 1000);
      }, delay * 1000);
    }

    // Clear previous particles if any
    particlesContainer.innerHTML = '';
    for (let i = 0; i < particleCount; i++) {
      const particle = document.createElement('div');
      particle.className = 'particle';
      const size = Math.random() * 3 + 1;
      particle.style.width = `${size}px`;
      particle.style.height = `${size}px`;
      resetParticle(particle);
      particlesContainer.appendChild(particle);
      animateParticle(particle);
    }

    // Mouse interaction
    const mouseMoveHandler = (e: MouseEvent) => {
      const mouseX = (e.clientX / window.innerWidth) * 100;
      const mouseY = (e.clientY / window.innerHeight) * 100;
      const particle = document.createElement('div');
      particle.className = 'particle';
      const size = Math.random() * 4 + 2;
      particle.style.width = `${size}px`;
      particle.style.height = `${size}px`;
      particle.style.left = `${mouseX}%`;
      particle.style.top = `${mouseY}%`;
      particle.style.opacity = '0.6';
      particlesContainer.appendChild(particle);
      setTimeout(() => {
        particle.style.transition = 'all 2s ease-out';
        particle.style.left = `${mouseX + (Math.random() * 10 - 5)}%`;
        particle.style.top = `${mouseY + (Math.random() * 10 - 5)}%`;
        particle.style.opacity = '0';
        setTimeout(() => {
          particle.remove();
        }, 2000);
      }, 10);
      // Subtle movement of gradient spheres
      const spheres = document.querySelectorAll('.gradient-sphere');
      const moveX = (e.clientX / window.innerWidth - 0.5) * 5;
      const moveY = (e.clientY / window.innerHeight - 0.5) * 5;
      spheres.forEach(sphere => {
        (sphere as HTMLElement).style.transform = `translate(${moveX}px, ${moveY}px)`;
      });
    };
    document.addEventListener('mousemove', mouseMoveHandler);
    return () => {
      document.removeEventListener('mousemove', mouseMoveHandler);
    };
  }, []);

  return (
    <>
      <style>{`
        .gradient-background {
          position: fixed;
          top: 0;
          left: 0;
          width: 100vw;
          height: 100vh;
          z-index: 0;
          overflow: hidden;
        }
        .gradient-sphere {
          position: absolute;
          border-radius: 50%;
          filter: blur(60px);
          opacity: 0.35;
        }
        .sphere-1 {
          width: 40vw;
          height: 40vw;
          background: linear-gradient(40deg, rgba(255, 0, 128, 0.6), rgba(255, 102, 0, 0.2));
          top: -10%;
          left: -10%;
          animation: float-1 15s ease-in-out infinite alternate;
        }
        .sphere-2 {
          width: 45vw;
          height: 45vw;
          background: linear-gradient(240deg, rgba(72, 0, 255, 0.5), rgba(0, 183, 255, 0.15));
          bottom: -20%;
          right: -10%;
          animation: float-2 18s ease-in-out infinite alternate;
        }
        .sphere-3 {
          width: 30vw;
          height: 30vw;
          background: linear-gradient(120deg, rgba(133, 89, 255, 0.25), rgba(98, 216, 249, 0.12));
          top: 60%;
          left: 20%;
          animation: float-3 20s ease-in-out infinite alternate;
        }
        .noise-overlay {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          opacity: 0.03;
          z-index: 5;
          background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E");
        }
        @keyframes float-1 {
          0% { transform: translate(0, 0) scale(1); }
          100% { transform: translate(10%, 10%) scale(1.1); }
        }
        @keyframes float-2 {
          0% { transform: translate(0, 0) scale(1); }
          100% { transform: translate(-10%, -5%) scale(1.15); }
        }
        @keyframes float-3 {
          0% { transform: translate(0, 0) scale(1); opacity: 0.3; }
          100% { transform: translate(-5%, 10%) scale(1.05); opacity: 0.6; }
        }
        .grid-overlay {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background-size: 40px 40px;
          background-image: 
            linear-gradient(to right, rgba(255, 255, 255, 0.03) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(255, 255, 255, 0.03) 1px, transparent 1px);
          z-index: 2;
        }
        .glow {
          position: absolute;
          width: 40vw;
          height: 40vh;
          background: radial-gradient(circle, rgba(72, 0, 255, 0.08), transparent 70%);
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          z-index: 2;
          animation: pulse 8s infinite alternate;
          filter: blur(30px);
        }
        @keyframes pulse {
          0% { opacity: 0.3; transform: translate(-50%, -50%) scale(0.9); }
          100% { opacity: 0.7; transform: translate(-50%, -50%) scale(1.1); }
        }
        .particles-container {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          z-index: 3;
          pointer-events: none;
        }
        .particle {
          position: absolute;
          background: white;
          border-radius: 50%;
          opacity: 0;
          pointer-events: none;
        }
      `}</style>
      <div className="gradient-background">
        <div className="gradient-sphere sphere-1"></div>
        <div className="gradient-sphere sphere-2"></div>
        <div className="gradient-sphere sphere-3"></div>
        <div className="glow"></div>
        <div className="grid-overlay"></div>
        <div className="noise-overlay"></div>
        <div className="particles-container" id="particles-container"></div>
      </div>
    </>
  );
};

export default ModernGradientBackground; 