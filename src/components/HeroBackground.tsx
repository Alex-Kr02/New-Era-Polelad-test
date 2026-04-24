'use client';

import { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
import styles from './HeroBackground.module.css';

// Register GSAP plugin
if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

const FRAME_COUNT = 192;
const BASE_PATH = '/images/ezgif-split/';

export default function HeroBackground({ scrollTarget }: { scrollTarget: React.RefObject<HTMLElement | null> }) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [images, setImages] = useState<HTMLImageElement[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  // Preload images
  useEffect(() => {
    const preloadImages = async () => {
      const loadedImages: HTMLImageElement[] = [];
      const promises = [];

      for (let i = 0; i < FRAME_COUNT; i++) {
        const p = new Promise<void>((resolve, reject) => {
          const img = new Image();
          img.crossOrigin = 'anonymous';
          const delay = (i - 2) % 6 === 0 ? '0.05s' : '0.04s';
          const filename = `frame_${i.toString().padStart(3, '0')}_delay-${delay}.gif`;
          img.src = `${BASE_PATH}${filename}`;
          img.onload = () => resolve();
          img.onerror = (e) => reject(e);
          loadedImages[i] = img;
        });
        promises.push(p);
      }

      try {
        await Promise.all(promises);
        setImages(loadedImages);
        setIsLoading(false);
      } catch (err) {
        console.error("Error preloading images:", err);
      }
    };

    preloadImages();
  }, []);

  // GSAP Scroll Animation
  useEffect(() => {
    if (images.length === 0 || !canvasRef.current || !scrollTarget.current) return;

    const canvas = canvasRef.current;
    const context = canvas.getContext('2d', { willReadFrequently: true });
    if (!context) return;

    // Proxy object for GSAP to animate
    const animationObj = { frame: 0 };

    const render = () => {
      const idx = Math.floor(animationObj.frame);
      const image = images[idx];
      if (!image || !context) return;
      
      context.clearRect(0, 0, canvas.width, canvas.height);

      const scale = Math.min(canvas.width / image.width, canvas.height / image.height);
      const w = Math.floor(image.width * scale);
      const h = Math.floor(image.height * scale);
      const x = Math.floor((canvas.width / 2) - w / 2);
      const y = Math.floor((canvas.height / 2) - h / 2);
      
      context.drawImage(image, x, y, w, h);
    };

    // Create the GSAP animation linked to scroll
    const scrollAnimation = gsap.to(animationObj, {
      frame: 179, // Stop at 179 to avoid artifacts as requested
      snap: 'frame',
      ease: 'none',
      scrollTrigger: {
        trigger: scrollTarget.current,
        start: 'top top',
        end: '+=900', // 900px scroll range
        scrub: 1.2,   // This provides the "smoothing" lag for premium feel
        markers: false
      },
      onUpdate: render
    });

    const handleResize = () => {
      if (!canvas.parentElement) return;
      const parent = canvas.parentElement;
      canvas.width = parent.clientWidth * window.devicePixelRatio;
      canvas.height = parent.clientHeight * window.devicePixelRatio;
      render();
    };

    window.addEventListener('resize', handleResize);
    handleResize();

    // Initial render
    render();

    return () => {
      scrollAnimation.kill();
      if (scrollAnimation.scrollTrigger) {
        scrollAnimation.scrollTrigger.kill();
      }
      window.removeEventListener('resize', handleResize);
    };
  }, [images, scrollTarget]);

  return (
    <div className={styles.container}>
      <div className={styles.vignette} />
      <div className={styles.canvasWrapper}>
        <canvas
          ref={canvasRef}
          className={styles.animationCanvas}
          style={{
            width: '100%',
            height: '100%',
            opacity: isLoading ? 0 : 1,
            transition: 'opacity 0.8s ease'
          }}
        />
      </div>

      {isLoading && (
        <div style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          background: '#000',
          zIndex: 10
        }}>
          <div style={{
            width: '48px',
            height: '48px',
            border: '4px solid rgba(255, 20, 147, 0.3)',
            borderTopColor: '#ff1493',
            borderRadius: '50%',
            animation: 'spin 1s linear infinite'
          }} />
          <style>{`
            @keyframes spin {
              to { transform: rotate(360deg); }
            }
          `}</style>
        </div>
      )}
    </div>
  );
}



