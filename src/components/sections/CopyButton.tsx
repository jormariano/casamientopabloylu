'use client';

import { useState } from 'react';
import { IoCopyOutline } from 'react-icons/io5';
import { CopyButtonProps } from '@/src/types/copyButton.types';

export function CopyButton({ value }: CopyButtonProps) {
  const [copied, setCopied] = useState(false);
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const isTouchDevice =
    typeof window !== 'undefined' && 'ontouchstart' in window;

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(value);
      setCopied(true);

      setTimeout(() => {
        setCopied(false);
      }, 1200);
    } catch (error) {
      console.error('Error copiando al portapapeles:', error);
    }
  };

  const handleMouseMove = (e: React.MouseEvent<HTMLButtonElement>) => {
    if (!isTouchDevice) {
      setPosition({
        x: e.clientX,
        y: e.clientY,
      });
    }
  };

  return (
    <>
      <button
        type="button"
        onClick={handleCopy}
        onMouseMove={handleMouseMove}
        className="rounded-full px-2 transition hover:bg-cream/20"
      >
        <IoCopyOutline size={18} />
      </button>

      {copied && (
        <div
          className={`z-50 rounded-md bg-black/80 px-2 py-1 text-xs text-white pointer-events-none ${
            isTouchDevice ? 'fixed bottom-6 left-1/2 -translate-x-1/2' : 'fixed'
          }`}
          style={
            !isTouchDevice
              ? {
                  top: position.y - 35,
                  left: position.x,
                  transform: 'translateX(-50%)',
                }
              : undefined
          }
        >
          ¡Copiado!
        </div>
      )}
    </>
  );
}
