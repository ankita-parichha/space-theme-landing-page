import React, { useEffect, useRef } from "react";

export default function ParticlesBackground({ theme }) {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationFrameId;
    let particles = [];
    let shootingStars = [];
    
    const isDark = theme === "dark";

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      initParticles();
    };

    const initParticles = () => {
      particles = [];
      const particleCount = Math.min(Math.floor(window.innerWidth / 15), 120);
      
      for (let i = 0; i < particleCount; i++) {
        particles.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          radius: Math.random() * 1.5 + 0.5,
          // Twinkle speed
          alpha: Math.random(),
          twinkleSpeed: 0.005 + Math.random() * 0.015,
          twinkleDirection: Math.random() > 0.5 ? 1 : -1,
          // Floating speed (cosmic dust)
          vx: (Math.random() - 0.5) * 0.08,
          vy: (Math.random() - 0.5) * 0.08,
        });
      }
    };

    const addShootingStar = () => {
      if (Math.random() > 0.995 && shootingStars.length < 2) {
        shootingStars.push({
          x: Math.random() * canvas.width * 0.7,
          y: 0,
          length: Math.random() * 80 + 40,
          speed: Math.random() * 12 + 8,
          angle: Math.PI / 4 + (Math.random() - 0.5) * 0.1, // around 45 degrees
          opacity: 1,
          width: Math.random() * 1.5 + 0.5,
        });
      }
    };

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Draw background space glow (Nebula)
      const isDarkTheme = theme === "dark";
      
      // Twinkling stars & cosmic dust
      particles.forEach((p) => {
        // Twinkle
        p.alpha += p.twinkleSpeed * p.twinkleDirection;
        if (p.alpha >= 1) {
          p.alpha = 1;
          p.twinkleDirection = -1;
        } else if (p.alpha <= 0.1) {
          p.alpha = 0.1;
          p.twinkleDirection = 1;
        }

        // Float
        p.x += p.vx;
        p.y += p.vy;

        // Wrap around boundaries
        if (p.x < 0) p.x = canvas.width;
        if (p.x > canvas.width) p.x = 0;
        if (p.y < 0) p.y = canvas.height;
        if (p.y > canvas.height) p.y = 0;

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
        
        if (isDarkTheme) {
          // Purple/Cyan glow stars
          const r = Math.random() > 0.5 ? "rgba(99, 102, 241, " : "rgba(6, 182, 212, ";
          ctx.fillStyle = r + p.alpha + ")";
        } else {
          // Light theme: dark blue/purple stars
          ctx.fillStyle = `rgba(15, 23, 42, ${p.alpha * 0.4})`;
        }
        ctx.fill();
      });

      // Shooting stars
      addShootingStar();
      for (let i = shootingStars.length - 1; i >= 0; i--) {
        const s = shootingStars[i];
        
        ctx.beginPath();
        const endX = s.x + Math.cos(s.angle) * s.length;
        const endY = s.y + Math.sin(s.angle) * s.length;
        
        const grad = ctx.createLinearGradient(s.x, s.y, endX, endY);
        if (isDarkTheme) {
          grad.addColorStop(0, `rgba(6, 182, 212, ${s.opacity})`);
          grad.addColorStop(0.3, `rgba(168, 85, 247, ${s.opacity * 0.5})`);
          grad.addColorStop(1, "rgba(255, 255, 255, 0)");
        } else {
          grad.addColorStop(0, `rgba(99, 102, 241, ${s.opacity * 0.7})`);
          grad.addColorStop(1, "rgba(255, 255, 255, 0)");
        }

        ctx.strokeStyle = grad;
        ctx.lineWidth = s.width;
        ctx.moveTo(s.x, s.y);
        ctx.lineTo(endX, endY);
        ctx.stroke();

        // Move
        s.x += Math.cos(s.angle) * s.speed;
        s.y += Math.sin(s.angle) * s.speed;
        s.opacity -= 0.015;

        // Remove dead shooting stars
        if (s.opacity <= 0 || s.x > canvas.width || s.y > canvas.height) {
          shootingStars.splice(i, 1);
        }
      }

      animationFrameId = requestAnimationFrame(draw);
    };

    window.addEventListener("resize", resizeCanvas);
    resizeCanvas();
    draw();

    return () => {
      window.removeEventListener("resize", resizeCanvas);
      cancelAnimationFrame(animationFrameId);
    };
  }, [theme]);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 -z-20 w-full h-full pointer-events-none transition-colors duration-500"
    />
  );
}
