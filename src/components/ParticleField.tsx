"use client";

import { useEffect, useRef } from "react";

type Particle = {
  x: number;
  y: number;
  vx: number;
  vy: number;
  size: number;
};

const BASE_DENSITY = 0.00006;
const MAX_PARTICLES = 60;
const LINE_DISTANCE = 140;
const LINE_DISTANCE_SQ = LINE_DISTANCE * LINE_DISTANCE;
const POINTER_DISTANCE = 180;
const POINTER_DISTANCE_SQ = POINTER_DISTANCE * POINTER_DISTANCE;
const FRAME_INTERVAL = 1000 / 30; // ~30 FPS

function createParticles(width: number, height: number): Particle[] {
  const area = width * height;
  const targetCount = Math.min(
    MAX_PARTICLES,
    Math.max(20, Math.floor(area * BASE_DENSITY)),
  );

  return Array.from({ length: targetCount }, () => ({
    x: Math.random() * width,
    y: Math.random() * height,
    vx: (Math.random() - 0.5) * 0.28,
    vy: (Math.random() - 0.5) * 0.28,
    size: Math.random() * 1.8 + 0.8,
  }));
}

export default function ParticleField() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;

    if (!canvas) {
      return;
    }

    const context = canvas.getContext("2d");
    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");

    if (!context || mediaQuery.matches) {
      return;
    }

    let animationFrame = 0;
    let lastTime = 0;
    let particles: Particle[] = [];
    let pointer = { x: Number.NaN, y: Number.NaN };
    let width = 0;
    let height = 0;

    const resize = () => {
      width = canvas.offsetWidth;
      height = canvas.offsetHeight;

      const ratio = Math.min(window.devicePixelRatio || 1, 1.5);
      canvas.width = Math.floor(width * ratio);
      canvas.height = Math.floor(height * ratio);
      context.setTransform(ratio, 0, 0, ratio, 0, 0);
      particles = createParticles(width, height);
    };

    const draw = (timestamp: number) => {
      if (timestamp - lastTime < FRAME_INTERVAL) {
        animationFrame = window.requestAnimationFrame(draw);
        return;
      }

      lastTime = timestamp;
      context.clearRect(0, 0, width, height);

      for (const particle of particles) {
        particle.x += particle.vx;
        particle.y += particle.vy;

        if (particle.x <= 0 || particle.x >= width) {
          particle.vx *= -1;
        }

        if (particle.y <= 0 || particle.y >= height) {
          particle.vy *= -1;
        }

        context.beginPath();
        context.fillStyle = "rgba(236, 238, 255, 0.78)";
        context.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
        context.fill();
      }

      for (let index = 0; index < particles.length; index += 1) {
        const source = particles[index];

        for (let inner = index + 1; inner < particles.length; inner += 1) {
          const target = particles[inner];
          const dx = source.x - target.x;
          const dy = source.y - target.y;
          const distanceSq = dx * dx + dy * dy;

          if (distanceSq >= LINE_DISTANCE_SQ) {
            continue;
          }

          const distance = Math.sqrt(distanceSq);
          const opacity = (1 - distance / LINE_DISTANCE) * 0.22;
          context.beginPath();
          context.strokeStyle = `rgba(109, 156, 255, ${opacity})`;
          context.lineWidth = 1;
          context.moveTo(source.x, source.y);
          context.lineTo(target.x, target.y);
          context.stroke();
        }

        if (!Number.isNaN(pointer.x) && !Number.isNaN(pointer.y)) {
          const dx = source.x - pointer.x;
          const dy = source.y - pointer.y;
          const distanceSq = dx * dx + dy * dy;

          if (distanceSq < POINTER_DISTANCE_SQ) {
            const distance = Math.sqrt(distanceSq);
            context.beginPath();
            context.strokeStyle = `rgba(255, 255, 255, ${(1 - distance / POINTER_DISTANCE) * 0.16})`;
            context.moveTo(source.x, source.y);
            context.lineTo(pointer.x, pointer.y);
            context.stroke();
          }
        }
      }

      animationFrame = window.requestAnimationFrame(draw);
    };

    const handlePointerMove = (event: PointerEvent) => {
      const bounds = canvas.getBoundingClientRect();
      pointer = {
        x: event.clientX - bounds.left,
        y: event.clientY - bounds.top,
      };
    };

    const handlePointerLeave = () => {
      pointer = { x: Number.NaN, y: Number.NaN };
    };

    const handleVisibilityChange = () => {
      if (document.visibilityState === "hidden") {
        window.cancelAnimationFrame(animationFrame);
      } else {
        animationFrame = window.requestAnimationFrame(draw);
      }
    };

    resize();
    animationFrame = window.requestAnimationFrame(draw);

    window.addEventListener("resize", resize);
    window.addEventListener("pointermove", handlePointerMove);
    window.addEventListener("pointerleave", handlePointerLeave);
    document.addEventListener("visibilitychange", handleVisibilityChange);

    return () => {
      window.cancelAnimationFrame(animationFrame);
      window.removeEventListener("resize", resize);
      window.removeEventListener("pointermove", handlePointerMove);
      window.removeEventListener("pointerleave", handlePointerLeave);
      document.removeEventListener("visibilitychange", handleVisibilityChange);
    };
  }, []);

  return <canvas ref={canvasRef} className="particle-field" aria-hidden="true" />;
}
