"use client";

import { useEffect, useRef } from "react";

interface FallingPatternProps {
  color?: string;
  particleCount?: number;
  particleSize?: number;
  speed?: number;
}

export default function FallingPattern({
  color = "rgba(14, 79, 177, 0.6)",
  particleCount = 80,
  particleSize = 2,
  speed = 0.5,
}: FallingPatternProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let width = canvas.width;
    let height = canvas.height;
    let animationFrameId: number;

    const particles: Array<{
      x: number;
      y: number;
      size: number;
      speed: number;
      opacity: number;
      vx: number;
    }> = [];

    const init = () => {
      particles.length = 0;
      for (let i = 0; i < particleCount; i++) {
        particles.push({
          x: Math.random() * width,
          y: Math.random() * height - height,
          size: Math.random() * particleSize + 1,
          speed: Math.random() * speed + 0.3,
          opacity: Math.random() * 0.5 + 0.3,
          vx: (Math.random() - 0.5) * 0.5,
        });
      }
    };

    const resize = () => {
      const parent = canvas.parentElement;
      if (parent) {
        width = parent.offsetWidth;
        height = parent.offsetHeight;
        canvas.width = width;
        canvas.height = height;
        init();
      }
    };

    const draw = () => {
      ctx.fillStyle = "rgba(0, 0, 0, 0.05)";
      ctx.fillRect(0, 0, width, height);

      ctx.fillStyle = color;
      particles.forEach((p) => {
        ctx.globalAlpha = p.opacity;
        ctx.fillRect(p.x, p.y, p.size, p.size);
      });
      ctx.globalAlpha = 1;
    };

    const update = () => {
      particles.forEach((p) => {
        p.y += p.speed;
        p.x += p.vx;

        if (p.x < 0) p.x = width;
        if (p.x > width) p.x = 0;

        if (p.y > height) {
          p.y = -10;
          p.x = Math.random() * width;
        }
      });
    };

    const animate = () => {
      update();
      draw();
      animationFrameId = requestAnimationFrame(animate);
    };

    resize();
    window.addEventListener("resize", resize);
    animate();

    return () => {
      window.removeEventListener("resize", resize);
      cancelAnimationFrame(animationFrameId);
    };
  }, [color, particleCount, particleSize, speed]);

  return (
    <canvas
      ref={canvasRef}
      className="absolute top-0 left-0 w-full h-full blur-[0.5px] pointer-events-none"
    />
  );
}
