"use client"

import { useEffect } from 'react';
import { initializePaddle } from '@/lib/paddle';

const MAX_RETRIES = 50; // Max 5 seconds (50 * 100ms)

export default function PaddleInitializer() {
  useEffect(() => {
    let retryCount = 0;
    let timeoutId: NodeJS.Timeout | null = null;

    // Wait for Paddle script to load
    const checkPaddle = () => {
      if (typeof window !== 'undefined' && window.Paddle) {
        initializePaddle();
      } else if (retryCount < MAX_RETRIES) {
        // Retry after a short delay if Paddle isn't loaded yet
        retryCount++;
        timeoutId = setTimeout(checkPaddle, 100);
      }
    };

    checkPaddle();

    // Cleanup function to prevent memory leaks
    return () => {
      if (timeoutId) {
        clearTimeout(timeoutId);
      }
    };
  }, []);

  return null;
}
