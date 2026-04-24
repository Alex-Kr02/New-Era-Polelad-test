'use client';

import { useEffect, useRef, useState } from 'react';
import { useScroll, useTransform, motion, useSpring } from 'framer-motion';
import styles from './HeroBackground.module.css';

const FRAME_COUNT = 192;
const BASE_PATH = '/images/ezgif-split/';

export default function HeroBackground({ scrollTarget }: { scrollTarget: React.RefObject<HTMLElement | null> }) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [images, setImages] = useState<HTMLImageElement[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  // Track scroll progress within the target container
  const { scrollYProgress } = useScroll({
    target: scrollTarget,
    offset: ["start start", "end end"]
  });

  
  // Smooth out the scroll value for ultra-premium feel
  const smoothScroll = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  // Map scroll progress to frame index
  // Limiting to 179 to avoid artifacts in frames 180-191
  const frameIndex = useTransform(smoothScroll, [0, 1], [0, 179]);


  // Preload images
  useEffect(() => {
    const preloadImages = async () => {
      const loadedImages: HTMLImageElement[] = [];
      const promises = [];

      for (let i = 0; i < FRAME_COUNT; i++) {
        const p = new Promise<void>((resolve, reject) => {
          const img = new Image();
          img.crossOrigin = 'anonymous'; // Prevent tainted canvas
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

  // Draw current frame to canvas
  useEffect(() => {
    if (images.length === 0 || !canvasRef.current) return;

    const render = () => {
      const idx = Math.floor(frameIndex.get());
      const image = images[idx];
      if (!image) return;

      const canvas = canvasRef.current;
      if (!canvas) return;
      const context = canvas.getContext('2d', { willReadFrequently: true });
      if (!context) return;

      context.clearRect(0, 0, canvas.width, canvas.height);

      const scale = Math.min(canvas.width / image.width, canvas.height / image.height);
      const w = Math.floor(image.width * scale);
      const h = Math.floor(image.height * scale);
      const x = Math.floor((canvas.width / 2) - w / 2);
      const y = Math.floor((canvas.height / 2) - h / 2);
      
      context.drawImage(image, x, y, w, h);
      
    };






    const unsubscribe = frameIndex.on('change', () => {
      render();
    });
    
    render();

    const handleResize = () => {
      if (!canvasRef.current || !canvasRef.current.parentElement) return;
      const parent = canvasRef.current.parentElement;
      canvasRef.current.width = parent.clientWidth * window.devicePixelRatio;
      canvasRef.current.height = parent.clientHeight * window.devicePixelRatio;
      render();
    };

    window.addEventListener('resize', handleResize);
    handleResize();

    return () => {
      unsubscribe();
      window.removeEventListener('resize', handleResize);
    };
  }, [images, frameIndex]);


  return (
    <div className={styles.container}>
      <div className={styles.atmosphere} />
      <div className={styles.smoke} />
      <div className={styles.vignette} />
      <div className={styles.scanlines} />
      
      <div className={styles.chromePole} />

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


