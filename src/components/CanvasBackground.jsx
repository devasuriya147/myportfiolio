import React, { useEffect, useRef, useState } from 'react';

const FRAME_COUNT = 300;

export default function CanvasBackground() {
  const canvasRef = useRef(null);
  const [loadPercent, setLoadPercent] = useState(0);
  const [isLoaded, setIsLoaded] = useState(false);
  const animationFrameId = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d', { alpha: false });
    if (!ctx) return;

    const images = new Array(FRAME_COUNT);
    let loadedCount = 0;
    let currentFrame = 0;
    let targetFrame = 0;
    let lastRenderedFrame = -1;
    let isResizing = false;

    const getFramePath = (index) => {
      const frameNumber = String(index + 1).padStart(3, '0');
      const base = import.meta.env.BASE_URL || '/';
      const cleanBase = base.endsWith('/') ? base : `${base}/`;
      return `${cleanBase}ezgif-1bf3d1fe282b6319-jpg/ezgif-frame-${frameNumber}.jpg`;
    };

    const drawFrame = (frameIndex) => {
      const img = images[frameIndex];
      if (!img || !img.complete || img.naturalWidth === 0) return;

      const canvasWidth = canvas.width;
      const canvasHeight = canvas.height;

      const scale = Math.max(canvasWidth / img.naturalWidth, canvasHeight / img.naturalHeight);
      const scaledWidth = img.naturalWidth * scale;
      const scaledHeight = img.naturalHeight * scale;
      const offsetX = (canvasWidth - scaledWidth) / 2;
      const offsetY = (canvasHeight - scaledHeight) / 2;

      ctx.drawImage(img, offsetX, offsetY, scaledWidth, scaledHeight);
      lastRenderedFrame = frameIndex;
    };

    const resizeCanvas = () => {
      const dpr = window.devicePixelRatio || 1;
      const width = window.innerWidth;
      const height = window.innerHeight;

      canvas.width = Math.round(width * dpr);
      canvas.height = Math.round(height * dpr);
      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;

      lastRenderedFrame = -1;
      drawFrame(Math.round(currentFrame));
    };

    const updateScroll = () => {
      const maxScroll = document.documentElement.scrollHeight - window.innerHeight;
      if (maxScroll <= 0) return;
      const scrollFraction = Math.max(0, Math.min(1, window.scrollY / maxScroll));
      targetFrame = scrollFraction * (FRAME_COUNT - 1);
    };

    const animate = () => {
      const delta = targetFrame - currentFrame;
      if (Math.abs(delta) > 0.001) {
        currentFrame += delta * 0.09;
      } else {
        currentFrame = targetFrame;
      }

      const frameToRender = Math.max(0, Math.min(FRAME_COUNT - 1, Math.round(currentFrame)));
      if (frameToRender !== lastRenderedFrame) {
        drawFrame(frameToRender);
      }

      animationFrameId.current = requestAnimationFrame(animate);
    };

    // Preload image sequence
    for (let i = 0; i < FRAME_COUNT; i++) {
      const img = new Image();
      img.src = getFramePath(i);

      img.onload = () => {
        images[i] = img;
        loadedCount++;
        const percent = Math.floor((loadedCount / FRAME_COUNT) * 100);
        setLoadPercent(percent);

        if (i === 0 && lastRenderedFrame === -1) {
          drawFrame(0);
        }

        if (loadedCount >= FRAME_COUNT) {
          setTimeout(() => setIsLoaded(true), 150);
        }
      };

      img.onerror = () => {
        loadedCount++;
        if (loadedCount >= FRAME_COUNT) {
          setIsLoaded(true);
        }
      };
    }

    // Safety timeout to dismiss preloader in case of slow or blocked network
    const fallbackTimer = setTimeout(() => {
      setIsLoaded(true);
    }, 4000);

    const handleResize = () => {
      if (!isResizing) {
        isResizing = true;
        requestAnimationFrame(() => {
          resizeCanvas();
          isResizing = false;
        });
      }
    };

    resizeCanvas();
    updateScroll();
    window.addEventListener('scroll', updateScroll, { passive: true });
    window.addEventListener('resize', handleResize);
    animationFrameId.current = requestAnimationFrame(animate);

    return () => {
      window.removeEventListener('scroll', updateScroll);
      window.removeEventListener('resize', handleResize);
      clearTimeout(fallbackTimer);
      if (animationFrameId.current) {
        cancelAnimationFrame(animationFrameId.current);
      }
    };
  }, []);

  return (
    <>
      {/* Minimalist loading overlay */}
      <div id="loader" className={`loader ${isLoaded ? 'loaded' : ''}`}>
        <div className="loader-spinner"></div>
        <div id="loader-text" className="loader-text">
          Loading {loadPercent}%
        </div>
      </div>

      {/* Background Canvas for smooth scroll animation */}
      <canvas id="canvas" ref={canvasRef} aria-hidden="true"></canvas>
    </>
  );
}
