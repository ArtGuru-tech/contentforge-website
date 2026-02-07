"use client"

import { useEffect } from 'react';
import { initializePaddle } from '@/lib/paddle';

export default function PaddleInitializer() {
  useEffect(() => {
    // Wait for Paddle script to load
    const checkPaddle = () => {
      if (typeof window !== 'undefined' && window.Paddle) {
        initializePaddle();
      } else {
        // Retry after a short delay if Paddle isn't loaded yet
        setTimeout(checkPaddle, 100);
      }
    };

    checkPaddle();
  }, []);

  return null;
}
